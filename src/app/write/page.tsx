"use client"
import styles from './write.module.css';
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Unauthorize from "@/components/unauthorize/Unauthorize";
import {useEffect, useState} from "react";
import EditPost from "@/components/edit-post/EditPost";

// @ts-ignore
export default function WritePost() {

    const [posts, setPosts] = useState([])
    const [isLoading, setLoading] = useState(true)
    const {status, data} = useSession();
    const router = useRouter();

    useEffect(() => {
        if(data?.user){
            console.log('cek user data', data?.user)
            fetch(`/api/posts?email=${data?.user?.email}`)
                .then((res) => res.json())
                .then((result) => {
                    setPosts(result.data)
                    setLoading(false)
                })
        }
    }, [data, status])

    if(status !== "authenticated"){
        return (
            <>
            <Unauthorize />
            </>
        )
    }

    return (
        <div className={styles.container}>
            {
                !isLoading ? <EditPost posts={posts}/>
                    :
                    <div>Loading...</div>
            }
        </div>
    )
}