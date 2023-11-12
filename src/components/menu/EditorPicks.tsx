import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function EditorPicks({styles}: any){
    return (
        <>
            <h2 className={styles.subTitle}>Choose by editor</h2>
            <h1 className={styles.title}>editor pick</h1>
            <div className={styles.items}>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src={'/p1.jpeg'} alt={""} className={styles.image} fill />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src={'/p1.jpeg'} alt={""} className={styles.image} fill />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.culture}`}>
                            Culture
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src={'/p1.jpeg'} alt={""} className={styles.image} fill />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.food}`}>
                            Food
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
                <Link href={"/"} className={styles.item}>
                    <div className={styles.imgContainer}>
                        <Image src={'/p1.jpeg'} alt={""} className={styles.image} fill />
                    </div>
                    <div className={styles.textContainer}>
                        <span className={`${styles.category} ${styles.travel}`}>
                            Travel
                        </span>
                        <h3 className={styles.postTitle}>
                            some random text from heaven
                        </h3>
                        <div className={styles.detail}>
                            <span className={styles.username}>
                                Michael Corleone
                            </span>
                            {" - "}
                            <span className={styles.date}>
                                11.02.2023
                            </span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}