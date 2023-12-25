import {FC, MouseEventHandler, ReactNode} from "react";
import styles from "./button.module.css"
type Props ={
    children: string | ReactNode,
    onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<Props> = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={styles.button}>{children}</button>
    );
};
