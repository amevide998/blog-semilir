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


export const getPostsByMostViews = async () => {
    try{
        await connectToDatabase();
        return await Post.find().limit(5).sort({views: -1}).populate('category').populate('author')
    }catch (err){
        console.log("get categories error : ", err)
    }
}


