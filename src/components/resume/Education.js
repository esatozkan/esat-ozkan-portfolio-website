import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';
import { educationData, jobExperienceData } from '../../data/Data';

const Education = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
        >
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2015 - 2024</p>
                    <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    {educationData.map((education) => (
                        <ResumeCard
                            key={education.key}
                            title={education.title}
                            subTitle={education.subTitle}
                            date={education.date}
                            des={education.des}
                        />
                    ))}
                </div>
            </div>
            <div>
                <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
                    <p className="text-sm text-designColor tracking-[4px]">2018 - </p>
                    <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
                </div>
                <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
                    {jobExperienceData.map((education) => (
                        <ResumeCard
                            key={education.key}
                            title={education.title}
                            subTitle={education.subTitle}
                            date={education.date}
                            des={education.des}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default Education