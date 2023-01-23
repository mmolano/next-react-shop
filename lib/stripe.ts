import { loadStripe } from '@stripe/stripe-js';

export const getStripe: Promise<Stripe | null> = async () => {
  return await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
}; 