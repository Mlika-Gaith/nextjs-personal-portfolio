import React from "react";
import { SectionHeader } from "@utils";
import CertificationItem from "./certification-item";
import styles from "./certification.module.css";
type Props = {};

const Certificates = (props: Props) => {
  return (
    <section className="section-wrapper" id="certificates">
      <SectionHeader title="Certifs" direction="right" />
      <div className={styles.certifications}>
        <CertificationItem />
        <CertificationItem />
        <CertificationItem />
        <CertificationItem />
      </div>
    </section>
  );
};

export default Certificates;
