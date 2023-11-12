import styles from "./cards.module.css";
import {Card} from "@/components/card/Card";
import {getPosts} from "@/data/PostData";
export default async function Cards({page}: {page: number}) {

    const posts = await getPosts()

    if(!posts){
        return (
            <>
                Post Not Found
            </>
        )
    }

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
            {/*<Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>*/}
        </div>
    )
}