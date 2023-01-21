import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
import Image from "next/image";
import { useRouter } from "next/router";
import { Stripe } from 'stripe';
import { Layout } from "../../components/Layout/Layout";
import { parsePrice } from "../../lib/price";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export const getServerSideProps = withPageAuthRequired({
   async getServerSideProps(x) {
      const session = getSession(x.req, x.res);
      const { user } = await getSession(x.req, x.res);
      const stripeId = user[`${process.env.NEXT_PUBLIC_BASE_URL}/stripe_customer_id`];
      const getOrders = await stripe.paymentIntents.list({
         customer: stripeId,
      })
      return {
         props: { orders: getOrders.data },
      };
   }
})

export default function User({ user, orders }) {
   const route = useRouter();
   //TODO: add button to view specific order details
   console.log(orders);
   return (
      <>
         <Layout>
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
                           <div className="bg-white my-3 p-9 flex justify-between"
                              key={order.id}
                           >
                              <h2>Order number: {order.id}</h2>
                              <h2>Amount: ${parsePrice(order.amount, true)}</h2>
                              <h2>{order.receipt_email}</h2>
                           </div>
                        ))}
                     </div>
                  </article>
                  <div className="flex justify-between my-10 px-5">
                     <h2 className="text-lg">{user.name}</h2>
                     <button
                        className="focus:outline-none focus:ring-2 enabled:hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 py-3 w-20"
                        onClick={() => route.push('/api/auth/logout')}>
                        Logout
                     </button>
                  </div>
               </div>
            }
         </Layout>
      </>
   )
}