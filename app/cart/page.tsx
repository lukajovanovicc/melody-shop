'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import { NextPage } from 'next';
import PageLayout from '../layout/CustomLayout';

import CartItems from '@/components/Cart/CartItems';
import { useCart } from '@/hooks/useCart';
import Order from '@/components/Cart/Order';

const CartPage: NextPage<any> = () => {
  const { products } = useCart();
  const subtotal = products.reduce(
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
          <div className='lg:col-span-2 space-y-4'>
            <CartItems />
          </div>

          <div className='lg:col-span-1'>
            <Order />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
export default CartPage;
