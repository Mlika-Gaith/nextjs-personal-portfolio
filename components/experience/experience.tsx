import { SectionHeader } from "@utils";
import { experiences } from "@constants/experiences";
import { ExpItem } from "@components/experience/experience-item";
import { useScreenWidth } from "@hooks";

export const Experience = () => {
  const screen = useScreenWidth();
  const title = screen < 784 ? "Exp" : "Experience";
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title={title} direction="right" />
      {experiences.map((experience) => (
        <ExpItem key={experience.title} {...experience} />
      ))}
    </section>
  );
};
