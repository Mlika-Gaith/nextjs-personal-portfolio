import {FC,MouseEventHandler, ReactNode} from "react";
import styles from "./outlineBtn.module.css";

type Props = {
    children: string | ReactNode;
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const OutlineBtn:FC<Props> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={styles.outlineBtn}>{children}</button>
    );
};
