import styles from "./laptopHero.module.css";
import {useState} from "react";
import {useIntersectionObserver} from "@hooks";
const hero = {
    topLine: "GHAITH MLIKA",
    headline: "Software Engineer",
    description: "I genuinely appreciate your visit to my portfolio. " +
        "It's encouraging to know that you're interested in my work and journey.",
    buttonLabel1: "See my Skills",
    buttonLabel2: "Go to Projects",
}
export const LaptopHero = () => {
    const [selected, setSelected] = useState("");
    const selectedFromObserver = useIntersectionObserver();
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroWrapper}>
                <p className={styles.topLine}>{hero.topLine}</p>
                <p className={styles.heading}>{hero.headline}</p>
                <p className={styles.subtitle}>{hero.description}</p>
                <div className={styles.heroBtnWrap}>
                    <a className={`${styles.heroBtn} ${styles.heroBtn1}`}
                       href="#skills"
                       onClick={()=> setSelected("skills")}>
                        {hero.buttonLabel1}
                    </a>
                    <a className={`${styles.heroBtn} ${styles.heroBtn2}`}
                    href="#projects"
                    onClick={()=> setSelected("projects")}>
                        {hero.buttonLabel2}
                    </a>
                </div>
            </div>
        </div>
    )
        ;
};
