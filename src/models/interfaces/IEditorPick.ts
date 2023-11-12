import mongoose, {Schema} from "mongoose";

export interface IEditorPick extends Document {
    _id: mongoose.Types.ObjectId | string;
    createdAt: Date;
    posts: mongoose.Types.ObjectId[] | string[];
}