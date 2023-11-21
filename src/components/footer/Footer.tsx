import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";
import SocialMediaLogo from "@/components/social-media/socialMediaLogo";
import {getCategories} from "@/data/CategoryData";


export default async function Footer() {

    const category = await getCategories();

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.logo}>
                    <Image src={"/wind-turbines-svgrepo-com.svg"} alt={""} width={50} height={50}/>
                </div>
                <h1 className={styles.logoText}>
                    <b>Semilir Blog</b>
                </h1>
                <p className={styles.description}>
                    {`Sailing the Breeze of Innovation and Knowledge`}
                </p>
                <div className={styles.icons}>
                    <SocialMediaLogo />
                </div>
            </div>
            <div className={styles.links}>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Links</span>
                    <Link href={"/"}>home</Link>
                    <Link href={"/blog"}>blog</Link>
                    <Link href={"/about"}>about</Link>
                    <Link href={"/contact"}>contact</Link>
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Tags</span>
                    {
                        category && category.map((item: any) => (
                            <Link href={`/tag/${item.slug}`} key={item._id}>{item.title}</Link>
                        ))
                    }
                </div>
                <div className={styles.list}>
                    <span className={styles.listTitle}>Social</span>
                    <Link href={""}>Facebook</Link>
                    <Link href={""}>Instagram</Link>
                    <Link href={""}>Tiktok</Link>
                    <Link href={""}>Youtube</Link>
                </div>
            </div>
        </div>
    );
}