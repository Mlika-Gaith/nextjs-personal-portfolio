import {SectionHeader} from "@utils";
import {experiences} from "./experienceData";
import {ExpItem} from "@components/experience/ExpItem";

export const Experience = () => {
    return (
        <section className="section-wrapper" id="experience">
            <SectionHeader title="Exp" direction="right" />
            {experiences.map((experience) =>(
                <ExpItem key={experience.title} {...experience}/>
            ))}
        </section>
    );
};
