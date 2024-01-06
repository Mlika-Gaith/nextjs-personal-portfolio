"use client"
import styles from "./headbar.module.css"
import {Links} from "@components/links"
import {OutlineBtn} from "@components/buttons"


export const HeadBar = () => {
    return (
        <header className={styles.headBar}>
            <Links/>
            <OutlineBtn
                onClick={() => window.open("/Ghaith.pdf")}>
                My Resume
            </OutlineBtn>
        </header>
    );
};
