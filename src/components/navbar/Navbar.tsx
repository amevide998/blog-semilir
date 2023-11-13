import React, {useContext} from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Theme from "@/components/theme/theme";
import SocialMediaLogo from "@/components/social-media/socialMediaLogo";
import Image from "next/image";
import AuthLinks from "@/components/authLinks/AuthLinks";
// import AuthLinks from "@/components/authLinks/AuthLinks";
// import ThemeToggle from "@/components/themeToggle/ThemeToggle";


export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.socialLogos}>
                <SocialMediaLogo />
            </div>
            <Link href={""} className={styles.logo}>
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img src={"/wind-turbines-svgrepo-com.svg"} alt={"logo"}/>
                <p>🅂🄴🄼🄸🄻🄸🅁</p>
            </Link>
            <div className={styles.links}>
                <Theme/>
                <Link href={""} className={styles.link}>HOME</Link>
                <Link href={""} className={styles.link}>CONTACT</Link>
                <Link href={""} className={styles.link}>ABOUT</Link>
                <div className={styles.authlink}>
                    <AuthLinks />
                </div>
            </div>
        </div>
    );
}