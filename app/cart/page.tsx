'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { NextPage } from 'next';
import { useCart } from '@/hooks/useCart';
import PageLayout from '../layout/CustomLayout';

const CartPage: NextPage<any> = () => {
  const { products, deleteFromCart, updateProduct } = useCart();
  const [cartItems, setCartItems] = useState(products);
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      deleteFromCart(id);
      return;
    }
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 99 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (products.length === 0) {
    return (
      <PageLayout>
        <div className='container mx-auto px-4 py-16 h-[55vh] text-center'>
          <h1 className='text-3xl font-bold mb-4'>Your Cart is Empty</h1>
          <p className='text-muted-foreground mb-8'>
            Looks like you haven't added any items to your cart yet.
          </p>
          <Link href='/products'>
            <Button size='lg'>Continue Shopping</Button>
          </Link>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className='container mx-auto px-4 py-8'>
        <Link
          href='/products'
          className='inline-flex items-center gap-2 mb-6 text-primary hover:underline'
        >
          <ArrowLeft className='h-4 w-4' />
          Continue Shopping
        </Link>

        <h1 className='text-3xl font-bold mb-8'>Shopping Cart</h1>

        <div className='grid lg:grid-cols-3 gap-8'>
          {/* Cart Items */}
          <div className='lg:col-span-2 space-y-4'>
            {products.map((item) => (
              <Card key={item.id}>
                <CardContent className='p-6'>
                  <div className='flex items-center gap-4'>
                    <Image
                      src={item.images[0] || '/placeholder.svg'}
                      alt={item.name}
                      width={100}
                      height={100}
                      className='rounded-md'
                    />
                    <div className='flex-1'>
                      <h3 className='font-semibold text-lg'>{item.name}</h3>
                      <p className='text-muted-foreground'>${item.price}</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() =>
                          item.quantity === 1
                            ? deleteFromCart(item.id)
                            : updateProduct(
                                item.id,
                                'quantity',
                                item.quantity - 1
                              )
                        }
                      >
                        <Minus className='h-4 w-4' />
                      </Button>
                      <span className='w-12 text-center'>{item.quantity}</span>
                      <Button
                        variant='outline'
                        size='sm'
                        onClick={() =>
                          updateProduct(item.id, 'quantity', item.quantity + 1)
                        }
                      >
                        <Plus className='h-4 w-4' />
                      </Button>
                    </div>
                    <div className='text-right'>
                      <p className='font-semibold'>
                        ${(item.price * item.quantity).toLocaleString()}
                      </p>
                      <Button
                        variant='ghost'
                        size='sm'
                        onClick={() => deleteFromCart(item.id)}
                        className='text-red-500 hover:text-red-700'
                      >
                        <Trash2 className='h-4 w-4' />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className='lg:col-span-1'>
            <Card>
              <CardContent className='p-6'>
                <h2 className='text-xl font-semibold mb-4'>Order Summary</h2>

                <div className='space-y-2 mb-4'>
                  <div className='flex justify-between'>
                    <span>Subtotal:</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Shipping:</span>
                    <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
                  </div>
                  <div className='flex justify-between'>
                    <span>Tax:</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className='flex justify-between font-semibold text-lg'>
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                {shipping > 0 && (
                  <p className='text-sm text-muted-foreground mb-4'>
                    Add ${(99 - subtotal).toFixed(2)} more for free shipping!
                  </p>
                )}

                <div className='space-y-4'>
                  <div className='flex gap-2'>
                    <Input
                      placeholder='Promo code'
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button variant='outline'>Apply</Button>
                  </div>

                  <Button className='w-full' size='lg'>
                    Proceed to Checkout
                  </Button>

                  <Button variant='outline' className='w-full bg-transparent'>
                    Save for Later
                  </Button>
                </div>

                <div className='mt-6 text-sm text-muted-foreground'>
                  <p>• Secure checkout with SSL encryption</p>
                  <p>• 30-day return policy</p>
                  <p>• Free shipping on orders over $99</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default CartPage;
