import styles from "./form.module.css"
import {MdEmail} from "react-icons/md";
import {MutableRefObject, useRef} from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast, TypeOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ContextClassType = {
    success: string;
    error: string;
    default: string;
};
const contextClass : ContextClassType = {
    success: "bg-background-light",
    error: "bg-red-900",
    default: "bg-background-light"
};
export const Form = () => {
    const formRef: MutableRefObject<HTMLFormElement> =
        useRef<HTMLFormElement>(null!);

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
                            toast('message sent.', {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                            });
                            formRef.current?.reset();
                        }else{
                            toast.error('error sending message.', {
                                position: "bottom-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                            });
                        }
                    },
                    (error) => {
                        console.log(error.text);
                        toast.error('error sending message.', {
                            position: "bottom-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });

                    }
                );

        }
    }
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
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
            </form>
            <ToastContainer
                toastClassName={({ type })  => {
                    // @ts-ignore
                    return contextClass[type || "default"] +
                    " relative flex py-2 px-4 min-h-20 rounded-md " +
                    "justify-between overflow-hidden cursor-pointer"
                }}
                bodyClassName={() => "text-xs font-normal text-default flex flex-row items-center p-3"}
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </>

    );
};
