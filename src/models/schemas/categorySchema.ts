import mongoose, {Schema} from "mongoose";
import {ICategory} from "@/models/interfaces/ICategory";

const categorySchema = new Schema<ICategory>({
    slug: String,
    img: String,
    title: String,
    color1: String,
    color2: String
})

export default mongoose.models.Category || mongoose.model<ICategory>("Category", categorySchema);