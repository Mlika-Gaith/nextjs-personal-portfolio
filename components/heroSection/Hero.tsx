"use client"
import styles from "./hero.module.css"
import {Reveal} from "@utils";
import {Button} from "@components/buttons";
import {Suspense, useEffect, useState} from "react";
import {Scene} from "@components/3d";
import {Loader} from "@components/loaders";
import {TypeAnimation} from "react-type-animation";
import {useScreenWidth} from "@hooks";

export const Hero = () => {
    const [show3DScene, setShow3DScene] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShow3DScene(true);
        }, 3000)
        return () => clearTimeout(timer);
    }, []);
    // screen width typing
    const screenWidth = useScreenWidth();

    function getTypingAnimation() {
        if (screenWidth <= 486) {
            return (
                <h2 className={styles.subTitle}>
                    <TypeAnimation
                        sequence={[
                            "Ghaith Mlika",
                            1000,
                            "Software Engineer",
                            1000,
                            "Web Developer",
                            1000,
                            "Mobile Developer",
                            1000
                        ]}
                        wrapper="span"
                        style={{
                            color: "#A4161A",
                        }}
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>
            )
        }
        return (
            <h2 className={styles.subTitle}> I AM {" "}
                <TypeAnimation
                    sequence={[
                        "Ghaith Mlika",
                        1000,
                        "a Software Engineer",
                        1000,
                        "a Web Developer",
                        1000,
                        "a Mobile Developer",
                        1000
                    ]}
                    wrapper="span"
                    style={{
                        color: "#A4161A",
                    }}
                    speed={50}
                    repeat={Infinity}
                />
            </h2>
        )
    }

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
                        {getTypingAnimation()}
                    </Reveal>
                    <Reveal>
                        <p className={styles.about}>Nice to meet you ! I am a dedicated
                            software engineer passionate about blending creativity with functionality.
                            Interested in web development and machine learning, I am always
                            eager to learn new technologies.Let's connect
                            and explore the possibilities !</p>
                    </Reveal>
                    <Reveal>
                        <Button onClick={() => document.getElementById("contact")?.scrollIntoView()}>
                            Contact me
                        </Button>
                    </Reveal>
                </div>

                {/* 3d Laptop SECTION */}
                <div className={styles.objectContainer}>
                    <Suspense fallback={<Loader/>}>
                        {show3DScene && <Scene/>}
                    </Suspense>
                </div>
            </div>
        </section>
    );
};
