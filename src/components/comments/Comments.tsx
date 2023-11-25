"use client"
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import {useSession} from "next-auth/react";
import {useEffect, useState} from "react";


// @ts-ignore
export default function Comments ({postSlug}) {

    const {status, data} = useSession()

    const [post, setPost] = useState([])
    const [isLoading, setLoading] = useState(true)


    const [description, setDescription] = useState("");
    const [isButtonDisabled, setIsButtonDisabled] = useState(false)


    const fetchComments = () => {
        fetch(`/api/comments?postSlug=${postSlug}`)
            .then((res) => res.json())
            .then((result) => {
                setPost(result.data)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchComments()
    }, [postSlug])


    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>


    const handleSubmit = async () => {

        if(description.trim() == ""){
            return alert("comment cannot be empty")
        }
        else{
            try{
                setIsButtonDisabled(true)
                const res = await fetch(`/api/comments?postSlug=${postSlug}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        // @ts-ignore
                        "token": data['loggedUser']
                    },
                    body: JSON.stringify({
                        description
                    })
                })

                if(res.ok){
                    fetchComments()
                }

                setDescription("")
                setIsButtonDisabled(false)
            }catch (error) {
                console.log(error)
            }
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
                                value={description}
                                onChange={e=> setDescription(e.target.value)}
                            />
                            <button className={styles.button}
                                    onClick={handleSubmit}
                                    disabled={isButtonDisabled}
                            >Send</button>
                        </div>
                    )
                    :
                    (
                        <div className={styles.write}>
                            <Link href={"/api/auth/signin"} className={styles.login}>Log in to comment</Link>
                        </div>
                    )
            }
            <div className={styles.comments}>
                {
                    isLoading? "loading..." : post?.map((item: any) => (
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
                        post?.length === 0 && (
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