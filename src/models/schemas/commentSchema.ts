import mongoose, {Schema} from "mongoose";
import {IComment} from "@/models/interfaces/IComment";

const commentSchema = new Schema<IComment>(
    {
        text: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
    },
    { timestamps: true }
);

export default mongoose.models.Comment || mongoose.model<IComment>("Comment", commentSchema);
