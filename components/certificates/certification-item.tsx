import React, { useState } from "react";
import { PiSignatureThin } from "react-icons/pi";
import { FaCertificate } from "react-icons/fa";
import styles from "./certification-item.module.css";
import Link from "next/link";

type Props = {
  id: string;
  title: string;
  owner: string;
  description: string;
  date: string;
  link: string;
};

const CertificationItem = ({
  id,
  title,
  owner,
  description,
  date,
  link,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Link
      key={id}
      href={link}
      target="_blank"
      className={styles.certificationContainer}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={styles.certification}
        style={{
          transform: `translateY(${hovered ? "0%" : "30%"})`,
        }}
      >
        <div className={styles.certificationBody}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.owner}>{owner}</p>
          <p className={styles.description}>{description}</p>
          <div className={styles.certificationFooter}>
            <p className={styles.date}>{date}</p>
            <PiSignatureThin className={styles.signature} />
            <FaCertificate className={styles.badge} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CertificationItem;
