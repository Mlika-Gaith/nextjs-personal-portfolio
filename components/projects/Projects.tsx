import {SectionHeader} from "@utils";
import styles from "./projects.module.css"
import {Project} from "@components/project/Project";
export const Projects = () => {
    return (
        <section className="section-wrapper" id="projects">
            <SectionHeader title="Projects" direction="left"/>
            <div className={styles.projects}>
                {projects.map((project) => {
                    return <Project
                        key={project.title}
                        modalContent={project.modalContent}
                        description={project.description}
                        projectLiveDemoLink={project.projectLiveDemoLink}
                        projectThumbnail={project.projectThumbnail}
                        technologies={project.technologies}
                        title={project.title}
                        projectRepoLink={project.projectRepoLink}/>
                })}
            </div>
        </section>
    );
};

const projects =[
    {
        title: "AI Prompts",
        projectThumbnail: "/assets/img/projects/AiPrompts.png",
        projectRepoLink:"",
        projectLiveDemoLink:"",
        technologies:["Next.js","Express.js","MongoDB"],
        description:"An intuitive app for creating and sharing AI prompts.",
        modalContent:(
            <>
                <p>An individual project I developed to hone my skills in Next.js</p>
                <p>The Technology Stack is based on Next.js,
                    connected to an Express.js backend, with data stored in MongoDB.
                </p>
            </>
        )

    },
    {
        title: "PolyBlog",
        projectThumbnail: "/assets/img/projects/AiPrompts.png",
        projectRepoLink:"https://github.com/Mlika-Gaith/next.js-ai-prompts.git",
        projectLiveDemoLink:"https://next-js-ai-prompts.vercel.app/",
        technologies:["Next.js","Express.js","MongoDB"],
        description:"An intuitive app for creating and sharing AI prompts.",
        modalContent:(
            <>
                <p>An individual project I developed to hone my skills in Next.js</p>
                <p>The Technology Stack is based on Next.js,
                    connected to an Express.js backend, with data stored in MongoDB.
                </p>
            </>
        )

    },
    {
        title: "PolyBlog",
        projectThumbnail: "/assets/img/projects/AiPrompts.png",
        projectRepoLink:"",
        projectLiveDemoLink:"",
        technologies:["Next.js","Express.js","MongoDB"],
        description:"An intuitive app for creating and sharing AI prompts.",
        modalContent:(
            <>
                <p>An individual project I developed to hone my skills in Next.js</p>
                <p>The Technology Stack is based on Next.js,
                    connected to an Express.js backend, with data stored in MongoDB.
                </p>
            </>
        )

    },
]