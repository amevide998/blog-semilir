import React, {useContext} from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Theme from "@/app/components/theme/theme";
import {ThemeContext} from "@/app/components/context/ThemeContext";
import SocialMediaLogo from "@/app/components/social-media/socialMediaLogo";
// import AuthLinks from "@/components/authLinks/AuthLinks";
// import ThemeToggle from "@/components/themeToggle/ThemeToggle";


export default function Navbar() {
    return (
        <div className={styles.container}>
            <SocialMediaLogo />
            <div className={styles.logo}>Semilir</div>
            <div className={styles.links}>
                <Theme/>
                <Link href={"/"} className={styles.link}>Home</Link>
                <Link href={"/"} className={styles.link}>Contact</Link>
                <Link href={"/"} className={styles.link}>About</Link>
                {/*<AuthLinks className={styles.link} />*/}
            </div>
        </div>
    );
}