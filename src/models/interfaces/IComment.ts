import mongoose, { Schema, Document } from "mongoose";

export interface IComment extends Document {
    _id: mongoose.Types.ObjectId | string;
    text: string;
    user: mongoose.Types.ObjectId | string;
    post: mongoose.Types.ObjectId | string;
}