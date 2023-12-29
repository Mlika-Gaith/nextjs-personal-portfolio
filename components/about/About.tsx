"use client"
import {Reveal, SectionHeader} from "../../utils";
import styles from "./about.module.css";
import {DotGrid} from "@components/dotGrid";
import {motion} from "framer-motion";
import Illustration from "@public/assets/img/about.png";
import Image from "next/image";
export const About = () => {
    return (
        <section id="about" className={`section-wrapper`}>
            <SectionHeader title="About" direction="left"/>
            <div className={styles.about}>
                <div className={styles.aboutGrid}>
                    {/* illustration Object */}
                    <motion.div
                    initial={{y: -30, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay:0.4}}>
                        <Image
                        className={styles.illustration}
                        src={Illustration}
                        alt="Developper"
                        width={300}
                        height={300}
                        />
                    </motion.div>

                    <div className={styles.textContainer}>
                        <Reveal>
                            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
                                Hello My name is Ghaith Mlika, and I hail from Tunisia.
                                I recently graduated in Computer Science from École Polytechnique de Sousse,
                                specializing in software engineering.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className={styles.aboutText}>
                                As I stand on the threshold of my professional journey in the tech industry,
                                I bring with me a robust foundation in programming fundamentals, data structures,
                                algorithms,
                                and diverse software development methodologies, honed during my academic years.
                            </p>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
};
