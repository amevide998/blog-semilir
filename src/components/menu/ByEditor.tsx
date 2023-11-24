import Link from "next/link";
import Image from "next/image";
import React from "react";
import {getAuthor} from "@/data/UserData";
import {getCategory} from "@/data/CategoryData";

export default async function ByEditor({styles, post}: any){

    const author = await getAuthor(post.author);
    const category = await getCategory(post.category)

    return (
        <Link href={"/"} className={styles.item} >
            <div className={styles.textContainer}>
                <span className={`${styles.category}`}
                              style={{backgroundColor: category.color1}}

                        >
                            {category.title}
                        </span>
                <h3 className={styles.postTitle}>
                    {post.title}
                </h3>
                <div className={styles.detail}>
                    <span className={styles.username}>
                        <Image src={author.image} alt={""} className={styles.image} width={20} height={20} />
                        {author.name}
                    </span>
                    {" "}
                    <span className={styles.date}>
                        {post.createdAt.toLocaleString('default', {dateStyle: 'long'})}
                    </span>
                </div>
            </div>
        </Link>
    )
}