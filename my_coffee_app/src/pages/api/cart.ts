import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { User ,Item} from "@/lib/db";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from 'next-auth';
import { getSession } from "next-auth/react";

export default async function handler(req,res){
    
    await dbConnect();
    const session = await getServerSession(req,res,authOptions)
    console.log(session);
    
    if(!session)
    {
        
        res.status(200).json({ error: 'Unauthorized' });
        return;
    }
    else
    {
        res.json({s:"Hello"});
    }
    
}