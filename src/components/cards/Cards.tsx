import styles from "./cards.module.css";
export default function Cards({page}: {page: number}) {

    return (
        <div className={styles.container}>Cards, page {page}</div>
    )
}