import styles from "./cards.module.css";
import {Card} from "@/components/card/Card";
import {getPosts} from "@/data/PostData";
import Pagination from "@/components/pagination/Pagination";
export default async function Cards({page}: {page: number}) {

    const items = await getPosts(page)
    if(!items){
        return (
            <>
                Post Not Found
            </>
        )
    }
    const posts = items.posts

    const hasPrev = page > 1
    const hasNext = items.count > (page * 5) + 1

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                Recent Post
            </h1>
            <div className={styles.posts}>
                {
                    posts?.map((item) => (
                        <Card key={item._id} item={item}/>
                    ))
                }
            </div>
            <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} count={items.count}/>
        </div>
    )
}