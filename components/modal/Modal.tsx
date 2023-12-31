import React, {FC, useEffect} from "react";
import styles from "./modal.module.css";
import {MdOutlineClose} from "react-icons/md";
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {FiGithub} from "react-icons/fi";
import {AiOutlineExport} from "react-icons/ai";
import {createPortal} from "react-dom";

type Props ={
    isOpen: boolean,
    setIsOpen: Function,
    title: string,
    projectThumbnail: string,
    projectRepoLink: string,
    projectLiveDemoLink: string,
    technologies: string[],
    modalContent: JSX.Element,
}
export const Modal: FC<Props> = ({isOpen,
                                     setIsOpen,
                                     title,
                                     projectThumbnail,
                                     projectRepoLink,
                                     projectLiveDemoLink,
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
    if (!isOpen) return <></>;
    const content  = (
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
                    src={projectThumbnail}
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
                            Project Links <span
                            className={styles.linksTextDot}>.</span>
                        </p>
                        <div className={styles.links}>
                            <Link href={projectRepoLink}
                                  target="_blank" rel="nofollow"
                                  className={styles.projectLink}>
                                <FiGithub/> source code
                            </Link>
                            <Link href={projectLiveDemoLink}
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

    return createPortal(content, document.getElementById("root"))

};
