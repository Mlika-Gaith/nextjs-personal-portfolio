import React from "react";
import { SectionHeader } from "@utils";
import CertificationItem from "./CertificationItem";
type Props = {};

const Certificates = (props: Props) => {
  return (
    <section className="section-wrapper" id="certificates">
      <SectionHeader title="Certifs" direction="right" />
      <div className="size-full grid grid-cols-1 md:grid-cols-2 gap-[3.2rem] items-center">
        <CertificationItem />
        <CertificationItem />
        <CertificationItem />
        <CertificationItem />
      </div>
    </section>
  );
};

export default Certificates;
