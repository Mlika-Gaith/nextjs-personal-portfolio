import React, {FC} from "react";
import styles from "./experience.module.css";
import {Reveal} from "@utils";

type Props = {
    title: string,
    company: string,
    time: string,
    location: string,
    description: string,
    technologies: JSX.Element[]
}

export const ExpItem: FC<Props> = ({
                                       title,
                                       company,
                                       time,
                                       location,
                                       description,
                                       technologies
                                   }) => {
    return (
        <div className={styles.expItem}>
            <div className={styles.heading}>
                <Reveal>
                    <span className={styles.title}>{title}</span>
                </Reveal>
                <Reveal>
                    <span>{time}</span>
                </Reveal>
            </div>

            <div className={styles.heading}>
                <Reveal>
                    <span className={styles.company}>{company}</span>
                </Reveal>
                <Reveal>
                    <span>{location}</span>
                </Reveal>
            </div>

            <Reveal>
                <p className={styles.description}>{description}</p>
            </Reveal>
            <Reveal>
                <div className={styles.technologies}>
                    {technologies.map((technology: JSX.Element) => (
                        <div>
                            {technology}
                        </div>
                    ))}
                </div>
            </Reveal>
        </div>
    );
};
