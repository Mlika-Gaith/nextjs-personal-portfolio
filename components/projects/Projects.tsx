import { SectionHeader } from "@utils";
import styles from "./projects.module.css";
import { Project } from "@components/project/Project";
import { projects } from "./projectsData";
export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" direction="left" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[3.2rem]">
        {projects.map((project) => {
          return (
            <Project
              key={project.title}
              modalContent={project.modalContent}
              description={project.description}
              projectLiveDemoLink={project.projectLiveDemoLink}
              projectThumbnail={project.projectThumbnail}
              technologies={project.technologies}
              techChips={project.techChips}
              liveDemo={project.liveDemo}
              title={project.title}
              projectRepoLink={project.projectRepoLink}
            />
          );
        })}
      </div>
    </section>
  );
};
