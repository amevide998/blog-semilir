import mongoose, {Schema} from "mongoose";

export interface IPost extends Document {
    _id: mongoose.Types.ObjectId | string;
    slug: string;
    title: string;
    subtitle?: string;
    content: string;
    image?: string;
    views: number;
    category: Schema.Types.ObjectId | string;
    author: Schema.Types.ObjectId | string;
    comments: Schema.Types.ObjectId[] | string[];
    createdAt?: Date;
    updatedAt?: Date;
    published: boolean;
}