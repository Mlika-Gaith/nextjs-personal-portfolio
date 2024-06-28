import React, { useState } from "react";
import { PiSignatureThin } from "react-icons/pi";
import { FaCertificate } from "react-icons/fa";
import styles from "./certification-item.module.css";
type Props = {};

const CertificationItem = (props: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={styles.certificationContainer}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={styles.certification}
        style={{
          transform: `translateY(${hovered ? "-1%" : "30%"})`,
        }}
      >
        <div className={styles.certificationBody}>
          <h3 className={styles.title}>MongoDB Java Developer Path</h3>
          <p className={styles.owner}>Ghaith Mlika</p>
          <p className={styles.description}>
            Completed the course of java developer path certificate and earned a
            badge
          </p>
          <div className={styles.certificationFooter}>
            <p className={styles.date}>Issued Dec, 2023</p>
            <PiSignatureThin className={styles.signature} />
            <FaCertificate className={styles.badge} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationItem;
