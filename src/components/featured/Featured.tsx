import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import FeaturedImage from "@/components/featured/FeaturedImage";


export default function Featured() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <b>{`Unlock Creativity`}</b>
                <br/>
                Through Code: Where Ideas Become Digital Reality!
            </h1>
            <div className={styles.post}>
                <div className={styles.imgContainer}>
                    <FeaturedImage />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.postTitle}>
                        I am Spirit, formless and free.
                        Whatever I think, that will I be.
                    </h1>
                    <p className={styles.postDescription}>
                        {
                            `As I think, so I become, a creator of my own,
                        In this tapestry of life, I've beautifully sewn.
                        With every whisper of desire, every thought I see,
                        I craft my existence, for I am Spirit, wild and free.`
                        }
                    </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.readMoreButton}>
                            Read More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}