import  dbConnect  from "@/lib/dbConnect";
import { User } from "@/lib/db";
export default async function handler(req,res){
    if(req.method==='POST')
    {
        dbConnect();
        const{name,email,password}=req.body;
        let exist=await User.findOne({email});
        if(exist) res.status(403).json({ message: 'user already exist' });
        else
        {
            const newUser =await new User({ name,email,password });
            await newUser.save();
            res.send(newUser);
        }
    }
    else 
    {
        res.status(500).json({msg:"HTTP server not Valid"});
    }
}