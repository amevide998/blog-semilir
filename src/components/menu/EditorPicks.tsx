import Link from "next/link";
import Image from "next/image";
import React from "react";
import {getPostsByEditorPick} from "@/data/PostData";
import ByEditor from "@/components/menu/ByEditor";

export default async function EditorPicks({styles}: any){

    const data: any = await getPostsByEditorPick();
    const posts = data[0].posts;

    if(!posts){
        return (
            <h1>Nothing to see here </h1>
        )
    }

    return (
        <div className={styles.editorPicks}>
            <h2 className={styles.subTitle}>Choose by editor</h2>
            <h1 className={styles.title}>editor pick</h1>
            <div className={styles.items}>
                {posts.map((post: any) => (
                    <ByEditor key={post._id.toString()} post={post} styles={styles}/>
                ))}
            </div>
        </div>
    )
}