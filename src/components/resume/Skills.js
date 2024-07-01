import React from 'react'
import { motion } from 'framer-motion';
import { mobileSkillsData, webSkillsData } from '../../data/Data';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Web Skill</h2>
        </div>
        <div className='className="mt-14 w-full flex flex-col gap-6'>
          {webSkillsData.map((webSkill) =>
            <div key={webSkill.key} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{webSkill.text}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: webSkill.percentage }}
                >
                  <span className="absolute -top-7 right-0">{webSkill.percentage}</span>
                </motion.span>
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Mobile Skill</h2>
        </div>
        <div className="flex flex-col gap-6">
          {mobileSkillsData.map((mobileSkill) =>
            <div key={mobileSkill.key} className="overflow-x-hidden">
              <p className="text-sm uppercase font-medium">{mobileSkill.text}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: mobileSkill.percentage }}
                >
                  <span className="absolute -top-7 right-0">{mobileSkill.percentage}</span>
                </motion.span>
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills