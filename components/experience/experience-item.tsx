import React, { FC } from "react";
import styles from "./experience.module.css";
import { Reveal } from "@utils";
import Image from "next/image";
type Props = {
  title: string;
  company: string;
  time: string;
  location: string;
  description: string;
  technologies: JSX.Element[];
};

export const ExpItem: FC<Props> = ({
  title,
  company,
  time,
  location,
  description,
  technologies,
}) => {
  return (
    <div className={styles.expItem}>
      <div className={styles.heading}>
        <Reveal>
          <h1 className={styles.title}>{title}</h1>
        </Reveal>
        <Reveal>
          <p className={styles.date}>{time}</p>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <h3 className={styles.company}>{company}</h3>
          <Image
            src="/assets/svg/line.svg"
            width={50}
            height={50}
            alt="line"
            className={styles.line}
          />
        </Reveal>
        <Reveal>
          <p className={styles.location}>{location}</p>
        </Reveal>
      </div>

      <Reveal>
        <p className={styles.description}>{description}</p>
      </Reveal>
      <Reveal>
        <div className={styles.technologies}>
          {technologies.map((technology: JSX.Element, index) => (
            <div key={index}>{technology}</div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
