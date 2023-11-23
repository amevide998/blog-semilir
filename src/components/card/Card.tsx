import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import {getCategory} from "@/data/CategoryData";

export const Card = async ({item}: {item: any}) => {
    const category = await getCategory(item.category)

    return (
        <>
        {
        category && (
        <div className={styles.container} key={item._id}>
            <div className={styles.info}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        {item.createdAt.toLocaleString('default', {dateStyle: 'long'})}
                    </span>
                    &nbsp;-&nbsp;
                    <span className={styles.category} style={{color: category.color2}}>
                        {category.title}
                    {/*    todo - tambahin author nya*/}
                    </span>
                </div>
            </div>
            <div className={styles.blogContent}>
                <div className={styles.imgContainer}>
                    {/*eslint-disable-next-line @next/next/no-img-element*/}
                    {item.image && (<img src={item.image} alt={''} className={styles.postImage}/>)}
                </div>
                <div className={styles.textContainer}>
                    <Link href={`/posts/${item.slug}`} className={styles.titleContainer}>
                        <h1 className={styles.cardTitle}>
                            {item.title}
                        </h1>
                    </Link>
                    <div className={styles.descriptionContainer}>
                        <div className={styles.cardDescription} dangerouslySetInnerHTML={{__html: `${item.subtitle}`}} />
                        <div className={styles.readMoreLink}>
                            <Link href={`/posts/${item.slug}`}>
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )}
        </>
    )
}