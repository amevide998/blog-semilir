import Link from "next/link";
import React from "react";
import {getCategories} from "@/data/CategoryData";
import Loader from "@/components/loader/Loader";

export default async function ByCategories({styles}: any){
    const  data = await getCategories();

    if(!data){
        return (
            <div className={styles.ByCategriesContainer}>
                <Loader />
            </div>
        )
    }

    return (
        <div className={styles.ByCategriesContainer}>
            <h2 className={styles.subTitle}>Discover by Topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                {
                    data?.map((category: any) => (
                        <Link href={"/blog?category="+category.slug}
                              className={`${styles.categoryItem}`}
                              key={category.slug}
                        >
                            {category.title}
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}