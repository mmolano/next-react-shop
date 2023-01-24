import { getSession } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';
import { cartProduct } from '../../interface/product';

const secret: string | undefined = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!;
const stripe: Stripe = new Stripe(secret, {
  apiVersion: '2022-11-15',
});

export default async function handler(request: NextApiRequest, response: NextApiResponse) {
  const user = await getSession(request, response);
  const customer_id = user ? user[`${process.env.NEXT_PUBLIC_BASE_URL}/stripe_customer_id`] : undefined;

  if (request.method === 'POST') {
    try {
      const session = await stripe.checkout.sessions.create({
        mode: 'payment',
        submit_type: 'pay',
        customer: customer_id,
        payment_method_types: ['card'],
        success_url: `${request.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${request.headers.origin}/canceled`,
        shipping_options: [{
          shipping_rate: `${process.env.NEXT_PUBLIC_STRIPE_SHIPPING_FAST_ID}`,
        }],
        shipping_address_collection: {
          allowed_countries: ["FR", "JP", "US", "GB"],
        },
        allow_promotion_codes: true,
        line_items: request.body.map((item: cartProduct) => {
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [item.image.data[0].attributes.formats.thumbnail.url],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          }
        })
      });

      response.status(200).json(session);
    } catch (error: any) {
      response.status(error.statusCode ? error.statusCode : 500).json(error.message);
    }
  }

}