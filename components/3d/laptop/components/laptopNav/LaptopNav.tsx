import styles from "./laptopNav.module.css"
import {FaBars} from "react-icons/fa";
import {FC, MouseEventHandler} from "react";

type Props= {
    toggle: MouseEventHandler<HTMLDivElement>,
}
export const LaptopNav: FC<Props> = ({toggle}) => {
    return(
        <nav className={styles.nav}>
            <div className={styles.navbarWrapper}>
                <h3 className={styles.navLogo}>Portfolio</h3>
                <div className={styles.navIconWrapper} onClick={toggle}>
                    <p className={styles.navIcon}>Menu</p>
                </div>
            </div>
        </nav>
    )
}