import React from "react";
import styles from "./singlePage.module.css"
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import {getPost} from "@/data/PostData";
import Loader from "../../../components/loader/Loader";
import Comments from "@/components/comments/Comments";



export default async function SinglePage ({params} : {params: {slug: string}}){

    const {slug} = params;
    const data = await getPost(slug);

    if(!data){
        return (
            <div className={styles.container}>
                <Loader />
                <div className={styles.content}>
                    <div className={styles.loader}>
                        <Loader />
                    </div>
                    <Menu />
                </div>
            </div>
        )
    }


    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>{
                        data?.title
                    }
                    </h1>
                    <h2 className={styles.subTitle}>
                        {data?.subtitle}
                    </h2>
                    <br/>
                    <br/>
                    <div className={styles.user}>
                        {data?.author?.image && <div className={styles.userImageContainer}>
                            <Image src={`${data?.author?.image}`} alt={`image of ${data.title}`} fill className={styles.userImage}/>
                        </div>}
                        <div className={styles.userTextContainer}>
                            <span className={styles.username}>
                                {data?.author?.name}
                            </span>
                            <span className={styles.date}>
                                {data?.createdAt.toLocaleString('default', {dateStyle: 'long'})}
                            </span>
                        </div>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={data?.image} alt={''} fill className={styles.image}/>
                </div>
            </div>
            <div className={styles.content}>
            <div className={styles.post}>
                <div className={styles.description} dangerouslySetInnerHTML={{__html: `${data.body}`}}/>
                <div className={styles.comment}>
                    <Comments postSlug={slug}/>
                </div>
            </div>
                <Menu />
            </div>
        </div>
    )
}