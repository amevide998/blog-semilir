import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/databases/mongodb";
import Comment from "@/models/schemas/commentSchema";
import Post from "@/models/schemas/postSchema";
import User from "@/models/schemas/userSchema";
import jwt from "jsonwebtoken";



const handler = async (req: NextRequest)=> {
    const token = req.headers.get('token')

    if(token === null){
        return NextResponse.redirect(process.env.HOST + '/')
    }

    const payload = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string) as {
        email: string,
        iat: number,
        exp: number
    }

    await connectToDatabase()
    const user = await User.findOne({email: payload.email})

    // get posts
    const postsId = user?.posts
    const posts = await Post.find({_id: {$in: postsId}})
    return NextResponse.json({message: 'ok', data: posts})
}

export {
    handler as GET,
    handler as POST
}