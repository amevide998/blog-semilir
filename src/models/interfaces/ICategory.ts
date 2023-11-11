import {Document} from "mongoose";

export interface ICategory extends Document{
    slug: string;
    img: string;
    title: string;
    color1: string;
    color2: string
}