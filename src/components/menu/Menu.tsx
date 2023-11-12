import React from "react";
import styles from "@/components/menu/menu.module.css";
import MostPopular from "@/components/menu/MostPopular";
import ByCategories from "@/components/menu/ByCategories";
import EditorPicks from "@/components/menu/EditorPicks";


export default function Menu() {
    return (
        <div className={styles.container}>
            <MostPopular styles={styles}/>
            <ByCategories styles={styles}/>
            <EditorPicks styles={styles}/>
        </div>
    );
}