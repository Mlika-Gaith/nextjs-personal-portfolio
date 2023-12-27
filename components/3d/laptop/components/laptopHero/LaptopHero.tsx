import styles from "./laptopHero.module.css";
const hero = {
    topLine: "GHAITH MLIKA",
    headline: "Software Engineer",
    description: "I genuinely appreciate your visit to my portfolio. " +
        "It's encouraging to know that you're interested in my work and journey.",
    buttonLabel1: "See my Skills",
    buttonLabel2: "Go to Projects",
}
export const LaptopHero = () => {
    return (
        <div className={styles.heroContainer}>
            <div className={styles.heroWrapper}>
                <p className={styles.topLine}>{hero.topLine}</p>
                <p className={styles.heading}>{hero.headline}</p>
                <p className={styles.subtitle}>{hero.description}</p>
                <div className={styles.heroBtnWrap}>
                    <button className={`${styles.heroBtn} ${styles.heroBtn1}`}>
                        {hero.buttonLabel1}
                    </button>
                    <button className={`${styles.heroBtn} ${styles.heroBtn2}`}>
                        {hero.buttonLabel2}
                    </button>
                </div>
            </div>
        </div>
    )
        ;
};
