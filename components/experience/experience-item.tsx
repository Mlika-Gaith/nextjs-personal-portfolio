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
          <span className={styles.title}>{title}</span>
        </Reveal>
        <Reveal>
          <span className={styles.date}>{time}</span>
        </Reveal>
      </div>

      <div className={styles.heading}>
        <Reveal>
          <span className={styles.company}>{company}</span>
          <Image
            src="/assets/svg/line.svg"
            width={50}
            height={50}
            alt="line"
            className={styles.line}
          />
        </Reveal>
        <Reveal>
          <span className={styles.location}>{location}</span>
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
