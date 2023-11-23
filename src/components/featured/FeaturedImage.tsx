import styles from "@/components/featured/featured.module.css";
import React from "react";
import Image from "next/image";

export default function FeaturedImage(){
    return (
        <Image src="/hero/hero-image.jpeg"
               alt="post image"
               className={styles.postImage}
               fill
        />
    )
}