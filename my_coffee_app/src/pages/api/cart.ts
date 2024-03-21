import { getServerSession } from "next-auth/next"
import { authOptions } from "./auth/[...nextauth]"
import dbConnect from "@/lib/dbConnect";
import { User } from "@/lib/db";


export default async function handler(req,res){
    
    const session = await getServerSession(req, res, authOptions)
    await dbConnect(); 
    if(!session)
    {
        res.status(403).json({message:"UnAuthorized"});
    }
    else{
        const user=await User.findOne({email:session.user.email}).populate('cart.item');
        if(!user)
        {
            res.status(403).json({message:"User Doesnt Exist"});
        }
        else{
            res.json({cart:user.cart});
        }
    }
}