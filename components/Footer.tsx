"use client"
import React from "react";
import { socialMedia } from "@/data";
import MagicButton from "./ui//MagicButton";
import { IoCopyOutline } from "react-icons/io5";

const Footer = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('chenyuanjian35@gmail.com')
    setCopied(true)
  }
  return (
    <footer className="w-full pt-20 pb-10 h-[100vh] px-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 bottom-[10vh] min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center justify-center min-h-[75vh]">
        <h1 className="heading lg:max-w-[45vw]">
        <span className="text-purple">Reach out</span> to me
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          If you have any queries at all, feel free to reach out, I am glad to answer them.
        </p>

        <MagicButton 
          title={copied ? 'Email copied' : 'Copy my email'}
          icon={<IoCopyOutline />}
          position='left'
          otherClasses="!bg-[#161a31]" 
          handleClick={handleCopy}
        />

      </div>
      <div className="flex mt-16 flex-row justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Even Chen
        </p>

        <div className="flex items-center gap-3 lg:gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              href={info.link}            
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;