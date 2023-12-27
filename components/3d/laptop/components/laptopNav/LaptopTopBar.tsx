import styles from "./laptopTopBar.module.css";
import {FaTimes} from "react-icons/fa";
import {FC,MouseEventHandler} from "react";

type Props= {
    isOpen: boolean,
    toggle: MouseEventHandler<HTMLDivElement>,
}
export const LaptopTopBar: FC<Props> =  ({isOpen, toggle}) => {
    return (
        <aside className={styles.topBarWrapper}
               style={{opacity: isOpen? "100%" :"0",top: isOpen? "0" :"-380px"}}>
            <div className={styles.closeIconWrapper} onClick={toggle}>
                <p className={styles.closeIcon}>Close</p>
            </div>
            <div className={styles.linksWrapper}>
                <div className={styles.linksMenu}>
                    <a className={styles.link}>About</a>
                    <a className={styles.link}>Skills</a>
                    <a className={styles.link}>Projects</a>
                    <a className={styles.link}>Experience</a>
                    <a className={styles.link}>Contact</a>
                </div>
            </div>
        </aside>
    );
};