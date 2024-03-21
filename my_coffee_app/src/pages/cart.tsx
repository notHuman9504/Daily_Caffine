import { headers } from "next/headers"
import {getServerSession} from "next-auth";
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
export default function Cart({session}){
    const [cart,setcart]=useState([]);
    useEffect(()=>{
        async function getCart(){
            const res=await axios.get('http://localhost:3000/api/cart');
            if(res.data)
            {
                setcart(res.data.cart);
            }
        }
        getCart();
    },[])
    return <div>
        <div className="pt-8 pl-6 text-2xl">
            <h1>Your Orders:</h1>
        </div>
        <div className="p-4">
        {
            cart.map(item =>{
                return (<div className="grid grid-cols-8 p-1  gap-2">
                    <div className="p-2 shadow-md rounded-md col-span-4 text-center border border-slate-400">{item.item.name}</div>
                    <div className="p-2 shadow-md rounded-md col-span-1 border text-center border-slate-400 ">{item.item.price}</div>
                    <div className="col-span-2">
                        <div className="grid grid-cols-4 gap-2">
                        <Button  variant="contained" style={{
                            color:"black",
                            backgroundColor:"#FFD54F"
                            }}>-</Button>
                        <div className="p-2 shadow-md rounded-md col-span-2 border text-center border-slate-400 ">{item.count}</div>
                        <Button  variant="contained" style={{
                            color:"black",
                            backgroundColor:"#FFD54F"
                            }}>+</Button>
                        {/* <div className="p-2 shadow-md rounded-md col-span-1 border text-center border-slate-400 ">+</div> */}
                        </div>
                    </div>
                    <div className="p-2 shadow-md rounded-md col-span-1 border text-center border-slate-400 ">{item.count*item.item.price}</div>
                </div>)
            })
        }
        </div>
    </div>
}
