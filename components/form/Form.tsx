import styles from "./form.module.css"
import {MdEmail} from "react-icons/md";
import {MutableRefObject, useRef, useState} from "react";
import emailjs from "@emailjs/browser";

export const Form = () => {
    const formRef: MutableRefObject<HTMLFormElement> =
        useRef<HTMLFormElement>(null!);

    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [messageStatus, setMessageStatus] = useState('error');
    const isValidEmail = (email: string) =>{
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return pattern.test(email);
    }
    const handleSubmit = (event: any) =>{
        event.preventDefault();
        const email = event.target.email.value;
        const subject = event.target.subject.value;
        const message = event.target.subject.value;
        if (isValidEmail(email)){
            emailjs
                .sendForm(
                    process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
                    process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
                    formRef.current!,
                    process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
                )
                .then(
                    (result) => {
                        console.log(result.text);
                        if (result.text === 'OK'){
                            setMessage('Message sent. Thank you.');
                            setMessageStatus('success');
                            setShowMessage(true);
                            setTimeout(() => {
                                setShowMessage(false);
                            }, 6000); // Hide the message after 5 seconds
                            formRef.current?.reset();
                        }else{
                            setMessage('Failed to send message.');
                            setMessageStatus('error')
                            setShowMessage(true);
                        }
                    },
                    (error) => {
                        console.log(error.text);
                        setMessage('Failed to send message.');
                        setMessageStatus('error');
                        setShowMessage(true);

                    }
                );

        }
    }
    return (
        <>
            <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
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
                {
                    showMessage && <div className={styles.messageWrapper}>
                    {messageStatus === 'success' ?
                        <p className={`${styles.message} ${styles.messageSuccess}`}>{message}</p> :
                        <p className={`${styles.message} ${styles.messageError}`}>{message}</p>}
                    </div>
                }
            </form>

        </>

    );
};
