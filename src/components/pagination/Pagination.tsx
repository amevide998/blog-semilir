"use client"
import React from "react";
import styles from "./pagination.module.css";
import {useRouter} from "next/navigation";


export default function Pagination({page, hasPrev, hasNext, count}: {page: number, hasPrev: boolean, hasNext: boolean, count: number}) {

    const router = useRouter();

    const totalPage = Math.ceil(count / 4);


    return (
        <div className={styles.container}>
            <button className={styles.button} onClick={()=> router.push(`/?page=${page-1}`, {scroll: true})} disabled={!hasPrev} >Previous</button>
            <div className={styles.pageNumber}>

            </div>
            <button className={styles.button} onClick={()=> router.push(`/?page=${page+1}`, {scroll: true})} disabled={!hasNext} >Next</button>

        </div>
    );
}