import { Reveal, SectionHeader } from "@utils";
import styles from "./skills.module.css";
import { IoArrowForward } from "react-icons/io5";
import { SkillsLinks } from "@components/links";
import { SkillsChips } from "@components/skills/SkillsChips";

export const Skills = () => {
  return (
    <section id="skills" className="section-wrapper">
      <SectionHeader title="Skills" direction="right" />
      <div className={styles.skills}>
        <div>
          <Reveal>
            <p className={styles.skillsText}>
              During my university coursework in software engineering, I
              explored diverse technologies and frameworks. These valuable tools
              have served as trusty allies, empowering me to craft both academic
              and personal projects.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.skillsText}>
              My skills revolve mainly around web development. Here, I mainly
              use languages like JavaScript, TypeScript, Java, and Python. I’ve
              also developed my skills using frontend frameworks like React.js
              and Next.js, while also immersing myself in backend technologies
              like Spring Boot, Express.js and FastAPI. Moreover, I possess some
              experience working with databases such as PostgreSQL and MongoDB.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.skillsText}>
              But my skills are not limited to the web. I am also able to create
              engaging mobile applications with React Native, where I blend
              functionality and aesthetics with ease. Furthermore, While I have
              prior experience with machine learning, I am continually expanding
              my knowledge and honing my skills in this domain.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.skillsText}>
              Please feel free to explore my GitHub and GitLab profiles below to
              review some of my showcased projects (I am more active on Github
              &#128513;).
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>Check Projects</span>
                <IoArrowForward />
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
