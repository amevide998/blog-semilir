import Post from "@/models/schemas/postSchema";
import {connectToDatabase} from "@/databases/mongodb";
import EditorPick from "@/models/schemas/editorPickSchema";
import Comment from "@/models/schemas/commentSchema";


export const getPosts = async (page: number) => {
    try{
        await connectToDatabase();
        const posts =  await Post.find({published:true}).limit(4).skip((page -1) * 4).sort({createdAt: -1, views: -1, _id: -1, category: -1} )
        const count = await Post.countDocuments()
        return {
            posts,
            count
        }
    }catch (err){
        console.log("get categories error : ", err)
    }
}

export const getPost = async (slug: string) => {
    try{
        await connectToDatabase();
        const posts = await Post.findOne({slug})
            .populate({
                path: 'author',
                select: ['name', 'image']
            })
            .populate({
                path: 'category',
                select: ['slug', 'title', 'color1']
            })
            .exec()

        if(posts.comments.length !== 0){
            posts.comments = await Comment.find({
                _id: {$in: posts?.comments}
            })
        }

        return posts;
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


export const getPostsByEditorPick = async () => {
    try{
        await connectToDatabase();
        return await EditorPick.find().limit(1).sort({createdAt: -1}).populate('posts')
    }catch (err){
        console.log("get categories error : ", err)
    }
}

