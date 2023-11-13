import Category from "@/models/schemas/categorySchema";
import {connectToDatabase} from "@/databases/mongodb";
import mongoose from "mongoose";
import Post from "@/models/schemas/postSchema";


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


export const getPostByCategories = async (page: number, categories: string) => {
    try{
        await connectToDatabase();
        const cat = await Category.findOne({slug: categories})

        if(!cat){
            const posts =  await Post.find().limit(4).skip(page -1).sort({createdAt: -1})
            const count = await Post.countDocuments()

            return {
                posts,
                count
            }
        }

        const posts =  await Post.find({category:cat._id}).limit(4).skip(page -1).sort({createdAt: -1})
        const count = await Post.countDocuments({category:cat._id})
        return {
            posts,
            count,
            cat
        }
    }catch (err){
        console.log("get categories error : ", err)
    }
}