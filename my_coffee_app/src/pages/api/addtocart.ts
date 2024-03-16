import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { User ,Item} from "@/lib/db";
import dbConnect from "@/lib/dbConnect";
import { getServerSession } from 'next-auth';

export default async function handler(req,res){
    if (req.method === 'POST'){
        await dbConnect();
        const session = await getServerSession(req,res,authOptions);
        if(!session)
        {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        else
        {
            const item = Item.findById({_id:req.body.itemId});
            if(!item)
            {
                res.json({ error: 'Item not Found' });
                return;
            }
            const user=await User.findOne({email:session.user.email});
            if(user)
            {
                for(let i=0;i<user.cart.length;i++)
                {
                    if(user.cart[i].item == req.body.itemId)
                    {
                        user.cart[i].count++;
                        await user.save();
                        res.json({msg:"Item saved successfully"});
                        return;
                    }
                }
                user.cart.push({ item:req.body.itemId , count : 1});
                await user.save();
                res.json({msg:"Item saved successfully"});
                return;
            }
            else{
                res.json({ error : 'User not found' });
                return ;
            }
        }
    }
    else
    {
        res.json({ error: 'Not Proper Req' });
        return;
    }
}