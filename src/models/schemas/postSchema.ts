import mongoose, {Schema} from "mongoose";
import {IPost} from "@/models/interfaces/IPost";

const PostSchema = new Schema<IPost>(
    {
            slug: { type: String, required: true, unique: true },
            title: { type: String, required: true, default:'untitled'},
            subtitle: { type: String, default: 'subtitle' },
            body: { type: String, required: true, default: '<p>i want to write about...</p>' },
            image: { type: String },
            views: { type: Number, default: 0, required: true },
            category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
            author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
            comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
            createdAt: { type: Date, default: Date.now },
            updatedAt: { type: Date, default: null },
            published: {type: Boolean, default: false}
    },
    { timestamps: true }
);

export default mongoose.models.Post || mongoose.model<IPost>("Post", PostSchema);
