import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/databases/mongodb";
import Comment from "@/models/schemas/commentSchema";
import Post from "@/models/schemas/postSchema";



const handler = async (req: NextRequest)=> {

    const slug = req.nextUrl.searchParams.get('postSlug')
    if(!slug){
        return NextResponse.redirect('/')
    }

    await connectToDatabase()
    const post = await Post.findOne({slug})
    const comments = await Comment.find({post: post?._id}).populate('user')
    return NextResponse.json({message: 'ok', data: comments})
}

export {
    handler as GET,
    handler as POST
}