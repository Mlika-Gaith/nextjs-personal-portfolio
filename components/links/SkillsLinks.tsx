import styles from "./skillsLinks.module.css"
import {motion} from "framer-motion"
import Link from "next/link";
import {FaSquareGitlab, FaSquareGithub} from "react-icons/fa6";

export const SkillsLinks = () => {
    return (
        <div className={styles.skillsLinks}>
            <motion.span
            initial={{x:-50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration: 0.5, delay:0.1}}>
                <Link href="https://github.com/Mlika-Gaith" target="_blank" rel="nofollow">
                    <FaSquareGithub size="2.8rem" className={styles.skillLink}/>
                </Link>
            </motion.span>
            <motion.span
            initial={{x:-50, opacity:0}}
            animate={{x:0, opacity:1}}
            transition={{duration: 0.5, delay:0.2}}>
                <Link href="https://gitlab.com/ghaith_mlika" target="_blank" rel="nofollow">
                    <FaSquareGitlab size="2.8rem" className={styles.skillLink}/>
                </Link>
            </motion.span>
        </div>
    );
};
