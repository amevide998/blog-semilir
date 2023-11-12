import Link from "next/link";
import React from "react";
import {getCategories} from "@/data/CategoryData";

export default async function ByCategories({styles}: any){
    const  data = await getCategories();

    if(!data){
        return (
            <h1>Nothing to see here </h1>
        )
    }

    return (
        <>
            <h2 className={styles.subTitle}>Discover by Topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                {
                    data?.map((category: any) => (
                        <Link href={"/blog?category="+category.slug}
                              className={`${styles.categoryItem}`}
                              key={category.slug}
                              style={{backgroundColor: category.color1}}
                        >
                            {category.title}
                        </Link>
                    ))
                }

            </div>
        </>
    )
}