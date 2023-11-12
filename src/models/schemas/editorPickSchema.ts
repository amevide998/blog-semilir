import mongoose, {Schema} from "mongoose";
import {IEditorPick} from "@/models/interfaces/IEditorPick";

const editorPickSchema = new Schema<IEditorPick>({
    createdAt: {type: Date, default: Date.now},
    posts: [{type: Schema.Types.ObjectId, ref: 'Post'}],
})

export default mongoose.models.EditorPick || mongoose.model<IEditorPick>("EditorPick", editorPickSchema);