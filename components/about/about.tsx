"use client";
import { Reveal, SectionHeader } from "@utils";
import styles from "./about.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
export const About = () => {
  const controls = useAnimation();
  const variants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: -100, opacity: 0 },
  };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <section id="about" className={`section-wrapper`}>
      <SectionHeader title="About" direction="left" />
      <div className={styles.about}>
        <div className={styles.aboutGrid}>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            transition={{ duration: 1, delay: 0.4 }}
            className={styles.illustrationContainer}
          >
            <img
              className={styles.illustration}
              src="/assets/img/me.png"
              alt="my-image"
              width={300}
              height={250}
            />
          </motion.div>
          <div className={styles.textContainer}>
            <Reveal>
              <p className={styles.aboutBigText}>
                I'm a recent graduate from Ecole Polytechnique de Sousse,
                Tunisia, with a computer engineering degree.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                I graduated in 2023 from Ecole Polytechnique de Sousse as a
                proud computer engineering engineer. During my time there, I
                dove headfirst into the tech world. From solving coding
                challenges at odd hours to unraveling the mysteries of data
                structures and algorithms, my nights were often a blend of
                caffeine and code.
              </p>
              <p className={styles.aboutText}>
                But hey, it's not all about the textbooks! I'm genuinely
                passionate about finding solutions to real-world problems. As I
                step into the exciting world of tech, I'm pumped to bring my
                skills to the table.
              </p>
              <p className={styles.aboutText}>
                Thanks for stopping by and getting to know a bit about me.
                Here's to the adventures ahead!
              </p>
            </Reveal>
            <Reveal>
              <div className={styles.diplomaLinkWrapper}>
                <div className={styles.diplomaLink}>
                  <span onClick={() => window.open("/Diplome.pdf")}>
                    Check My Diploma
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
