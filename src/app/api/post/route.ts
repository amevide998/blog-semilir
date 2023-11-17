import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/databases/mongodb";
import Post from "@/models/schemas/postSchema";
import User from "@/models/schemas/userSchema";
import jwt from "jsonwebtoken";


const handler = async (req: NextRequest)=> {

    const slug = req.nextUrl.searchParams.get('slug')
    const token = req.headers.get('token')

    if(token === null){
        return NextResponse.redirect(process.env.HOST + '/')
    }
    const user = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string) as {
        email: string,
        iat: number,
        exp: number
    }

    if(!slug){
        return NextResponse.redirect(process.env.HOST + '/')
    }
    await connectToDatabase()
    const post = await Post.findOne({slug: slug})

    if(!post){
        return NextResponse.json({message: 'post not found', data: null})
    }

    const userDb = await User.findById(post.author)

    if(userDb.email !== user.email){
        return NextResponse.json({message: 'unauthorized', data: null}, {status: 401})
    }

    if(!post){
        return NextResponse.redirect(process.env.HOST + '/')
    }

    return NextResponse.json({message: 'ok', data: post})
}

export {
    handler as GET,
    handler as POST
}