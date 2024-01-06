import styles from "./contact.module.css"
import {Reveal} from "@utils";
import Link from "next/link";
import {Form} from "@components/form/Form";
export const Contact = () => {
    return (
        <section className="section-wrapper" id="contact">
            <div className={styles.contactWrapper}>
                <Reveal width="100%">
                    <h4 className={styles.contactTitle}>
                        Contact<span className={styles.contactTitleDot}>.</span>
                    </h4>
                </Reveal>
                <Reveal width="100%">
                    <p className={styles.contactText}>
                        Open to discuss ? Shoot me an email if you want to connect !
                        You can also find me on{' '}
                        <Link href="" target="_blank" rel="nofollow"
                              className={styles.contactLink}>
                            Linkedin
                        </Link>{' '}
                        Or{' '}
                        <Link href="" target="_blank" rel="nofollow"
                              className={styles.contactLink}>
                            Twitter
                        </Link>
                    </p>
                </Reveal>
                <Form/>
            </div>
        </section>
    );
};