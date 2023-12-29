import styles from "./sectionHeader.module.css"
import {Reveal} from "./Reveal"

type Props ={
    title: string,
    direction?: "left" | "right"
}
export const SectionHeader = ({title, direction="right"}:Props) => {
    return (
        <div className={styles.sectionHeader}
        style={{ flexDirection: direction === "right" ? "row": "row-reverse",}}>
            <div className={styles.line}/>
            <Reveal>
                <h3 className={styles.title}>
                    {title}<span className={styles.titleDot}>.</span>
                </h3>
            </Reveal>
        </div>
    );
};
