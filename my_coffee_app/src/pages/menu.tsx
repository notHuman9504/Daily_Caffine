import {CoffeeCard} from "./components/coffee_card"
import {getServerSession} from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import axios from "axios";
export default function Menu({session,categories}){
    return <div className="py-10 px-20">
        <div>
            {
                categories.map((category) =>{
                    return (
                        <div >
                            <h2 className="text-black text-3xl p-2">{category.type}</h2>
                            <div className="grid grid-flow-col auto-cols-max gap-14 overflow-x-auto  pb-4 overscroll-x-contain">
                            {
                                category.items.map((item)=>{
                                    return (<CoffeeCard item={item} ></CoffeeCard>)
                                })
                            }
                            </div>
                        </div>
                    )
                })
            }
            <div className="col-span-1">
                
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
    const  res = await axios.get('http://localhost:3000/api/getmenu');
    return {
        props: {
            session:{
                user:{
                    email:session.user.email
                }
            },
            categories:res.data.categories
        },
    }
}