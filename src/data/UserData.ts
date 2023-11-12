import {connectToDatabase} from "@/databases/mongodb";
import User from "@/models/schemas/userSchema";
import mongoose from "mongoose";

export const getAuthor = async (id: mongoose.Types.ObjectId) => {
    try{
        await connectToDatabase();
        return await User.findById(id)

    }catch (err){
        console.log("get categories error : ", err)
    }
}