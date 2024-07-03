import { BiLogoReact } from "react-icons/bi";
import { Chip } from "@components/chips/chip";
import {
  SiFastapi,
  SiPytorch,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTensorflow,
} from "react-icons/si";
import {
  BiLogoJavascript,
  BiLogoPython,
  BiLogoGit,
  BiLogoGoogle,
  BiLogoGithub,
  BiLogoGitlab,
} from "react-icons/bi";
import HuggingFace from "@public/assets/svg/huggingface.png";
import Image from "next/image";

export const experiences = [
  {
    id: 1,
    title: "Mobile Development & Language Model Intern",
    company: "GPRO Consulting",
    time: "Feb 2023 - June 2023",
    location: "Sousse, Tunisia",
    description:
      "During my internship at GPRO as a Full Stack and AI Developer, I developed an intelligent mobile application for an industrial client. The application processes, recognizes, and classifies documents, with a primary feature being the recognition and extraction of specific text fields. This functionality greatly facilitated stock management operations for the client.",
    technologies: [
      <Chip icon={<BiLogoJavascript size="2.6rem" />} title="Javascript" />,
      <Chip icon={<BiLogoPython size="2.6rem" />} title="Python" />,
      <Chip icon={<BiLogoReact size="2.6rem" />} title="React Native" />,
      <Chip icon={<SiFastapi size="2.4rem" />} title="FastAPI" />,
      <Chip icon={<SiPytorch size="2.4rem" />} title="Pytorch" />,
      <Chip icon={<SiTensorflow size="2.4rem" />} title="Tensorflow" />,
      <Chip
        icon={
          <Image src={HuggingFace} alt="Hugging Face" height={22} width={22} />
        }
        title="LayoutLMV3"
      />,
      <Chip icon={<SiPostgresql size="2.4rem" />} title="PostgreSQL" />,
      <Chip icon={<BiLogoGit size="2.6rem" />} title="Git" />,
      <Chip icon={<BiLogoGithub size="2.6rem" />} title="Gitub" />,
      <Chip icon={<BiLogoGitlab size="2.4rem" />} title="Gitlab" />,
      <Chip
        icon={
          <Image src={HuggingFace} alt="Hugging Face" height={22} width={22} />
        }
        title="HuggingFace Hub"
      />,
    ],
  },
  {
    id: 2,
    title: "Mobile & Full-Stack Development Intern",
    company: "GPRO Consulting",
    time: "July 2022 - Sept 2022",
    location: "Sousse, Tunisia",
    description:
      "For my first internship, I dove into the remote world—working in pajamas was a given! I developed an intelligent mobile app for tracking electric energy usage and estimating costs. Just snap a picture of your energy monitor, and let the app handle the rest.",
    technologies: [
      <Chip icon={<BiLogoJavascript size="2.6rem" />} title="Javascript" />,
      <Chip icon={<BiLogoReact size="2.6rem" />} title="React Native" />,
      <Chip icon={<SiExpress size="2.4rem" />} title="Express.js" />,
      <Chip icon={<SiMongodb size="2.4rem" />} title="MongoDB" />,
      <Chip icon={<BiLogoGoogle size="2.26rem" />} title="Google Vision API" />,
      <Chip icon={<BiLogoGit size="2.6rem" />} title="Git" />,
      <Chip icon={<BiLogoGithub size="2.6rem" />} title="Gitub" />,
    ],
  },
];
