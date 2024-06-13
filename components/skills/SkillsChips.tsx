import styles from "./skillsChips.module.css"
import {Reveal} from "@utils";
import {FaCode} from "@node_modules/react-icons/fa6";
import {
    BiLogoTypescript,
    BiLogoJava,
    BiLogoJavascript,
    BiLogoPython,
    BiLogoReact,
    BiLogoSpringBoot,
    BiLogoDocker,
    BiLogoGit,
} from "react-icons/bi";
import {Chip} from "@components/chips/Chip";
import {TbBrandNextjs} from "react-icons/tb";
import {SiFastapi, SiPostgresql, SiMongodb, SiFuturelearn, SiExpress, SiPytorch, SiTensorflow} from "react-icons/si";
import {AiOutlineRobot} from "react-icons/ai";
import Image from "next/image";
import HuggingFace from "@public/assets/huggingface.svg";

export const SkillsChips = () => {
    return (
        <div className={styles.skillsChips}>
            <Reveal>
                <div className={styles.chipsColumn}>
                    <h4 className={styles.chipColumnTitleWrapper}>
                        <FaCode size="2.8rem" color="#A4161A"/>
                        <span className={styles.chipColumnTitle}>Capabilities</span>
                    </h4>
                    <div className={styles.chipsGrid}>
                        <Chip icon={<BiLogoJavascript size="2.6rem" color="#F7DF1E"/>}
                              title="Javascript"/>
                        <Chip icon={<BiLogoTypescript size="2.6rem" color="#2F74C0"/>}
                              title="Typescript"/>
                        <Chip icon={<BiLogoJava size="2.6rem" color="#EC2025"/>}
                              title="Java"/>
                        <Chip icon={<BiLogoPython size="2.6rem" color="#366C9C"/>}
                              title="Python"/>
                        <Chip icon={<BiLogoReact size="2.6rem" color="#66DBFB"/>}
                              title="React.js"/>
                        <Chip icon={<BiLogoReact size="2.6rem" color="#66DBFB"/>}
                              title="React Native"/>
                        <Chip icon={<BiLogoSpringBoot size="2.6rem" color="#6CB33E"/>}
                              title="Spring Boot"/>
                        <Chip icon={<TbBrandNextjs size="2.6rem" color="#000000"/>}
                              title="Next.js"/>
                        <Chip icon={<SiExpress size="2.6rem" color="#fff"/>}
                              title="Express.js"/>
                        <Chip icon={<SiFastapi size="2.2rem" color="#089D8E"/>}
                              title="FastAPI"/>
                        <Chip icon={<SiPostgresql size="2.2rem" color="#396C94"/>}
                              title="PostgreSQL"/>
                        <Chip icon={<SiMongodb size="2.2rem" color="#199555"/>}
                              title="MongoDB"/>
                        <Chip icon={<BiLogoDocker size="2.6rem" color="#1D60E7"/>}
                              title="Docker"/>
                        <Chip icon={<BiLogoGit size="2.6rem" color="#F05639"/>}
                              title="Git"/>
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <div className={styles.chipsColumn}>
                    <h4 className={styles.chipColumnTitleWrapper}>
                        <FaCode size="2.8rem" color="#A4161A"/>
                        <span className={styles.chipColumnTitle}>Progressing Skills</span>
                    </h4>
                    <div className={styles.chipsGrid}>
                        <Chip icon={<SiTensorflow size="2.2rem" color="#FF9200"/>} title="Tensorflow"/>
                        <Chip icon={<SiPytorch size="2.2rem" color="#EF5233"/>} title="Pytorch"/>
                        <Chip icon={<Image src={HuggingFace} alt="Hugging Face" height={26} width={26}/>}
                              title="LayoutLMV3"/>
                    </div>
                </div>
            </Reveal>
        </div>
    );
};
