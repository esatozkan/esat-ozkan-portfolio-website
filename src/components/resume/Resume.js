import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Certificates from "./Certificates"

const Resume = () => {
    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);
    const [certificatesData, setCertificatesData] = useState(false);
    return (
        <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
            <div className="flex justify-center items-center text-center">
                <Title title="4+ YEARS OF EXPERIENCE" des="My Resume" />
            </div>
            <div>
                <ul className="w-full grid grid-cols-1 xl:grid-cols-3">
                    <li
                        onClick={() =>
                            setEducationData(true) &
                            setSkillData(false) &
                            setCertificatesData(false)
                        }
                        className={`${educationData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >
                        Education
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(true) &
                            setCertificatesData(false)
                        }
                        className={`${skillData ? "border-designColor rounded-lg" : "border-transparent"
                            } resumeLi`}
                    >
                        Professional Skills
                    </li>
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(false) &
                            setCertificatesData(true)
                        }
                        className={`${certificatesData
                            ? "border-designColor rounded-lg"
                            : "border-transparent"
                            } resumeLi`}
                    >
                        Certificates
                    </li>
                </ul>
            </div>
            {educationData && <Education />}
            {skillData && <Skills />}
            {certificatesData && <Certificates />}

        </section>
    );
}

export default Resume
