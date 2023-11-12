import Link from "next/link";
import styles from "@/components/categories/categories.module.css";
import React, { useContext } from "react";
import { CategoryM } from "@/models/Category.m";
import {getCategories} from "@/data/CategoryData";

const CategoryComp =  async () => {
    const  data = await getCategories();
    return (
        <>
            {data?.map((category: CategoryM) => (
                <div key={category.slug}>
                    <Link
                        href={`blog?category=${category.slug}`}
                        className={`${styles.category}`}
                        >
                        {category.img && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                                src={category.img}
                                alt={`${category.slug}`}
                                className={styles.image}
                            />
                        )}
                        <p className={styles.categoryTitle}
                           style={{backgroundColor: category.color1}}
                        >{category.title}</p>
                    </Link>
                </div>
            ))}
        </>
    );
}

export default CategoryComp;
