import styles from "./chip.module.css";
import {FC, ReactNode} from "react";

type Props = {
    icon: ReactNode,
    title: string,
}
export const Chip: FC<Props> = ({icon, title}) => {
    return (
        <span className={styles.chip}>
           {icon} {title}
        </span>
    );
};
