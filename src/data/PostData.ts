import Post from "@/models/schemas/postSchema";
import {connectToDatabase} from "@/databases/mongodb";


export const getPosts = async () => {
    try{
        await connectToDatabase();
        return await Post.find()
    }catch (err){
        console.log("get categories error : ", err)
    }
}
