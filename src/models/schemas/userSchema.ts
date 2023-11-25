import mongoose, {Schema} from "mongoose";
import {IUser} from "@/models/interfaces/IUser";

const userSchema = new mongoose.Schema<IUser>(
    {
            name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
            image: { type: String },
            hash: { type: String },
            emailVerified: { type: Boolean, default: false },
            posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
            comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: null },
    },
    { timestamps: true }
);


export default mongoose.models.User || mongoose.model<IUser>("User", userSchema);