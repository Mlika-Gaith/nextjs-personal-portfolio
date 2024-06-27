import { FC, useEffect, useRef, useState } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
import styles from "./project.module.css";
import Image from "next/image";
import { Reveal } from "@utils";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { AiOutlineExport } from "react-icons/ai";
import { Modal } from "@components/modal/Modal";

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
          className="w-full bg-background-light cursor-pointer relative aspect-[16/9] rounded-xl overflow-hidden"
        >
          <Image
            priority
            src={projectThumbnail}
            alt={`an image of the ${title} project`}
            width={500}
            height={180}
            className="w-[85%] h-[90%] absolute bottom-0 left-1/2 rounded-[0.4rem] transition-all delay-300 translate-y-[10%] translate-x-[-50%]"
            style={{
              width: hovered ? "90% !important" : "85% !important",
              rotate: hovered ? "2deg" : "0deg",
            }}
          />
        </div>
        <div className="my-[1.6rem] mx-0">
          <Reveal width="100%">
            <div className="flex items-center gap-[1.2rem]">
              <h4
                className="font-bold text-md flex-shrink-0"
                style={{ maxWidth: "calc(100%-150px)" }}
              >
                {title}
              </h4>
              <div className="w-full bg-default h-[1px] opacity-40;" />
              <Link
                href={projectRepoLink}
                target="_blank"
                rel="nofollow"
                className="opacity-75 transition-opacity duration-200 text-brand hover:opacity-100"
              >
                <FiGithub size="2.8rem" />
              </Link>
              {liveDemo && (
                <Link
                  href={projectLiveDemoLink}
                  target="_blank"
                  rel="nofollow"
                  className={styles.projectLinks}
                >
                  <AiOutlineExport size="2.8rem" />
                </Link>
              )}
            </div>
          </Reveal>

          <Reveal>
            <div
              className="flex flex-wrap gap-[1.2rem] text-xs
    text-brand my-[0.8rem] mx-0"
            >
              {technologies.join("-")}
            </div>
          </Reveal>

          <Reveal>
            <p className="font-light">
              {description} <br />
              <span
                onClick={() => setIsOpen(true)}
                className="inline-block text-xs font-normal text-brand
    cursor-pointer mt-[2.5rem] hover:decoration-1 hover:underline hover:underline-offset-4"
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
