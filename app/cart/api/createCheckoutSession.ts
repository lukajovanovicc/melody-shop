'use server';

import type { Product } from '@/app/products/[id]/types';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil',
});

export const createCheckoutSession = async (products: Product[]) => {
  try {
    const lineItems = products.map((product) => ({
      price_data: {
        currency: 'rsd',
        product_data: {
          name: product.name,
          description: product.description || '',
        },
        unit_amount: product.price * 100,
      },
      quantity: product.quantity,
    }));

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      invoice_creation: {
        enabled: true,
      },
      success_url: `${baseUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cart`,
      metadata: {
        orderItems: products.map((p) => `${p.name} (${p.quantity})`).join(', '),
      },
    });

    return { sessionId: session.id };
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return null;
  }
};
