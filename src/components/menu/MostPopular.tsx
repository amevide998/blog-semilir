import Link from "next/link";
import React from "react";
import {getPostsByMostViews} from "@/data/PostData";
import Image from "next/image";

export default async function MostPopular({styles}: any){
    const posts = await getPostsByMostViews();

    if(!posts){
        return (
            <h1>Nothing to see here </h1>
        )
    }

    return (
        <div className={styles.mostPopular}>
            <h2 className={styles.subTitle}>{`What's Hot`}</h2>
            <h1 className={styles.title}>Most Popular</h1>
            <div className={styles.items}>
                {
                    posts?.map((item) => (
                        <Link href={"/"} className={styles.item} key={item._id}>
                            <div className={styles.textContainer}>
                                <div className={styles.detail}>
                                    <span className={styles.username}>
                                        {item.author.name}
                                    </span>
                                    {" - "}
                                    <span className={styles.date}>
                                     {item.createdAt.toLocaleString('default', {dateStyle: 'long'})}
                                    </span>
                                </div>
                                <h3 className={styles.postTitle}>
                                    {item?.title}
                                </h3>
                                <span className={`${styles.category}`} style={{backgroundColor: item.category.color1}}>
                                    {item.category.title}
                                </span>
                            </div>
                            <div className={styles.views}>
                                <Image src={"/view-svgrepo-com.png"}  alt={"eye"} width={32} height={32}/>
                                <span className={styles.viewsCount}>{item.views}</span>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}