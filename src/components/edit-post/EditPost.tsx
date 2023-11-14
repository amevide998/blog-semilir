"use client"
import styles from "./editPost.module.css";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function EditPost({posts}: any) {
    console.log('cek post', posts)
    return (
        <div className={styles.container}>
            <div className={styles.posts}>
                {
                    posts && posts.map((item: any) => (
                        <>
                        <div key= {item._id}  className={styles.postContainer}>
                             {/*eslint-disable-next-line @next/next/no-img-element*/}
                            <img src={item.image} alt={""} />
                            <div className={styles.post}>
                                <p className={styles.title}>
                                    {item.title}
                                </p>
                                <p className={styles.subtitle}>
                                    {item.subtitle}
                                </p>
                                <div className={styles.info}>
                                    <div className={styles.views}>
                                        <p>
                                            {item.views} views
                                        </p>
                                        {/*<Image src={"/view-svgrepo-com.png"}  alt={"eye"} width={12} height={12}/>*/}
                                    </div>
                                    <p className={styles.date}>
                                        {item.createdAt.substring(0,10)}
                                    </p>
                                </div>
                            </div>
                            <div className={styles.edit}>
                                <Link href={`/write/${item.slug}`} className={styles.button}>
                                    Edit
                                </Link>
                            </div>
                        </div>
                    <hr />
                        </>
                    ))
                }
            </div>
        </div>
    )
}