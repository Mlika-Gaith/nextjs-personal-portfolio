"use client"
import {useState,useEffect} from "react"
import {motion} from "framer-motion"
import styles from "./sidebar.module.css"
export const SideBar = () => {
    const [selected, setSelected] = useState("");
    useEffect(()=>{
        const sections: NodeListOf<Element> = document.querySelectorAll(".section-wrapper");
        const options ={
            threshold: 0.3
        }

        // called whenever any observed element enters or exits the viewport
        const callback = (entries: any) =>{
            entries.forEach((entry: any) =>{
                if (entry.isIntersecting){
                    setSelected(entry.target.id);
                }
            })
        }
        // it allows you to detect when an element comes into or goes out of the viewport
        const observer : IntersectionObserver = new IntersectionObserver(callback, options);
        sections.forEach((section : any)=> observer.observe(section))
        console.log(selected)
    })
    return (
        <div className="bg-background-dark">
            <motion.nav
                initial={{x:-70}}
                animate={{x:0}}
                transition={{duration:0.5}}
                className={styles.sideBar}>
                <span className={styles.logo} onClick={()=>{
                    document.location.hash === '' ?
                        document.getElementById("main")?.scrollIntoView() :
                        document.location.hash = '';
                }}>GM<span className={styles.logoDot}>.</span>
                </span>
                <motion.a
                initial={{x: -70}}
                animate={{x: 0}}
                transition={{duration:0.5, delay:0.1}}
                href="#about"
                onClick={()=>{
                    setSelected("about")
                }}
                className={`${styles.navigationLink} ${selected === "about" ? styles.selected : ''}`}>
                    About
                </motion.a>
                <motion.a
                initial={{x: -70}}
                animate={{x: 0}}
                transition={{duration:0.5, delay:0.2}}
                href="#projects"
                onClick={()=>{
                    setSelected("projects")
                }}
                className={`${styles.navigationLink} ${selected === "projects" ? styles.selected : ''}`}>
                    Projects
                </motion.a>
                <motion.a
                initial={{x: -70}}
                animate={{x: 0}}
                transition={{duration:0.5, delay:0.3}}
                href="#experience"
                onClick={()=>{
                    setSelected("experience")
                }}
                className={`${styles.navigationLink} ${selected === "experience" ? styles.selected : ''}`}>
                    Exp.
                </motion.a>
                <motion.a
                initial={{x: -70}}
                animate={{x: 0}}
                transition={{duration:0.5, delay:0.4}}
                href="#contact"
                onClick={()=>{
                    setSelected("contact")
                }}
                className={`${styles.navigationLink} ${selected === "contact" ? styles.selected : ''}`}>
                    Contact
                </motion.a>
            </motion.nav>
        </div>
    );
};
