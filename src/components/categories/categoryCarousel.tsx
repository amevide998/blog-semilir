import Carousel from "@/components/carousel/Carousel";
import styles from "@/components/categories/categories.module.css";
import {Category} from "@/data/category";

export default function CategoryCarousel() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Categories</h1>
            <Carousel data={Category} size={"200px"}/>
        </div>
    );
}