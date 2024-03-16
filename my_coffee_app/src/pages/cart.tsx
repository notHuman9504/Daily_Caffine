import {CoffeeCard} from "./components/coffee_card"
import {getServerSession} from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import axios from "axios";
export default function Cart({session}){
    return <div>
        Hello
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

    const res= await axios.get('http://localhost:3000/api/cart');

    return {
        props: {
            session:{
                user:{
                    email:session.user.email
                }
            },
        },
    }
}