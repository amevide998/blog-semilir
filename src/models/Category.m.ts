import mongoose from "mongoose";

export type CategoryM = {
    _id: mongoose.Types.ObjectId | string;
    slug: string;
    img: string;
    title: string;
    color1: string;
    color2: string;
}