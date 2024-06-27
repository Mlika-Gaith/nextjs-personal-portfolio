import React, { useState } from "react";
import { PiSignatureThin } from "react-icons/pi";
import { FaCertificate } from "react-icons/fa";
type Props = {};

const CertificationItem = (props: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="w-full bg-background-light cursor-pointer relative aspect-[16/9] rounded-xl overflow-hidden flex justify-center items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="w-[85%] h-full border border-solid border-brand shadow-xl rounded-md p-4 bg-background-dark absolute bottom-0 translate-y-[30%] transition-all duration-300"
        style={{
          transform: `translateY(${hovered ? "-1%" : "30%"})`,
        }}
      >
        <div className="bg-background-dark h-[4px] absolute top-0 left-0 -rotate-45 z-5" />
        <div className="size-full bg-background-dark border gap-y-4 border-solid border-brand z-10 flex flex-col items-center justify-start p-4">
          <h3 className="text-[1.5rem] lg:text-[2.5rem] text-center font-rochester lg:my-2 capitalize">
            MongoDB Java Developer Path
          </h3>
          <p className="underline underline-offset-2 text-brand text-[2rem] lg:text-lg font-extralight capitalize font-rochester">
            Ghaith Mlika
          </p>
          <p className="w-full whitespace-normal text-[0.8rem] lg:text-sm text-center -mb-[0.5rem] lg:mb-[1rem]  font-poppins font-extralight justify-self-center">
            Completed the course of java developer path certificate and earned a
            badge
          </p>
          <div className="relative size-full flex justify-between items-center pb-4">
            <p className="text-[0.8rem] lg:text-sm font-extralight font-rochester">
              Issued Dec, 2023
            </p>
            <PiSignatureThin className="absolute w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] right-[12%] top-0 text-brand -rotate-45" />
            <FaCertificate className="absolute w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] right-[1%] top-0 text-brand -rotate-45" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificationItem;
