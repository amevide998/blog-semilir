import styles from "./navbar.module.css";
import Link from "next/link";
import Theme from "@/components/theme/theme";
import SocialMediaLogo from "@/components/social-media/socialMediaLogo";
import AuthLinks from "@/components/authLinks/AuthLinks";


export default function Navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.socialLogos}>
                <SocialMediaLogo />
            </div>
            <Link href={""} className={styles.logo}>
                <h1>🅂🄴🄼🄸🄻🄸🅁</h1>
            </Link>
            <div className={styles.links}>
                <Theme/>
                <Link href={"/"} className={styles.link}>HOME</Link>
                <Link href={"/contact"} className={styles.link}>CONTACT</Link>
                <Link href={"/about"} className={styles.link}>ABOUT</Link>
                <div className={styles.authlink}>
                    <AuthLinks />
                </div>
            </div>
        </div>
    );
}