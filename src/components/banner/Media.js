import React from 'react'
import { FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa"
import { SiFlutter, SiFirebase, SiCanva } from "react-icons/si"
const Media = () => {
    return (
        <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                </h2>
                <div className="flex gap-4">
                    <span onClick={() => { window.open('https://www.instagram.com/esatozkn/?theme=dark', '_blank'); }} className="bannerIcon">
                        <FaInstagram />
                    </span>
                    <span onClick={() => { window.open('https://www.linkedin.com/in/esat-%C3%B6zkan-05b3821b8/', '_blank'); }} className="bannerIcon">
                        <FaLinkedinIn />
                    </span>
                </div>
            </div>
            <div>
                <h2 className="text-base uppercase font-titleFont mb-4">
                    BEST SKILL ON
                </h2>
                <div className="flex gap-4">
                    <span className='bannerIcon'>
                        <FaReact />
                    </span>
                    <span className='bannerIcon'>
                        <SiFlutter />
                    </span>
                    <span className='bannerIcon'>
                        <SiFirebase />
                    </span>
                    <span className='bannerIcon'>
                        <SiCanva />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Media