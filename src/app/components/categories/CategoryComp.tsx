// Import statements
"use client"
import Link from "next/link";
import styles from "@/app/components/categories/categories.module.css";
import React, { useContext } from "react";
import { ThemeContext } from "@/app/components/context/ThemeContext";
import { Category } from "@/models/Category";

// Functional component for rendering categories
const CategoryComp: React.FC<{ data: Category[] }> = ({ data }) => {
    const themeState = useContext(ThemeContext);

    return (
        <>
            {data?.map((category: Category) => (
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
