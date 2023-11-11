import styles from "./categories.module.css";
import CategoryComp from "@/app/components/categories/CategoryComp";

const getData = async () =>{
    const res = await fetch(
        `${process.env.HOST}/api/categories`
        , {
            cache: "no-store"
        })

    if(!res.ok){
        throw new Error("Failed")
    }

    return res.json();

}

export default async function Categories() {

    const data = await getData();

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Popular Category </h1>
            <div className={styles.categories}>
                <CategoryComp data={data}  />
            </div>
        </div>
    );
}