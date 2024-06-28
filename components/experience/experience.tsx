import { SectionHeader } from "@utils";
import { experiences } from "@constants/experiences";
import { ExpItem } from "@components/experience/experience-item";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Exp" direction="right" />
      {experiences.map((experience) => (
        <ExpItem key={experience.title} {...experience} />
      ))}
    </section>
  );
};
