import { FC, ReactNode } from "react";
import styles from "./chip.module.css";

type Props = {
  icon: ReactNode;
  title: string;
};
export const Chip: FC<Props> = ({ icon, title }) => {
  return (
    <span className={styles.chip}>
      {icon} {title}
    </span>
  );
};
