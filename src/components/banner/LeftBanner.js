import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Full Stack  Developer.", "UI Designer",],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm <span className="text-designColor capitalize">Esat Özkan</span>
                </h1>
                <h2 className="sm:text-2xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    <span className="font-bold">4 years</span> of experience. I enjoy
                    building <span className="italic">sites & apps</span>. My focus is{" "}
                    <span className="underline">React and Flutter</span>.
                </p>
            </div>
            {/* Media */}
            <Media />
        </div>
    );
}

export default LeftBanner