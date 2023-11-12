import mongoose, {Schema} from "mongoose";
import {ICategory} from "@/models/interfaces/ICategory";

const categorySchema = new Schema<ICategory>({
    slug: { type: String, required: true },
    img: String,
    title: { type: String, required: true },
    color1: String,
    color2: String
})

export default mongoose.models.Category || mongoose.model<ICategory>("Category", categorySchema);