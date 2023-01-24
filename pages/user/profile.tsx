import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { UserProfile } from '@auth0/nextjs-auth0/dist/client/use-user';
import { useRouter } from 'next/router';
import { Stripe } from 'stripe';
import { parsePrice } from '../../lib/price';

const secret: string | undefined = process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!;

const stripe: Stripe = new Stripe(secret, {
   apiVersion: '2022-11-15',
});

export const getServerSideProps = withPageAuthRequired({
   async getServerSideProps(x) {
      const user = await getSession(x.req, x.res);
      const customer_id = user ? user[`${process.env.NEXT_PUBLIC_BASE_URL}/stripe_customer_id`] : undefined;
      const getOrders = await stripe.paymentIntents.list({
         customer: customer_id,
      })
      return {
         props: { orders: getOrders.data },
      };
   }
})

interface UserProps {
   user: UserProfile;
   orders: any[];
}

export default function User({ user, orders }: UserProps) {
   const route = useRouter();

   return (
      <>
         {
            user &&
            <div className="flex flex-col-reverse">
               <article className="bg-gray-100 px-5 py-10">
                  <div className="flex justify-between mb-8">
                     <h1 className="text-3xl">Previous orders: </h1>
                     <h2>Number of orders: {orders.length}</h2>
                  </div>
                  <div>
                     {orders.map((order) => (
                        <div className="bg-white my-3 p-9 flex justify-between flex-wrap break-line"
                           key={order.id}
                        >
                           <h2>Order number: {order.id}</h2>
                           <h2>Amount: ${parsePrice(order.amount, true)}</h2>
                           <h2>{order.receipt_email}</h2>
                        </div>
                     ))}
                  </div>
               </article>
               <div className="flex justify-between my-10 px-5 flex-wrap">
                  <h2 className="text-lg">{user.name}</h2>
                  <h2 className="text-lg">{user.email}</h2>
                  <button
                     className="focus:outline-none focus:ring-2 enabled:hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 py-3 w-20"
                     onClick={() => route.push('/api/auth/logout')}>
                     Logout
                  </button>
               </div>
            </div>
         }
      </>
   )
}