import styles from "./categories.module.css";
import CategoryComp from "@/components/categories/CategoryComp";


export default async function Categories() {

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Category </h1>
            <div className={styles.categories}>
                <CategoryComp />
            </div>
        </div>
    );
}