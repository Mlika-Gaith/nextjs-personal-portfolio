"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./sidebar.module.css";
import { useIntersectionObserver } from "@hooks";
export const SideBar = () => {
  const selectedFromObserver = useIntersectionObserver();
  const [selected, setSelected] = useState("");
  return (
    <div className="bg-background-dark">
      <motion.nav
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sideBar}
      >
        <span
          className={styles.logo}
          onClick={() => {
            document.location.hash === ""
              ? document.getElementById("main")?.scrollIntoView()
              : (document.location.hash = "");
          }}
        >
          GM<span className={styles.logoDot}>.</span>
        </span>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="#about"
          onClick={() => {
            setSelected("about");
          }}
          className={`${styles.navigationLink} ${
            selected === "about" ? styles.selected : ""
          }`}
        >
          About
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="#skills"
          onClick={() => {
            setSelected("skills");
          }}
          className={`${styles.navigationLink} ${
            selected === "skills" ? styles.selected : ""
          }`}
        >
          Skills
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href="#projects"
          onClick={() => {
            setSelected("projects");
          }}
          className={`${styles.navigationLink} ${
            selected === "projects" ? styles.selected : ""
          }`}
        >
          Projects
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          href="#experience"
          onClick={() => {
            setSelected("experience");
          }}
          className={`${styles.navigationLink} ${
            selected === "experience" ? styles.selected : ""
          }`}
        >
          Exp.
        </motion.a>
        <motion.a
          initial={{ x: -70 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#contact"
          onClick={() => {
            setSelected("contact");
          }}
          className={`${styles.navigationLink} ${
            selected === "contact" ? styles.selected : ""
          }`}
        >
          Contact
        </motion.a>
      </motion.nav>
    </div>
  );
};
