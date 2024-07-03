import { Reveal } from "@utils";
import { FaCode } from "@node_modules/react-icons/fa6";
import {
  BiLogoTypescript,
  BiLogoJava,
  BiLogoJavascript,
  BiLogoPython,
  BiLogoReact,
  BiLogoSpringBoot,
  BiLogoDocker,
  BiLogoGit,
  BiLogoKubernetes,
  BiLogoFlask,
} from "react-icons/bi";
import { Chip } from "@components/chips/chip";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiTensorflow,
  SiNestjs,
} from "react-icons/si";
import styles from "./skill-chip.module.css";
import Image from "next/image";

export const SkillsChips = () => {
  return (
    <div className="relative">
      <Reveal>
        <div>
          <h4 className={styles.skillChipsWrapper}>
            <span className={styles.skillChipTitle}>Technologies I Use</span>
            <Image
              src="/assets/svg/line.svg"
              width={50}
              height={50}
              alt="line"
              className={styles.line}
            />
          </h4>
          <div className={styles.skillChipGroup}>
            <Chip
              icon={<BiLogoJavascript size="2.6rem" />}
              title="Javascript"
            />
            <Chip
              icon={<BiLogoTypescript size="2.6rem" />}
              title="Typescript"
            />
            <Chip icon={<BiLogoJava size="2.6rem" />} title="Java" />
            <Chip icon={<BiLogoPython size="2.6rem" />} title="Python" />
            <Chip icon={<BiLogoReact size="2.6rem" />} title="React.js" />
            <Chip icon={<BiLogoReact size="2.6rem" />} title="React Native" />
            <Chip
              icon={<BiLogoSpringBoot size="2.6rem" />}
              title="Spring Boot"
            />
            <Chip icon={<TbBrandNextjs size="2.6rem" />} title="Next.js" />
            <Chip icon={<SiExpress size="2.6rem" />} title="Express.js" />
            <Chip icon={<SiFastapi size="2.2rem" />} title="FastAPI" />
            <Chip icon={<SiPostgresql size="2.2rem" />} title="PostgreSQL" />
            <Chip icon={<SiMongodb size="2.2rem" />} title="MongoDB" />
            <Chip icon={<BiLogoDocker size="2.6rem" />} title="Docker" />
            <Chip icon={<BiLogoGit size="2.6rem" />} title="Git" />
            <Chip icon={<SiTensorflow size="2.2rem" />} title="Tensorflow" />
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div>
          <h4 className={styles.skillChipsWrapper}>
            <span className={styles.skillChipTitle}>
              Technologies I want to Learn
            </span>
            <Image
              src="/assets/svg/line.svg"
              width={50}
              height={50}
              alt="line"
              className={styles.line}
            />
          </h4>
          <div className={styles.skillChipGroup}>
            <Chip
              icon={<BiLogoKubernetes size="2.6rem" />}
              title="Kubernetes"
            />
            <Chip icon={<SiNestjs size="2.6rem" />} title="Nest.js" />
            <Chip icon={<BiLogoFlask size="2.6rem" />} title="Flask" />
          </div>
        </div>
      </Reveal>
    </div>
  );
};
