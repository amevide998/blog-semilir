import Category from "@/models/schemas/categorySchema";
import {connectToDatabase} from "@/databases/mongodb";


export const getCategories = async () => {
    try{
        await connectToDatabase();
        return await Category.find()
    }catch (err){
        console.log("get categories error : ", err)
    }
}
