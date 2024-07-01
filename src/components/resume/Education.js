import React from 'react'
import { motion } from "framer-motion"
import ResumeCard from './ResumeCard'

function Education() {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }} className='w-full flex gap-20'>
            <div>
                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2015 - 2024</p>
                    <h2 className='text-4xl font-bold'>Education</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard title="Atılım Anatolian High School" subTitle="Kocaeli/Izmit" date="2015" des="I completed my high school education at Atılım Anatolian High School." />
                    <ResumeCard title="Istanbul University" subTitle="Istanbul/Avcılar" date="2017" des="I studied industrial engineering at Istanbul University" />
                    <ResumeCard title="Marmara University" subTitle="Istanbul/Avcılar" date="2019" des="I studied mechanical engineering at Marmara University" />
                </div>
            </div>
            <div>
                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2020 - 2024</p>
                    <h2 className='text-4xl font-bold'>Job Experience</h2>
                </div>
                <div className='mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10'>
                    <ResumeCard title="Atılım Anatolian High School" subTitle="Kocaeli/Izmit" date="2015" des="I completed my high school education at Atılım Anatolian High School." />
                    <ResumeCard title="Istanbul University" subTitle="Istanbul/Avcılar" date="2017" des="I studied industrial engineering at Istanbul University" />
                    <ResumeCard title="Marmara University" subTitle="Istanbul/Avcılar" date="2019" des="I studied mechanical engineering at Marmara University" />
                </div>
            </div>
        </motion.div>
    )
}

export default Education
