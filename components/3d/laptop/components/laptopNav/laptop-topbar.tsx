import styles from "./laptop-topbar.module.css";
import { FC, MouseEventHandler, useState } from "react";

type Props = {
  isOpen: boolean;
  toggle: MouseEventHandler<HTMLDivElement>;
};
export const LaptopTopBar: FC<Props> = ({ isOpen, toggle }) => {
  const [selected, setSelected] = useState("");
  return (
    <aside
      className={styles.topBarWrapper}
      style={{ opacity: isOpen ? "100%" : "0", top: isOpen ? "0" : "-380px" }}
    >
      <div className={styles.closeIconWrapper} onClick={toggle}>
        <p className={styles.closeIcon}>Close</p>
      </div>
      <div className={styles.linksWrapper}>
        <div className={styles.linksMenu}>
          <a
            className={styles.link}
            href="#about"
            onClick={() => setSelected("about")}
          >
            About
          </a>
          <a
            className={styles.link}
            href="#skills"
            onClick={() => setSelected("skills")}
          >
            Skills
          </a>
          <a
            className={styles.link}
            href="#projects"
            onClick={() => setSelected("projects")}
          >
            Projects
          </a>
          <a
            className={styles.link}
            href="#experience"
            onClick={() => setSelected("experience")}
          >
            Experience
          </a>
          <a
            className={styles.link}
            href="#contact"
            onClick={() => setSelected("contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </aside>
  );
};
