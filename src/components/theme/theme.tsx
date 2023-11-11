"use client"
import {useContext} from "react";
import {ThemeContext} from "@/components/context/ThemeContext";
import Image from "next/image";
import styles from "./theme.module.css";

export default function Theme(){

    const theme = useContext(ThemeContext)

    const changeTheme = () => {
        return theme?.theme === "light" ? "dark" : "light"
    }


    return (
        // @ts-ignore
        <div className={`${styles.outerBorder} ${theme?.theme === "light" ? "border-white" : "border-black"}`}>
            <div className={`${styles.container} ${theme?.theme === "light" ? styles.light : styles.dark}`}
                 onClick={()=> theme?.setTheme(changeTheme())}
            >
                <Image
                    src={theme?.theme === "light" ? "/moon.png" : "/sun.png"}
                    alt={"theme"}
                    width={16}
                    height={16}
                    className={styles.image}
                />
            </div>
        </div>

    )
}