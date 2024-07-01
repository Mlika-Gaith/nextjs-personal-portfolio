import React, { useEffect, useRef } from "react";
import { Reveal } from "@utils";
import Image from "next/image";
import styles from "./game.module.css";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
type Props = {};

export const Game = (props: Props) => {
  const controls = useAnimation();
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
    <section className="section-wrapper" id="game">
      <div className={styles.gameContainer}>
        <Reveal width="100%">
          <h3 className={styles.gameTitle}>
            Game<span className={styles.gameTitleDot}>.</span>
          </h3>
          <Image
            src="/assets/svg/line.svg"
            width={50}
            height={50}
            alt="line"
            className={styles.gameTitleLine}
          />
        </Reveal>
        <Reveal width="100%">
          <p className={styles.gameDescription}>
            I know, I know... reading through a portfolio can be as exciting as
            watching paint dry. But don't worry, I've got just the thing to
            spice it up! 🚀 Dive into some retro gaming nostalgia with my{" "}
            <Link
              href="https://threejs-arkanoid-game.netlify.app/"
              target="_blank"
              className={styles.gameLink}
            >
              Arkanoid inspired game!
            </Link>{" "}
            🎮 Developed using React, Three.js, and React Three Fiber, it's got
            all the classic vibes.
          </p>
        </Reveal>
        <motion.div
          ref={ref}
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={controls}
          transition={{ duration: 0.75 }}
        >
          <div className={styles.gameWrapper}>
            <Link
              href="https://threejs-arkanoid-game.netlify.app/"
              target="_blank"
            >
              <Image
                src="/assets/img/game.png"
                alt="game"
                width={200}
                height={200}
                className={styles.game}
              />
            </Link>
          </div>
        </motion.div>
        <Reveal width="100%">
          <Link
            href="https://github.com/Mlika-Gaith/react-three-fiber-game"
            target="_blank"
            className={styles.gameRepoLink}
          >
            code source
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
