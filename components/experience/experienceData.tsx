import {BiLogoReact} from "react-icons/bi";
import {Chip} from "@components/chips/Chip";
import {SiFastapi, SiPytorch, SiExpress, SiMongodb, SiPostgresql, SiTensorflow} from "react-icons/si";
import {BiLogoJavascript, BiLogoPython, BiLogoGit, BiLogoGoogle, BiLogoGithub, BiLogoGitlab} from "react-icons/bi";
import HuggingFace from "@public/assets/huggingface.svg"
import Image from "next/image";

export const experiences = [
    {
        id: 1,
        title: "Mobile Development & Language Model Intern",
        company: "GPRO Consulting",
        time: "Feb 2023 - June 2023",
        location: "Sousse, Tunisia",
        description: "Develop an intelligent mobile app for an industrial company, " +
            "enabling the recognition, classification, " +
            "and extraction of relevant data from packing documents.",
        technologies :[
            <Chip icon={<BiLogoJavascript size="2.6rem" color="#F7DF1E"/>}
                  title="Javascript"/>,
            <Chip icon={<BiLogoPython size="2.6rem" color="#366C9C"/>}
                  title="Python"/>,
            <Chip icon={<BiLogoReact size="2.6rem" color="#66DBFB"/>}
                  title="React Native"/>,
            <Chip icon={<SiFastapi size="2.2rem" color="#089D8E"/>}
                  title="FastAPI"/>,
            <Chip icon={<SiPytorch size="2.2rem" color="#EF5233"/>}
                  title="Pytorch"/>,
            <Chip icon={<SiTensorflow size="2.2rem" color="#FF9200"/>}
                  title="Tensorflow"/>,
            <Chip icon={<Image src={HuggingFace} alt="Hugging Face"
                               height={26}
                               width={26}/>}
                  title="LayoutLMV3"/>,
            <Chip icon={<SiPostgresql size="2.2rem" color="#396C94"/>}
                  title="PostgreSQL"/>,
            <Chip icon={<BiLogoGit size="2.6rem" color="#F05639"/>}
                  title="Git"/>,
            <Chip icon={<BiLogoGithub size="2.6rem" color="#000"/>}
                  title="Gitub"/>,
            <Chip icon={<BiLogoGitlab size="2.6rem" color="#FC7016"/>}
                  title="Gitlab"/>,
            <Chip icon={<Image src={HuggingFace} alt="Hugging Face" height={26} width={26}/>}
                  title="HuggingFace Hub"/>,
        ]
    },
    {
        id: 2,
        title: "Mobile & Full-Stack Development Intern",
        company: "GPRO Consulting",
        time: "July 2022 - Sept 2022",
        location:"Sousse, Tunisia",
        description:"Develop a smart mobile app focused on energy tracking and cost estimation.",
        technologies:[
            <Chip icon={<BiLogoJavascript size="2.6rem" color="#F7DF1E"/>}
                  title="Javascript"/>,
            <Chip icon={<BiLogoReact size="2.6rem" color="#66DBFB"/>}
                  title="React Native"/>,
            <Chip icon={<SiExpress size="2.6rem" color="#fff"/>}
                  title="Express.js"/>,
            <Chip icon={<SiMongodb size="2.2rem" color="#199555"/>}
                  title="MongoDB"/>,
            <Chip icon={<BiLogoGoogle size="2.2rem" color="#E44432"/>}
                  title="Google Vision API"/>,
            <Chip icon={<BiLogoGit size="2.6rem" color="#F05639"/>}
                  title="Git"/>,
            <Chip icon={<BiLogoGithub size="2.6rem" color="#000"/>}
                  title="Gitub"/>,
        ]
    }
]