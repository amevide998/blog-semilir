import Link from "next/link";
import React from "react";

export default function ByCategories({styles}: any){
    return (
        <>
            <h2 className={styles.subTitle}>Discover by Topic</h2>
            <h1 className={styles.title}>Categories</h1>
            <div className={styles.categoryList}>
                <Link href={"/blog?category=style"} className={`${styles.categoryItem} ${styles.style}`}>
                    Style
                </Link>
                <Link href={"/blog?category=culture"} className={`${styles.categoryItem} ${styles.culture}`}>
                    Culture
                </Link>
                <Link href={"/blog?category=food"} className={`${styles.categoryItem} ${styles.food}`}>
                    Food
                </Link>
                <Link href={"/blog?category=coding"} className={`${styles.categoryItem} ${styles.coding}`}>
                    Coding
                </Link>
                <Link href={"/blog?category=fashion"} className={`${styles.categoryItem} ${styles.fashion}`}>
                    Fashion
                </Link>
                <Link href={"/blog?category=travel"} className={`${styles.categoryItem} ${styles.travel}`}>
                    Travel
                </Link>
            </div>
        </>
    )
}