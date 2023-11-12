import mongoose from "mongoose";

export interface IUser extends Document {
    _id: mongoose.Types.ObjectId | string;
    name: string;
    email: string;
    image?: string;
    hash: string;
    emailVerified: boolean;
    posts: mongoose.Types.ObjectId[] | string[];
    comments: mongoose.Types.ObjectId[] | string[];
    createdAt?: Date;
    updatedAt?: Date;
}

