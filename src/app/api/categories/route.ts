import {NextRequest, NextResponse} from "next/server";
import {connectToDatabase} from "@/databases/mongodb";
import Category from "@/models/schemas/categorySchema";



const handler = async (req: NextRequest)=> {
    await connectToDatabase()
    const category = await Category.find()
    return NextResponse.json({message: 'ok', data: category})
}

export {
    handler as GET
}