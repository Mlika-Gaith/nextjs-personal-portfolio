"use client";
import { Reveal, SectionHeader } from "@utils";
import styles from "./about.module.css";
import { motion } from "framer-motion";
import { IoArrowForward } from "react-icons/io5";
export const About = () => {
  return (
    <section id="about" className={`section-wrapper`}>
      <SectionHeader title="About" direction="left" />
      <div className={styles.about}>
        <div className={styles.aboutGrid}>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
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
              <p className={styles.aboutText}>
                Hey there! I'm Ghaith Mlika, and I hail from Tunisia. I've just
                wrapped up my studies in Computer Science at "École
                Polytechnique de Sousse", with a focus on software engineering.
              </p>
            </Reveal>
            <Reveal>
              <p className={styles.aboutText}>
                During my time there, I dived deep into all things tech. From
                coding challenges to exploring the ins and outs of data
                structures and algorithms, I've had my fair share of late-night
                coding sessions! Beyond the code, I've also learned a lot about
                different software development technologies, giving me a
                well-rounded view of the tech landscape.
              </p>
              <p className={styles.aboutText}>
                But hey, it's not all about the textbooks! I'm genuinely
                passionate about finding solutions to real-world problems. As I
                step into the exciting world of tech, I'm pumped to bring my
                skills to the table. I'm all about teamwork, learning from
                others, and pushing boundaries.
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
                  <IoArrowForward />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
