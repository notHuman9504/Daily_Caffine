import { Item } from "@/lib/db";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req,res){
    await dbConnect();
    const items = await Item.find({});
    return res.json({items});
}