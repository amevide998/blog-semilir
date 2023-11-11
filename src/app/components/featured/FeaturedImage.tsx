import styles from "@/app/components/featured/featured.module.css";
import React from "react";

export default function FeaturedImage(){
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img src="https://firebasestorage.googleapis.com/v0/b/blog-35591.appspot.com/o/image%2Fhero-image-full.png?alt=media&token=30ac8ac9-4b3f-40c3-8dd6-0d3ed0150fbc"
               alt="post image"
               className={styles.postImage}/>
    )
}