import React, {useContext} from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Theme from "@/app/components/theme/theme";
import SocialMediaLogo from "@/app/components/social-media/socialMediaLogo";
// import AuthLinks from "@/components/authLinks/AuthLinks";
// import ThemeToggle from "@/components/themeToggle/ThemeToggle";


export default function Navbar() {
    return (
        <div className={styles.container}>
            <SocialMediaLogo />
            <Link href={"/"} className={styles.logo}>
                <img src={"/wind-turbines-svgrepo-com.svg"} alt={"logo"}/>
                <p>🅂🄴🄼🄸🄻🄸🅁</p>
            </Link>
            <div className={styles.links}>
                <Theme/>
                <Link href={"/"} className={styles.link}>HOME</Link>
                <Link href={"/"} className={styles.link}>CONTACT</Link>
                <Link href={"/"} className={styles.link}>ABOUT</Link>
                {/*<AuthLinks className={styles.link} />*/}
            </div>
        </div>
    );
}