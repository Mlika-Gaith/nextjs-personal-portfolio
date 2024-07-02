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
          <Reveal width="100%">
            <h1 className={styles.title}>
              Howdy
              <span className={styles.titleDot}>,</span>
            </h1>
          </Reveal>
          <Reveal width="100%">
            <p className={styles.about}>
              Hey there! I'm Ghaith Mlika, a software developer from Tunisia.
              Ever tried counting the bugs in my code? I did once, but lost
              track when they formed a union. Despite their mischief, I've
              crafted this portfolio to showcase my journey and projects.
              Welcome aboard and enjoy exploring!
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
