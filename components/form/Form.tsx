import styles from "./form.module.css"
import {MdEmail} from "react-icons/md";

export const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="email"
                       className={styles.formLabel}>
                    Your Email
                </label>
                <input
                    name="email"
                    type="email"
                    id="email"
                    required
                    className={styles.formInput}
                    placeholder='john.doe@domain.com'
                />
            </div>
            <div className={styles.formGroup}>
                <label
                    htmlFor="subject"
                    className={styles.formLabel}>
                    Subject
                </label>
                <input
                    name="subject"
                    type="text"
                    id="subject"
                    required
                    className={styles.formInput}
                    placeholder='Just saying Hello'
                />
            </div>
            <div className={styles.formGroup}>
                <label
                    htmlFor="message"
                    className={styles.formLabel}>
                    Message
                </label>
                <textarea
                    name="message"
                    id="message"
                    required
                    className={styles.formInput}
                    placeholder='Wanted to discuss...'
                />
            </div>
            <button type="submit"
            className={styles.formBtn}>
                <MdEmail size="2.2rem"/>
                Send Email
            </button>
        </form>
    );
};
