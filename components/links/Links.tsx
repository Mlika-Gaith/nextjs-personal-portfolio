"use client"
import {motion} from "framer-motion";
import styles from "./links.module.css";
import Link from  "next/link"
import { FiGithub,FiLinkedin } from "react-icons/fi";
import { RiGitlabLine,RiTwitterXLine } from "react-icons/ri";

export const Links = () => {
    return (
        <div className={styles.links}>
            <motion.span
            initial={{y: -30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.1}}>
                <Link href="" target="_blank" rel="nofollow">
                    <FiLinkedin size="2.6rem" className={styles.link}/>
                </Link>
            </motion.span>
            <motion.span
            initial={{y: -30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.2}}>
                <Link href="" target="_blank" rel="nofollow">
                    <FiGithub size="2.6rem" className={styles.link}/>
                </Link>
            </motion.span>
            <motion.span
            initial={{y: -30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.3}}>
                <Link href="" target="_blank" rel="nofollow">
                    <RiGitlabLine size="2.6rem" className={styles.link}/>
                </Link>
            </motion.span>
            <motion.span
            initial={{y: -30, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.4}}>
                <Link href="" target="_blank" rel="nofollow">
                    <RiTwitterXLine size="2.6rem" className={styles.link}/>
                </Link>
            </motion.span>
        </div>
    );
};
