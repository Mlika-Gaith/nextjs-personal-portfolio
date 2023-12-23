import styles from "./home.module.css"
import {SideBar} from "@components/nav";

export const Home = () => {
    return (
        <div className={styles.home}>
            <SideBar/>
        </div>
    );
};
