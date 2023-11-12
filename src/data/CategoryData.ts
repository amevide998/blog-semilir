import Category from "@/models/schemas/categorySchema";
import {connectToDatabase} from "@/databases/mongodb";
import mongoose from "mongoose";


export const getCategories = async () => {
    try{
        await connectToDatabase();
        return await Category.find()
    }catch (err){
        console.log("get categories error : ", err)
    }
}

export const getCategory = async (id: mongoose.Types.ObjectId) => {
    try{
        await connectToDatabase();
        return await Category.findById(id)
    }catch (err){
        console.log("get categories error : ", err)
    }
}
