import styles from "./home.module.css"
import {SideBar, HeadBar} from "@components/nav";
import {Hero} from "@components/heroSection/Hero"
import {About} from "@components/about/About";

export const Home = () => {
    return (
        <div className={styles.home}>
            <SideBar/>
            <main id="main">
                <HeadBar/>
                <Hero/>
                <About/>
            </main>
        </div>
    );
};
