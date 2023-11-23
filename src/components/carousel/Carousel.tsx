// components/Carousel.js
"use client"
import {useEffect, useState} from 'react';
import styles from "./carousel.module.css";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/navigation";

const Carousel = ({ data, size }:
                      {data: any[], size: string}
) => {
    const [content, setContent] = useState(data);
    const [transform, setTransform] = useState(0)
    const [counter, setCounter] = useState(0)
    const [disableButton, setDisableButton] = useState(false)

    const router = useRouter()

    const prevSlide = () => {
        setDisableButton(true)
        let arr = [...content]
        arr.push(content[counter])
        setCounter(counter + 1)
        setContent(arr)
        setTransform(transform - 224)
        setTimeout(() => {
            setDisableButton(false)
        }, 1000)
    };

    const nextSlide = () => {
        if(transform < 0){
            setTransform(transform + 224)
        }
    };



    return (
        <div className={styles.carousel}>
            <button className={styles.prev}
                    onClick={nextSlide}
                    disabled={disableButton}
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
                </svg>
            </button>
            <button className={styles.next} onClick={prevSlide}>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
            </button>
            <div className={styles.carouselContent}
                 style={{transform: `translateX(${transform}px)`}}
            >
                {content.map((item, index) => (
                    <button onClick={() => router.push(`/blog?category=${item.slug}`)} key={index} className={styles.item}>
                        <div className={styles.item}
                             style={{backgroundImage: `url(${item.images})`}}
                        >
                        </div>
                        <h2 className={styles.title}>
                            {item.title}
                        </h2>
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
