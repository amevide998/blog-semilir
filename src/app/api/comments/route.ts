import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/databases/mongodb";
import Comment from "@/models/schemas/commentSchema";
import Post from "@/models/schemas/postSchema";
import jwt from "jsonwebtoken";
import User from "@/models/schemas/userSchema";




const handler = async (req: NextRequest)=> {

    if(req.method === "GET"){
        return await GET(req)
    }

    if(req.method === "POST"){
        return await POST(req)
    }

    return NextResponse.json({message: 'method not allowed', data: null})


}


const GET = async (req: NextRequest)=> {
    const slug = req.nextUrl.searchParams.get('postSlug')
    if(!slug){
        return NextResponse.redirect('/')
    }

    await connectToDatabase()
    const post = await Post.findOne({slug})
    const comments = await Comment.find({post: post?._id}).populate('user')
    return NextResponse.json({message: 'ok', data: comments})
}

const POST = async (req: NextRequest)=> {

    const slug = req.nextUrl.searchParams.get('postSlug')
    if(!slug){
        return NextResponse.json({message: 'not found', data: null})
    }

    const sessionData = extractToken(req)
    if(!sessionData){
        return NextResponse.json({message: 'unauthorized', data: null}, {status: 401})
    }

    const reqBody = await req.json()

    await connectToDatabase()
    const post = await Post.findOne({slug})
    if(!post){
        return NextResponse.json({message: 'not found', data: null})
    }

    const userDb = await User.findOne({email: sessionData.email})
    if(!userDb){
        return NextResponse.json({message: 'unauthorized', data: null}, {status: 401})
    }
    const newComment = {
        user: userDb._id,
        post: post._id,
        text: reqBody.description
    }

    console.log('cek user db', userDb)

    const comment = await Comment.create(newComment)
    // update user and post
    post.comments.push(comment._id)
    await post.save()
    userDb.comments.push(comment._id)
    await userDb.save()

    return NextResponse.json({message: 'ok', data: comment})
}

function extractToken (req: NextRequest){
    const token = req.headers.get('token')
    if(token === null){
        return null
    }
    return jwt.verify(token, process.env.NEXT_PUBLIC_JWT_SECRET_KEY as string) as {
        email: string,
        iat: number,
        exp: number
    }
}

export {
    handler as GET,
    handler as POST
}