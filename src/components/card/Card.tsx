import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import {getCategory} from "@/data/CategoryData";

export const Card = async ({item}: {item: any}) => {
    const category = await getCategory(item.category)

    return (
        <div className={styles.container} key={item._id}>
            {
                item.image && (
                    <div className={styles.imgContainer}>
                        {/*eslint-disable-next-line @next/next/no-img-element*/}
                        <img src={item.image} alt={''} className={styles.postImage}/>
                    </div>
                )
            }
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>
                        {item.createdAt.toLocaleString('default', {dateStyle: 'long'})}
                    </span>
                    &nbsp;-&nbsp;
                    <span className={styles.category} style={{color: category.color2}}>
                        {category.title}
                    </span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                    <h1 className={styles.cardTitle}>{item.title}
                    </h1>
                </Link>

                <div className={styles.cardDescription} dangerouslySetInnerHTML={{__html: `${item.subtitle}`}} />
                <Link href={`/posts/${item.slug}`} className={styles.readMoreLink}>
                    Read More
                </Link>
            </div>
        </div>
    )
}