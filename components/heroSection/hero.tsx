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
              alt="line"
              className={styles.subTitleLine}
            />
          </Reveal>
          <Reveal>
            <p className={styles.about}>
              Hi there! I'm Ghaith Mlika from Tunisia, a software developer who
              once tried to count all the bugs in my code but lost track after
              discovering they had formed a union.
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
