import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/databases/mongodb";
import Comment from "@/models/schemas/commentSchema";
import Post from "@/models/schemas/postSchema";
import User from "@/models/schemas/userSchema";



const handler = async (req: NextRequest)=> {

    const email = req.nextUrl.searchParams.get('email')
    if(!email){
        return NextResponse.redirect('/')
    }

    await connectToDatabase()
    const user = await User.findOne({email: email})

    // get posts
    const postsId = user?.posts
    const posts = await Post.find({_id: {$in: postsId}})
    return NextResponse.json({message: 'ok', data: posts})
}

export {
    handler as GET,
    handler as POST
}