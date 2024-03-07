import { Item , Category } from "@/lib/db";
import dbConnect from "@/lib/dbConnect";

export default async function handler(req,res){
    await dbConnect();
    const newItem = req.body;
    const item = new Item(newItem);
    await item.save();
    const type = item.category;
    const exist= await Category.findOne({type})
    if(exist)
    {
        exist.items.push(item);
        await exist.save();
    }
    else
    {
        const newCategory = new Category({
            type,
            items:[]
        })
        newCategory.items.push(item);
        newCategory.save();
    }
    res.json(item);
}