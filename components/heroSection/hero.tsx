"use client";
import styles from "./hero.module.css";
import { Reveal } from "@utils";
import { Button } from "@components/buttons";
import { Suspense, useEffect, useState } from "react";
import { Scene } from "@components/3d";
import { Spinner } from "@components/loaders";
import Image from "next/image";

export const Hero = () => {
  const [show3DScene, setShow3DScene] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow3DScene(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.heroGrid}>
        <div className={styles.textContainer}>
          <Reveal>
            <h1 className={styles.title}>
              Welcome
              <span className={styles.titleDot}>.</span>
            </h1>
          </Reveal>
          <Reveal>
            <h2 className={styles.subTitle}>Software Developer</h2>
            <Image
              src="/assets/svg/line.svg"
              width={50}
              height={50}
              alt="arrow"
              className={styles.subTitleLine}
            />
          </Reveal>
          <Reveal>
            <p className={styles.about}>
              Nice to meet you ! I am a dedicated software engineer passionate
              about blending creativity with functionality. Interested in web
              development and machine learning, I am always eager to learn new
              technologies. Let's connect and explore the possibilities !
            </p>
          </Reveal>
          <Reveal>
            <Button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView()
              }
            >
              Contact me
            </Button>
          </Reveal>
        </div>

        {/* 3d Laptop SECTION */}
        <div className={styles.objectContainer}>
          <Suspense fallback={<Spinner />}>{show3DScene && <Scene />}</Suspense>
        </div>
      </div>
    </section>
  );
};
