import React from "react";
import styles from "./blogPage.module.css";

import Cards from "@/components/cards/Cards";
import Menu from "@/components/menu/Menu";
import {getPostByCategories} from "@/data/CategoryData";
import Loader from "@/components/loader/Loader";
import {Card} from "@/components/card/Card";
import Pagination from "@/components/pagination/Pagination";

// @ts-ignore
export default async function BlogPage ({searchParams}){
    const page = parseInt(searchParams.page) || 1;
    const category = searchParams.category || "";

    const data = await getPostByCategories(page, category);

    if(!data){
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>
                    {category}
                </h1>
                <div className={styles.content}>
                    <Loader />
                    <Menu />
                </div>
            </div>

        )
    }
    const posts = data.posts;

    const hasPrev = page > 1
    const hasNext = data.count > page * 4

    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <h1 className={styles.title}
                    style={{backgroundColor: data.cat? data.cat.color1 : 'var(--softTextColor)'}}
                >
                    {data.cat? data.cat.title : 'Recent Post'}
                </h1>
                <div className={styles.posts}>
                    {
                        posts?.map((item) => (
                            <Card key={item._id} item={item}/>
                        ))
                    }
                </div>
                <Pagination
                    page={page}
                    hasPrev={hasPrev}
                    hasNext={hasNext}
                    count={data.count}
                    cat={category}
                />
            </div>
            <Menu />
        </div>
    )
}