"use client"
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import {useSession} from "next-auth/react";
// import useSWR from "swr";
import {useEffect, useState} from "react";


// @ts-ignore
export default function Comments ({postSlug}) {

    const {status} = useSession()

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true)


    const [description, setDescription] = useState("");

    useEffect(() => {
        fetch(`/api/comments?postSlug=${postSlug}`)
            .then((res) => res.json())
            .then((result) => {
                setData(result.data)
                setLoading(false)
            })
    }, [postSlug])


    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>


    const handleSubmit = async () => {

        if(description.trim() == ""){
            return alert("comment cannot be empty")
        }

    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Comments</h1>
            {
                (status === "authenticated") ?
                    (
                        <div className={styles.write}>
                            <textarea
                                placeholder={"write a comment for this article"}
                                className={styles.input}
                                onChange={e=> setDescription(e.target.value)}
                            />
                            <button className={styles.button}
                                    onClick={handleSubmit}
                            >Send</button>
                        </div>
                    )
                    :
                    (
                        <div className={styles.write}>
                            <Link href={"/login"} className={styles.login}>Log in to comment</Link>
                        </div>
                    )
            }
            <div className={styles.comments}>
                {
                    isLoading? "loading..." : data?.map((item: any) => (
                        <div className={styles.comment} key={item._id}>
                            <div className={styles.user}>
                                <Image src={item.user.image} alt={"profile"} width={50} height={50}/>
                                <div className={styles.userInfo}>
                                    <span className={styles.username}>{item?.user?.name}</span>
                                    <span className={styles.date}>
                                        {item?.createdAt.substring(0,10)}
                                    </span>
                                </div>
                            </div>
                            <p className={styles.description}>
                                {item?.text}
                            </p>
                        </div>
                    ))
                }
                {
                    !isLoading && (
                        data?.length === 0 && (
                            <div className={styles.comment}>
                                <p className={styles.description}>
                                    No comments yet
                                </p>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    )
}