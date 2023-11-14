import styles from "./unauthorize.module.css"
import Link from "next/link";
export default function Unauthorize() {
    return (
        <div className={styles.container}>
            <h1>Unauthorize</h1>
            <p>Anda tidak diizinkan untuk mengakses halaman ini</p>
            <p>Silahkan login terlebih dahulu</p>
            <Link href="/" className={styles.link}>Kembali ke halaman utama </Link>
        </div>
    )
}