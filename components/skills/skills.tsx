import { Reveal, SectionHeader } from "@utils";
import { SkillsLinks } from "@components/links";
import { SkillsChips } from "@components/skills/skills-chip";
import styles from "./skills.module.css";
import { TbArrowWaveRightUp } from "react-icons/tb";

export const Skills = () => {
  return (
    <section id="skills" className="section-wrapper">
      <SectionHeader title="Skills" direction="right" />
      <div className={styles.skills}>
        <div>
          <Reveal>
            <p className={styles.text}>
              During my university coursework in software engineering, I
              explored diverse technologies and frameworks. These valuable tools
              have served as trusty allies, empowering me to develop a wide
              range of both academic and personal projects.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.text}>
              My skills revolve mainly around web development. Here, I mainly
              use languages like JavaScript, TypeScript, Java, and Python. When
              it comes to frontend development, my framework of choice is
              React.js. Since the create-react-app isn't the go-to anymore, I've
              been getting more and more familiar with Next.js. For backend
              development, I use Node.js and TypeScript because they're as
              reliable as a backend dev saying, "It works on my machine." But
              for better practices and more structured code, I also turn to Java
              and Spring Boot.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.text}>
              But my skills are not limited to the web. I am also able to create
              engaging mobile applications with React Native, where I blend
              functionality and aesthetics with ease. Furthermore, While I have
              prior experience with machine learning, I am continually expanding
              my knowledge and honing my skills in this domain.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.text}>
              Please feel free to explore my GitHub and GitLab profiles below to
              review some of my showcased projects (I am more active on Github
              &#128513;).
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.projectLinkWrapper}>
              <div className={styles.projectLink}>
                <span>Check Projects</span>
                <TbArrowWaveRightUp className="w-10 h-10" />
              </div>
              <SkillsLinks />
            </div>
          </Reveal>
        </div>
        <SkillsChips />
      </div>
    </section>
  );
};
