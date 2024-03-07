import { Category } from "@/lib/db";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req,res){
    await dbConnect();
    const categories = await Category.find({}).populate('items');
    return res.json({categories});
}