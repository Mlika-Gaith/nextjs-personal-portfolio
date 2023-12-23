"use client"
import styles from "./headbar.module.css"
import {Links} from "@components/links/Links"
import {OutlineBtn} from "@components/buttons"
export const HeadBar = () => {
    return (
        <header className={styles.headBar}>
            <Links/>
            <OutlineBtn onClick={()=>window.open("/GHAITH MLIKA CV.pdf")}> My Resume</OutlineBtn>
        </header>
    );
};