'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getStripe } from '@/lib/stripe';
import { useState } from 'react';
import { useCart } from '@/hooks/useCart';
import { createCheckoutSession } from '../../app/cart/api/createCheckoutSession';
import { Spinner } from '../ui/spinner';

const Order = () => {
  const { products } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    setLoading(true);
    setError(null);

    try {
      const session = await createCheckoutSession(products);

      if (!session?.sessionId) {
        throw new Error('Failed to create checkout session');
      }

      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { error } = await stripe.redirectToCheckout({
        sessionId: session.sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(
        err instanceof Error ? err.message : 'An error occurred during checkout'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className='w-full max-w-md'>
      <CardContent className='p-8'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Checkout</h2>
        <strong>
          NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:{' '}
          {process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
        </strong>{' '}
        <div className='mb-6'>
          <h3 className='font-semibold mb-4'>Order Summary</h3>
          {products.map((product) => (
            <div key={product.id} className='flex justify-between mb-2'>
              <span>
                {product.name} x {product.quantity}
              </span>
              <span>{(product.price * product.quantity).toFixed(2)} RSD</span>
            </div>
          ))}
          <hr className='my-4' />
          <div className='flex justify-between font-bold'>
            <span>Total:</span>
            <span>
              {products
                .reduce((sum, p) => sum + p.price * p.quantity, 0)
                .toFixed(2)}{' '}
              RSD
            </span>
          </div>
        </div>
        {error && (
          <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded'>
            {error}
          </div>
        )}
        <Button onClick={handleCheckout} disabled={loading} className='w-full'>
          {loading ? <Spinner /> : 'Proceed to Payment'}
        </Button>
      </CardContent>
    </Card>
  );
};

export default Order;
