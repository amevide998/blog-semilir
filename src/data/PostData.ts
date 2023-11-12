import Post from "@/models/schemas/postSchema";
import {connectToDatabase} from "@/databases/mongodb";


export const getPosts = async (page: number) => {
    try{
        await connectToDatabase();
        const posts =  await Post.find().limit(4).skip(page -1).sort({createdAt: -1})
        const count = await Post.countDocuments()
        return {
            posts,
            count
        }
    }catch (err){
        console.log("get categories error : ", err)
    }
}
