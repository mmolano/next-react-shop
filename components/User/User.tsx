import { useRouter } from "next/router";
import { getServerSideProps } from "../../lib/stripe";

export const User = ({ user, orders: object }) => {
   const route = useRouter();
   return (
      <>
         {
            user &&
            <div>
               <h2>{user.name}</h2>
               <p>{user.email}</p>
               <div>
                  {orders.map((order) => (
                     <div key={order.id}>
                        <h3>{order.name}</h3>
                        <p>{order.amount}</p>
                        <div>
                           <h4>{order.receipt_email}</h4>
                        </div>
                     </div>
                  ))}
               </div>
               <button onClick={() => route.push('/api/auth/logout')}>Logout</button>
            </div>
         }
      </>
   )
}