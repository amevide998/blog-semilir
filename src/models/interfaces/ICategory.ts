import mongoose, {Document} from "mongoose";

export interface ICategory extends Document{
    _id: mongoose.Types.ObjectId | string;
    slug: string;
    img: string;
    title: string;
    color1: string;
    color2: string
}