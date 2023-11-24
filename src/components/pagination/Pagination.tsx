"use client"
import React from "react";
import styles from "./pagination.module.css";
import {usePathname, useRouter} from "next/navigation";


export default function Pagination(
    {page, hasPrev, hasNext, count, cat}:
        {page: number, hasPrev: boolean, hasNext: boolean, count: number, cat?: string}) {

    const router = useRouter();

    const totalPage = Math.ceil(count / 5);

    const pathName = usePathname();


    return (
        <div className={styles.container}>
            <button className={styles.button}
                    onClick={()=>{
                        router.push(`${pathName=='/blog' ? '/blog': ''}?page=${page-1} ${cat? `&category=${cat}`: ''}`
                            , {scroll: true})
                    }}
                    disabled={!hasPrev}
            >Previous
            </button>
            <div className={styles.pageNumber}>

            </div>
            <button className={styles.button} onClick={()=> router.push(`/?page=${page+1}`, {scroll: true})} disabled={!hasNext} >Next</button>
        </div>
    );
}