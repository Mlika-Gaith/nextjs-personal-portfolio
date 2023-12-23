import styles from "./home.module.css"
import {SideBar, HeadBar} from "@components/nav";

export const Home = () => {
    return (
        <div className={styles.home}>
            <SideBar/>
            <main id="main">
                <HeadBar/>
            </main>
        </div>
    );
};
