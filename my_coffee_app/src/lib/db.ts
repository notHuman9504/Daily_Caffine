import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String,
    category:String,
    price:Number
})

export const Item = mongoose.models.Item || mongoose.model('Item',itemSchema);

const categorySchema = new mongoose.Schema({
    type:String,
    items:[{type:mongoose.Schema.Types.ObjectId,ref:'Item'}]
});

export const Category = mongoose.models.Category || mongoose.model('Category',categorySchema);


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cart:[{item:{type:mongoose.Schema.Types.ObjectId,ref:'Item'},count:Number}]
});



export const User = mongoose.models.User || mongoose.model('User', userSchema);