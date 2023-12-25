import styles from "./home.module.css"
import {SideBar, HeadBar} from "@components/nav";
import {Hero} from "@components/heroSection/Hero"

export const Home = () => {
    return (
        <div className={styles.home}>
            <SideBar/>
            <main id="main">
                <HeadBar/>
                <Hero/>
            </main>
        </div>
    );
};
