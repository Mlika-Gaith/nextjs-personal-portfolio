import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./outlineBtn.module.css";
import { BsFiletypePdf } from "react-icons/bs";

type Props = {
  children: string | ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const OutlineBtn: FC<Props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.outlineBtn}>
      <BsFiletypePdf size="2.2rem" className={styles.svgBackground} />
      {children}
    </button>
  );
};
