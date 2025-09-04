import type { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripeSecret = process.env.STRIPE_SECRET_KEY || '';
const priceId = process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || '';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (!stripeSecret || !priceId) {
    return res.status(200).json({ url: null, hint: 'Missing STRIPE env vars' });
  }

  const stripe = new Stripe(stripeSecret, { apiVersion: '2023-10-16' });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      allow_promotion_codes: true,
      subscription_data: {
        trial_period_days: 3
      },
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });
    res.status(200).json({ url: session.url });
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
}
