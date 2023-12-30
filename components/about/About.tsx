"use client"
import {Reveal, SectionHeader} from "@utils";
import styles from "./about.module.css";
import {DotGrid} from "@components/dotGrid";
import {motion} from "framer-motion";
import Illustration from "@public/assets/img/about.jpg";
import Image from "next/image";
export const About = () => {
    return (
        <section id="about" className={`section-wrapper`}>
            <DotGrid/>
            <SectionHeader title="About" direction="left"/>
            <div className={styles.about}>
                <div className={styles.aboutGrid}>
                    {/* illustration Object */}
                    <motion.div
                    initial={{y: -30, opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{duration: 0.5, delay:0.4}}
                    className={styles.illustrationContainer}>
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
                                Hey there! I'm Ghaith Mlika, and I hail from Tunisia.
                                I've just wrapped up my studies in Computer Science at "
                                École Polytechnique de Sousse ", with a focus on software engineering.
                            </p>
                        </Reveal>
                        <Reveal>
                            <p className={styles.aboutText}>
                                During my time there, I dived deep into all things tech.
                                From coding challenges to exploring the ins
                                and outs of data structures and algorithms,
                                I've had my fair share of late-night coding sessions! Beyond the code,
                                I've also learned a lot about different
                                software development technologies,
                                giving me a well-rounded view of the tech landscape.
                            </p>
                            <p className={styles.aboutText}>
                                But hey, it's not all about the textbooks!
                                I'm genuinely passionate about finding solutions
                                to real-world problems.
                                As I step into the exciting world of tech, I'm pumped to bring
                                my skills to the table. I'm all about teamwork,
                                learning from others, and pushing boundaries.
                            </p>
                            <p className={styles.aboutText}>
                                Thanks for stopping
                                by and getting to know a bit about me.
                                Here's to the adventures ahead!
                            </p>
                        </Reveal>
                    </div>

                </div>
            </div>
        </section>
    );
};
