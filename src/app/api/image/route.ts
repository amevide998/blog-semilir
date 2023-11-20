import {NextRequest, NextResponse} from "next/server";
import extractToken from "@/utils/extractToken";
import uploadImageToFirebase from "@/databases/firebaseStorage";
import Post from "@/models/schemas/postSchema";



const handler = async (req: NextRequest)=> {
    if(req.method == 'POST'){
        return await POST(req)
    }
    else{
        return NextResponse.json({message: 'method not allowed', data: null})
    }
}

const POST = async (req: NextRequest) => {
    const sessionData = extractToken(req)
    if (!sessionData) {
        return NextResponse.json({message: 'unauthorized', data: null}, {status: 401})
    }

    const formData = await req.formData()
    const img_url = formData.getAll('img_cover_url');
    const slug = formData.getAll('slug');

    if(!img_url || !slug){
        return NextResponse.json({message: 'not found', data: null}, {status: 404})
    }

    const post = await Post.findOneAndUpdate({slug: slug[0]}, {
        image : img_url[0],
    })

    if(post){
        return NextResponse.json({message: 'ok', data: null}, {status: 200})
    }


}

// Function to read the file content as a buffer using FileReader
const readFileAsBuffer = (file: File): Promise<Uint8Array> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            if (event.target?.result instanceof ArrayBuffer) {
                resolve(new Uint8Array(event.target.result));
            } else {
                reject(new Error('Error reading file content'));
            }
        };

        reader.onerror = (event) => {
            reject(new Error(`Error reading file: ${event}`));
        };

        reader.readAsArrayBuffer(file);
    });
};


export {
    handler as POST,
    handler as GET
}