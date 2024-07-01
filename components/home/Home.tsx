"use client";
import styles from "./home.module.css";
import { SideBar, HeadBar } from "@components/nav";
import { Hero } from "@components/heroSection/hero";
import { About } from "@components/about/about";
import { Skills } from "@components/skills/skills";
import { Projects } from "@components/projects/projects";
import { Experience } from "@components/experience/experience";
import { Contact } from "@components/contact/contact";
import Certificates from "@components/certificates/certifications";
import { Game } from "@components/game/game";
export const Home = () => {
  return (
    <div className={styles.home}>
      <SideBar />
      <main id="main">
        <HeadBar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Game />
        <Contact />
      </main>
    </div>
  );
};
