import { NextApiRequest, NextApiResponse } from 'next';
import { Stripe } from 'stripe';

// TODO: STRIPE PAY
const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`)

export default async (request: NextApiRequest, response: NextApiResponse) => {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      submit_type: 'pay',
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
      line_items: request.body.map((item: object) => {
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
              images: [item.image.data[0].attributes.formats.thumbnail.url],
            },
            unit_amount: item.price * 100,
          },
          adjustable_quantity: {
            //TODO: change to max item after DB change
            enabled: true,
            minimum: 1,
            maximum: 5
          },
          quantity: item.quantity,
        }
      })
    });

    response.status(200).json(session);
  } catch (error) {
    response.status(error.statusCode).json(error.message);
  }
}