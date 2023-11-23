"use client"
import styles from "./newPost.module.css";
import React, {SetStateAction, useEffect, useState} from "react";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function NewPost({title, refetch}: any){
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const [disableButton, setDisableButton] = useState(false)
    const [dataCategory, setDataCategory] = useState([])
    const {status, data} = useSession();
    const router = useRouter();




    const handleOptionChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setIsModalOpen(false)
        try{
            newPostHandler(selectedOption).then(r => {
                setDisableButton(true)
            })
        }catch (error) {
            console.log(error)
            setDisableButton(false)
        }
    };

    const newPostHandler = async (categoryId: string) => {
        const post = await fetch('/api/post',
            {
                method: 'post',
                headers: {
                    //@ts-ignore
                    token: data['loggedUser'],
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    categoryId: categoryId
                })
            })

        if(post.ok){
            const result = await post.json()
            refetch()
            router.push('/write/' + result.data.slug)
        }
    }

    useEffect(() => {
        fetch(`/api/categories`)
            .then((res) => res.json())
            .then((result) => {
                setDataCategory(result.data)
                setSelectedOption(result.data[0]._id)
            })
    }, []);

    return (
        <div className={styles.empty}>
            {isModalOpen ? (
                <>
                    <form className={styles.formSubmit}>
                        <div className={styles.options}>
                            {dataCategory?.map((item: any) => (
                                <label key={item._id} className={styles.label}>
                                    <input
                                        type="radio"
                                        value={item._id}
                                        checked={selectedOption === item._id}
                                        onChange={handleOptionChange}
                                        className={styles.formRadio}
                                    />
                                    {item.title}
                                </label>
                            ))}
                        </div>
                        <div className={styles.optionsButton}>
                            <button disabled={disableButton}
                                    className={styles.submitButton}
                                    onClick={handleSubmit}
                            >create</button>
                            <button onClick={() => setIsModalOpen(false)}
                                    className={styles.closeButton}
                            >close</button>
                        </div>
                    </form>
                </>
            ) : (
                <>
                    <p className={styles.emptyText}>
                        {title}
                    </p>
                    <button
                        className={styles.newPost}
                        disabled={disableButton}
                        onClick={()=> setIsModalOpen(true)}
                    >
                        Bikin post baru
                    </button>
                </>
            )}
        </div>
    )
}