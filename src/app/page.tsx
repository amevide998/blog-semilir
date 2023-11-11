import styles from "./homePage.module.css";
import Featured from "@/components/featured/Featured";
import Categories from "@/components/categories/Categories";

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
            <Categories />
        </div>
    );
}