import React from 'react'
import { FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { BsGithub } from 'react-icons/bs'
import contactImg from "../../assets/contactImg.png"

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Esat Özkan</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
          You can contact me 7 days a week
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">esatozkn@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span onClick={() => { window.open('https://www.instagram.com/esatozkn/?theme=dark', '_blank'); }} className="bannerIcon">
            <FaInstagram />
          </span>
          <span onClick={() => { window.open('https://www.linkedin.com/in/esat-%C3%B6zkan-05b3821b8/', '_blank'); }} className="bannerIcon">
            <FaLinkedinIn />
          </span>
          <span onClick={() => { window.open('https://github.com/esatozkan', '_blank'); }} className="bannerIcon">
            <BsGithub />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft