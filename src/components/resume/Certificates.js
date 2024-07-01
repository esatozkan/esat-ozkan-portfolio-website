import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { mobileCertificatesData, webCertificatesData } from "../../data/Data";

const Certificates = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2020 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Web Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {webCertificatesData.map((webCertificate) => (
            <ResumeCard
              key={webCertificate.key}
              title={webCertificate.title}
              subTitle={webCertificate.subTitle}
              date={webCertificate.date}
              des={webCertificate.des}
            />
          ))}
        </div>
      </div>

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Mobile Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          {mobileCertificatesData.map((mobileCertificate) => (
            <ResumeCard
              key={mobileCertificate.key}
              title={mobileCertificate.title}
              subTitle={mobileCertificate.subTitle}
              date={mobileCertificate.date}
              des={mobileCertificate.des}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Certificates;
