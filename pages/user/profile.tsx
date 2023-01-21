import { useRouter } from "next/router"
import { Layout } from "../../components/Layout/Layout"
import User from "../../components/User/User"

export default function profile() {
   return (
      <>
         <Layout>
            <User/>
         </Layout>
      </>
   )
}