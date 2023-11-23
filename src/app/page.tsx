import styles from "./homePage.module.css";
import Featured from "@/components/featured/Featured";
import Categories from "@/components/categories/Categories";
import Cards from "@/components/cards/Cards";
import Menu from "@/components/menu/Menu";

import seeds from "@/seed/seeds";
import CategoryCarousel from "@/components/categories/categoryCarousel";

// @ts-ignore
export default function Home({searchParams}) {

    const page = parseInt(searchParams?.page) || 1
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

    return (
        <div className={styles.container}>
            <Featured />
            <CategoryCarousel />
            <div className={styles.content}>
                <Cards page={page}/>
                <Menu />
            </div>
        </div>
    );
}