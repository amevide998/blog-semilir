"use client"
import {signIn, signOut, useSession} from "next-auth/react";
import {inspect} from "util";
import styles from "./page.module.css";
import Featured from "@/app/components/featured/Featured";

export default function Home() {
    // const { data: session } = useSession();
    //
    // if (session && session.user) {
    //     console.log("session.user", session?.user);
    //     return (
    //         <button
    //             onClick={() => signOut()}
    //         >
    //             {session.user.name} Sign Out
    //         </button>
    //     );
    // }

    return (
        <div className={styles.container}>
            <Featured />
        </div>
    );
}