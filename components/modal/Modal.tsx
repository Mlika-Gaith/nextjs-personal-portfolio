import React, {FC, ReactDOM, useEffect} from "react";
import styles from "./modal.module.css";
import {MdOutlineClose} from "react-icons/md";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {FiGithub} from "react-icons/fi";
import {AiOutlineExport} from "react-icons/ai";

type Props ={
    isOpen: boolean,
    setIsOpen: Function,
    title: string,
    imgSrc: string,
    code: string,
    projectLink: string,
    technologies: string[],
    modalContent: JSX.Element
}
export const Modal: FC<Props> = ({isOpen,
                                     setIsOpen,
                                     title,
                                     imgSrc,
                                     code,
                                     projectLink,
                                     technologies,
                                     modalContent}) => {
    useEffect(() => {
        const body = document.querySelector("body");
        if (isOpen){
            body!.style.overflowY = "hidden";
        }else{
            body!.style.overflowY = "scroll";
        }
    }, [isOpen]);
    const content =(
        <div className={styles.modal} onClick={()=> setIsOpen(false)}>
            <button className={styles.closeModalBtn}>
                <MdOutlineClose/>
            </button>
            <motion.div
            initial={{y:100, opacity:0}}
            animate={{y:0, opacity:1}}
            onClick={(e) => e.stopPropagation()}
            className={styles.modalCard}>
                <Image
                    priority
                    src={imgSrc}
                    alt={`an image of the ${title} project`}
                    width={500}
                    height={400}
                    className={styles.modalImage}/>

                <div className={styles.modalContent}>
                    <h4 className={styles.projectTitle}>{title}</h4>
                    <div className={styles.modalTech}>
                        {technologies.join('-')}
                    </div>
                    <div className={styles.content}>
                        {modalContent}
                    </div>
                    <div className={styles.modalFooter}>
                        <p className={styles.linksText}>
                            Project Links<span
                            className={styles.linksTextDot}>.</span>
                        </p>
                        <div className={styles.links}>
                            <Link href={code}
                                  target="_blank" rel="nofollow"
                                  className={styles.projectLink}>
                                <FiGithub/> source code
                            </Link>
                            <Link href={projectLink}
                                  target="_blank" rel="nofollow"
                                  className={styles.projectLink}>
                                <AiOutlineExport/> live project
                            </Link>
                        </div>
                    </div>
                </div>

            </motion.div>

        </div>
    )
    if (!isOpen)return <></>
        // @ts-ignore
    return ReactDOM.createPortal(content, document.getElementById("root"));
};
