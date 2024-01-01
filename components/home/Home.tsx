"use client"
import styles from "./home.module.css"
import {SideBar, HeadBar} from "@components/nav";
import {Hero} from "@components/heroSection/Hero"
import {About} from "@components/about/About";
import {Skills} from "@components/skills/Skills"
import {Projects} from "@components/projects/Projects";
import {Experience} from "@components/experience/Experience";

export const Home = () => {
    return (
        <div className={styles.home}>
            <SideBar/>
            <main id="main">
                <HeadBar/>
                <Hero/>
                <About/>
                <Skills/>
                <Projects/>
                <Experience/>
            </main>
        </div>
    );
};
