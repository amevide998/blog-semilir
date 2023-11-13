"use client"
import styles from "./authLinks.module.css";
import Link from "next/link";
import {useEffect, useState} from "react";
import {signOut, useSession} from "next-auth/react";

export default function AuthLinks(){

    const {status} = useSession()
    const [open, setOpen] = useState(false);

    return (
        <>
            {
                status !== "authenticated" ?
                    (
                        <Link href={"/api/auth/signin"} className={styles.link}>LOGIN</Link>
                    ):
                    (
                        <div className={styles.alreadyLogin}>
                            <Link href={"/write"}>WRITE</Link>
                            <span className={styles.link} onClick={async ()=> await signOut()}>
                                LOGOUT
                            </span>
                        </div>
                    )
            }
            <div className={styles.burger}  onClick={()=> setOpen(!open)}>
                <div className={styles.line1}></div>
                <div className={styles.line2}></div>
                <div className={styles.line3}></div>
            </div>
            {
                open && (
                    <div className={styles.responsiveMenu}>
                        <Link href={"/"}>HOME</Link>
                        <Link href={"/"}>CONTACT</Link>
                        <Link href={"/"}>ABOUT</Link>
                        {
                            status !== "authenticated" ?
                                (
                                    <Link href={"/api/auth/signin"}>LOGIN</Link>
                                ):
                                (
                                    <>
                                        <Link href={"/write"}>WRITE</Link>
                                            <span className={styles.logoutLinks}
                                                  onClick={async ()=> await signOut()
                                            }>
                                        LOGOUT
                                            </span>
                                    </>
                                )
                        }
                    </div>
                )
            }
        </>
    )
}
