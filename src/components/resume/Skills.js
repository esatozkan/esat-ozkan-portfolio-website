import React from 'react'
import { motion } from "framer-motion"

function Skills() {
    return (
        <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: .5 } }}
            className='w-full flex gap-20'>
            <div className='w-1/2'>
                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
                    <h2 className='text-4xl font-bold'>Web Skill</h2>
                </div>
                <div className='mt-14 w-full flex flex-col gap-6'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>HTML 5 - CSS 3</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}

                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Javascript</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}

                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>React</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}

                                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>80%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Tailwindcss</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}

                                className='w-[50%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>50%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
                    <h2 className='text-4xl font-bold'>Mobile Skill</h2>
                </div>
                <div className='mt-14 w-full flex flex-col gap-6'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Dart</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}

                                className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>100%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Flutter</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}

                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>90%</span>
                            </motion.span>
                        </span>
                    </div>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Firebase</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.5 }}

                                className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'>
                                <span className='absolute -top-7 right-0'>70%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills
