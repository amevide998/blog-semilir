import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/databases/mongodb";
import Post from "@/models/schemas/postSchema";
import User from "@/models/schemas/userSchema";



const handler = async (req: NextRequest)=> {

    const slug = req.nextUrl.searchParams.get('slug')

    if(!slug){
        return NextResponse.redirect('/')
    }
    await connectToDatabase()
    const post = await Post.findOne({slug: slug}).populate({
        path: 'author',
        select: ['email',]
    })

    if(!post){
        return NextResponse.redirect('/')
    }

    return NextResponse.json({message: 'ok', data: post})
}

export {
    handler as GET,
    handler as POST
}