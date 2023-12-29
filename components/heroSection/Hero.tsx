"use client"
import styles from "./hero.module.css"
import {Reveal} from "../../utils";
import {Button} from "@components/buttons";
import {Suspense, useEffect, useState} from "react";
import {Scene} from "@components/3d";
import {Loader} from "@components/loaders";

export const Hero = () => {
    const [show3DScene, setShow3DScene] = useState(false);
    useEffect(() => {
        const timer = setTimeout(()=>{
            setShow3DScene(true);
        }, 2000)
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className={`section-wrapper ${styles.hero}`}>
            <div className={styles.heroGrid}>
                <div className={styles.textContainer}>
                    <Reveal>
                        <h1 className={styles.title}>Welcome
                            <span className={styles.titleDot}>.</span>
                        </h1>
                    </Reveal>
                    <Reveal>
                        <h2 className={styles.subTitle}> I AM
                            <span className={styles.subTitleName}> Ghaith</span>
                        </h2>
                    </Reveal>
                    <Reveal>
                        <h2 className={styles.altTitle}>
                            Software Engineer</h2>
                    </Reveal>
                    <Reveal>
                        <p className={styles.about}>Nice to meet you ! I am a dedicated
                            software engineer passionate about blending creativity with functionality.
                            Interested in web development and machine learning,I am always
                            eager to learn new technologies.Let's connect
                            and explore the possibilities !</p>
                    </Reveal>
                    <Reveal>
                        <Button onClick={()=>document.getElementById("contact")?.scrollIntoView()}>
                            Contact me
                        </Button>
                    </Reveal>
                </div>

                {/* SPHERE SECTION */}
                <div className={styles.objectContainer}>
                    <Suspense fallback={<Loader/>}>
                        { show3DScene && <Scene />}
                    </Suspense>
                </div>
            </div>
        </section>
    );
};
