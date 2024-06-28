import { FC } from "react";
import { SectionHeader } from "@utils";
import CertificationItem from "./certification-item";
import styles from "./certification.module.css";
import { certificates } from "@/constants/certificates";

type Certification = {
  id: string;
  title: string;
  owner: string;
  description: string;
  date: string;
  link: string;
};

type Props = {};

const Certificates: FC<Props> = () => {
  return (
    <section className="section-wrapper" id="certificates">
      <SectionHeader title="Certificates" direction="right" />
      <div className={styles.certifications}>
        {certificates.map((certification: Certification) => (
          <CertificationItem
            key={certification.id}
            title={certification.title}
            owner={certification.owner}
            description={certification.description}
            date={certification.date}
            link={certification.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
