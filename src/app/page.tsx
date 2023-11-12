import styles from "./homePage.module.css";
import Featured from "@/components/featured/Featured";
import Categories from "@/components/categories/Categories";
import Cards from "@/components/cards/Cards";
import Menu from "@/components/menu/Menu";

import seeds from "@/seed/seeds";

export default function Home() {
    if(process.env.SEEDS === 'true') {
        seeds();
    }
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

    const page = 1

    return (
        <div className={styles.container}>
            <Featured />
            <Categories />
            <div className={styles.content}>
                <Cards page={page}/>
                <Menu />
            </div>
        </div>
    );
}