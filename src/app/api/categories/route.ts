import {NextResponse} from "next/server";
import Category from "../../../models/schemas/categorySchema";
import {connectToDatabase} from "../../../databases/mongodb";
import mongoose from "mongoose";


export const GET = async () => {

    try{
        await connectToDatabase();
        const categories = await Category.find();
        return new NextResponse(
            JSON.stringify(categories),
                { status: 200, headers: { 'Content-Type': 'application/json' } }
        )


    }catch (err){
        console.log("api/categories/get : ", err)
        return new NextResponse(
            JSON.stringify({
                message : "Internal Server Error"
            }),
            { status: 500, headers: { 'Content-Type': 'application/json' }}
        )
    }
}