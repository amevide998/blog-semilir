"use client"
import styles from './write.module.css';
import {useSession} from "next-auth/react";
import Unauthorize from "@/components/unauthorize/Unauthorize";
import React, {SetStateAction, useEffect, useState} from "react";
import EditPost from "@/components/edit-post/EditPost";
import Loader from "@/components/loader/Loader";
import NewPost from "@/components/new-post/newPost";

// @ts-ignore
export default function WritePost() {

    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const {status, data} = useSession();

    const getData =  () => {
        if (data?.user) {
            fetch(`/api/posts`
                , {
                    headers: {
                        //@ts-ignore
                        token: data['loggedUser']
                    }
                }
            )
                .then((res) => res.json())
                .then((result) => {
                    setPosts(result.data)
                    setLoading(false)
                })
        }

    }

    useEffect(() => {
        getData()
    }, [data, status])




    if(status === "unauthenticated"){
        return (
            <>
            <Unauthorize />
            </>
        )
    }

    if(status === "loading" || isLoading){
        return (
            <div className={styles.loaderContainer}>
            <Loader />
            </div>
        )
    }

    if (status === "authenticated" && !isLoading && posts.length === 0) {
        return (
            <div className={styles.emptyPost}>
                <NewPost title={"kamu belum punya postingan !"} refetch={getData}/>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <NewPost title={"mau bikin post baru ?"}/>
            {(status === "authenticated" && !isLoading && posts.length > 0)
                && (<EditPost posts={posts} refetch={getData}/>)
            }
        </div>
    )
}