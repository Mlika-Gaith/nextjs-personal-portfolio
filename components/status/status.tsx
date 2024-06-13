import { useState } from "react";
import styles from "./status.module.css";

type Props = {};

const Status = (props: Props) => {
  const [hover, setHovered] = useState(false);
  return (
    <div className={styles.statusContainer}>
      {/* Your status emoji */}
      <div
        role="img"
        aria-label="status-emoji"
        className={`
          ${styles.statusEmoji} ${hover ? "hidden" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        💭
      </div>
      <div
        role="img"
        aria-label="status-emoji"
        className={`${styles.statusText} ${hover ? "flex" : "hidden"}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
      >
        Currently working on an e-commerce project
      </div>
    </div>
  );
};

export default Status;
