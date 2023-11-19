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
                {
                    posts && posts.map((item: any) => (
                        <div key= {item._id}>
                        <div  className={styles.postContainer}>
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
                                <Link href={`/write/${item.slug}`}
                                      className={styles.button}>
                                    Edit
                                </Link>
                            </div>
                            <div className={styles.delete}>
                                <button onClick={()=> deleteHandler(item._id)}
                                      className={styles.button}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    <hr />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}