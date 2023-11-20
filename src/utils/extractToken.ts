import {NextRequest} from "next/server";
import jwt from "jsonwebtoken";

export default function extractToken (req: NextRequest){
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