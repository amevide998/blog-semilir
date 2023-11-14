"use client"
import styles from './write.module.css';
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import Unauthorize from "@/components/unauthorize/Unauthorize";
export default function WritePost() {

    const {status} = useSession();
    const router = useRouter();

    if(status !== "authenticated"){
        return (
            <>
            <Unauthorize />
            </>
        )
    }

    return (
        <div className={styles.container}>
            Kamu belum punya post apa apa
        </div>
    )
}