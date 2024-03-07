import {CoffeeCard} from "./components/coffee_card"
import {getServerSession} from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import axios from "axios";
export default function Dashboard({session,items}){
    return <div className="py-10 px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-14">
            {
                items.map((item) =>{
                    return <CoffeeCard item={item} ></CoffeeCard>
                })
            }

        </div>
    </div>
}

export async function getServerSideProps(context) {
    const session = await getServerSession(context.req, context.res, authOptions)
    if (!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        }
    }
    const  res = await axios.get('http://localhost:3000/api/getitems');
    return {
        props: {
            session:{
                user:{
                    email:session.user.email
                }
            },
            items:res.data.items
        },
    }
}