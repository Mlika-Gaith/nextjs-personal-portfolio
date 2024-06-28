import { useState, FC, useRef, useEffect } from "react";
import { PiSignatureThin } from "react-icons/pi";
import { FaCertificate } from "react-icons/fa";
import styles from "./certification-item.module.css";
import Link from "next/link";
import { useAnimation, useInView, motion } from "framer-motion";

type Props = {
  title: string;
  owner: string;
  description: string;
  date: string;
  link: string;
};

const CertificationItem: FC<Props> = ({
  title,
  owner,
  description,
  date,
  link,
}) => {
  const [hovered, setHovered] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.75 }}
      className={styles.certificationContainer}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link
        href={link}
        target="_blank"
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
      </Link>
    </motion.div>
  );
};

export default CertificationItem;
