import {CoffeeCard} from "./components/coffee_card"
import {signIn, useSession, signOut} from "next-auth/react"
import {getServerSession} from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'
export default function Dashboard({session}){
    return <div className="py-10 px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
            <div className="col-span-1">
                <CoffeeCard></CoffeeCard>
            </div>
        
        
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

    return {
        props: {
            session,
        },
    }
}