"use client"
import styles from "./editPost.module.css";
import Image from "next/image";
import React, {useEffect} from "react";
import Link from "next/link";
import {useSession} from "next-auth/react";

export default function EditPost({posts, refetch}: any) {

    const {status, data} = useSession();

    async function deleteHandler(id: any){
        if(data?.user){
            const confirm = window.confirm("Are you sure you want to delete this post?");
            if(confirm){
                const res = await fetch(`/api/post?id=${id}`, {
                        method: "DELETE",
                        headers: {
                            //@ts-ignore
                            token: data['loggedUser']
                        }
                 })
                if(res.ok) {
                    refetch()
                }
            }
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.posts}>
                {posts && posts.map((item: any) => (
                    <div key= {item._id} className={styles.postContainer}>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        {
                            item.image && (<img src={item.image} alt={""} />)
                        }
                        <div className={styles.post}>
                            <div className={styles.tags}>
                                <div className={styles.views}>
                                    <p>
                                        {item.views} views
                                    </p>
                                </div>
                                <p className={styles.category} style={{color: item.category.color1}}>
                                    {item.category.title}
                                </p>
                            </div>

                            <p className={styles.title}>
                                {item.title}
                            </p>
                            <p className={styles.subtitle}>
                                {item.subtitle}
                            </p>
                            <div className={styles.info}>
                                <p className={styles.date}>
                                    {item.createdAt.substring(0,10)}
                                </p>
                            </div>
                            <div className={styles.postControls}>
                                <div className={styles.postControlButton}>
                                    <div className={styles.edit}>
                                        <Link href={`/write/${item.slug}`}
                                              className={styles.button}>
                                            Edit
                                        </Link>
                                    </div>
                                    <div className={styles.delete}>
                                        <button onClick={()=> deleteHandler(item._id)}
                                                className={styles.deleteButton}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                                <div className={styles.info}>
                                    {item.published ?
                                        (<p className={styles.published}>Published</p>)
                                        :
                                        (<p className={styles.draft}>Draft</p>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}