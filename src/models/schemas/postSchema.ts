import mongoose, {Schema} from "mongoose";
import {IPost} from "@/models/interfaces/IPost";

const PostSchema = new Schema<IPost>(
    {
        slug: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        subtitle: { type: String },
        body: { type: String, required: true },
        image: { type: String },
        views: { type: Number, default: 0, required: true },
        category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
        author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: null },
    },
    { timestamps: true }
);

export default mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
