import { FC, useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import Image from "next/image";
import { Reveal } from "@utils";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { AiOutlineExport } from "react-icons/ai";
import { Modal } from "@components/modal/modal";
import styles from "./project.module.css";

type Props = {
  modalContent: JSX.Element;
  description: string;
  projectLiveDemoLink: string;
  projectThumbnail: string;
  technologies: string[];
  title: string;
  projectRepoLink: string;
  techChips: JSX.Element[];
  liveDemo: boolean;
};

export const Project: FC<Props> = ({
  modalContent,
  description,
  projectLiveDemoLink,
  projectThumbnail,
  technologies,
  title,
  projectRepoLink,
  techChips,
  liveDemo,
}) => {
  const [hovered, setHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  return (
    <>
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 0.75 }}
      >
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setIsOpen(true)}
          className={styles.project}
        >
          <Image
            priority
            src={projectThumbnail}
            alt={`an image of the ${title} project`}
            width={500}
            height={180}
            className={styles.projectImage}
            style={{
              width: hovered ? "90% !important" : "85% !important",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className={styles.projectWrapper}>
          <Reveal width="100%">
            <div className={styles.projectTitleWrapper}>
              <h4
                className={styles.projectTitle}
                style={{ maxWidth: "calc(100%-150px)" }}
              >
                {title}
              </h4>
              <div className={styles.projectTitleLine} />
              <Link
                href={projectRepoLink}
                target="_blank"
                rel="nofollow"
                className={styles.projectRepoLink}
              >
                <FiGithub size="2.8rem" />
              </Link>
              {liveDemo && (
                <Link
                  href={projectLiveDemoLink}
                  target="_blank"
                  rel="nofollow"
                  className={styles.projectLiveLink}
                >
                  <AiOutlineExport size="2.8rem" />
                </Link>
              )}
            </div>
          </Reveal>

          <Reveal>
            <div className={styles.projectTechnologies}>
              {technologies.join("-")}
            </div>
          </Reveal>

          <Reveal>
            <p className={styles.projectDescription}>
              {description} <br />
              <span
                onClick={() => setIsOpen(true)}
                className={styles.projectLearnMore}
              >
                Learn more {">"}
              </span>
            </p>
          </Reveal>
        </div>
      </motion.div>
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={title}
        projectThumbnail={projectThumbnail}
        projectRepoLink={projectRepoLink}
        projectLiveDemoLink={projectLiveDemoLink}
        modalContent={modalContent}
        techChips={techChips}
        liveDemo={liveDemo}
      />
    </>
  );
};
