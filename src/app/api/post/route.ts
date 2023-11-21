import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/databases/mongodb";
import Post from "@/models/schemas/postSchema";
import User from "@/models/schemas/userSchema";
import jwt from "jsonwebtoken";
import generateString from "@/utils/generateString";
import {ObjectId} from "bson";


const handler = async (req: NextRequest)=> {
    if(req.method == 'GET'){
        return await GET(req)
    }
    else if(req.method == 'POST'){
        return await POST(req)
    }
    else if(req.method == 'DELETE'){
        return await DELETE(req)
    }
    else if(req.method == 'PUT'){
        return await PUT(req)
    }
    else{
        return NextResponse.json({message: 'method not allowed', data: null})
    }
}

async function PUT(req: NextRequest){
    const sessionData = extractToken(req)
    if(!sessionData){
        return NextResponse.json({message: 'unauthorized', data: null}, {status: 401})
    }

    const body = await req.json()
    const postId = body.id
    if(postId){
        const post = await Post.findById(postId)
        if(post){
            post.title = body.title
            post.subtitle = body.subtitle
            post.body = body.body
            post.image = body.image
            post.published = true
            await post.save()
            return NextResponse.json({message: 'ok', data: null})
        }else{
            return NextResponse.json({message: 'not found', data: null}, {status: 404})
        }
    }
}

async function DELETE(req: NextRequest) {
    const sessionData = extractToken(req)
    if (!sessionData) {
        return NextResponse.json({message: 'unauthorized', data: null}, {status: 401})
    }

    const id = req.nextUrl.searchParams.get('id')
    if(id){
        await Post.findByIdAndDelete({_id: id})
        return NextResponse.json({message: 'ok', data: null})
    }else{
        return NextResponse.json({message: 'not found', data: null}, {status: 404})
    }
}

async function POST(req: NextRequest){
    const sessionData = extractToken(req)
    if(!sessionData){
        return NextResponse.json({message: 'unauthorized', data: null}, {status: 401})
    }

    const user = await User.findOne({email: sessionData.email})
    if(!user){
        return NextResponse.json({message: 'unauthorized', data: null}, {status: 401})
    }
    const reqBody = await req.json()

    const newPost = {
        slug: generateString(10) + new Date().getTime().toString(),
        author: user._id,
        category: reqBody.category
    }

    const post = await Post.create(newPost)

    if(post){
        await User.findByIdAndUpdate(user._id, {
            $push: {
                posts: post._id
            }
        })
    }

    return NextResponse.json({message: 'ok', data: post})
}

async function GET(req: NextRequest){
    const slug = req.nextUrl.searchParams.get('slug')
    const sessionData = extractToken(req)
    if(!sessionData){
        return NextResponse.json({message: 'unauthorized', data: null}, {status: 401})
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

    if(userDb.email !== sessionData.email){
        return NextResponse.json({message: 'unauthorized', data: null}, {status: 401})
    }

    if(!post){
        return NextResponse.redirect(process.env.HOST + '/')
    }

    return NextResponse.json({message: 'ok', data: post})
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
    handler as POST,
    handler as DELETE,
    handler as PUT
}