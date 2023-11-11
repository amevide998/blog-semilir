import Link from "next/link";
import styles from "@/components/categories/categories.module.css";
import React, { useContext } from "react";
import { ThemeContext } from "@/components/context/ThemeContext";
import { Category } from "@/models/Category";
import { getCategories} from "@/app/api/categories/route";

// Functional component for rendering categories

// const getData = async () =>{
//     const res = await fetch(
//         `http://localhost:3000/api/categories`
//         , {
//             cache: "no-store"
//         })
//
//     if(!res.ok){
//         throw new Error("Failed")
//     }
//
//     return res.json();
// }

const CategoryComp =  async () => {
    const  data = await getCategories();

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
