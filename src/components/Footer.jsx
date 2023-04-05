import React from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "next-share";
const Footer = () => {
  return (
    <div className="bg-black-200 rounded-t-lg w-full  p-6 flex flex-col  gap-6">
      <div className="flex flex-col w-3/12 h-full">
        <img src="/logo-1.svg" className=" w-full h-full " alt="" />
      </div>
      <div className=" flex flex-col gap-4 justify-end w-full items-center">
        <div className="flex gap-4 justify-center">
          <a
            className="text-blue-900"
            href="https://web.facebook.com/paul.ambrose.9085"
            rel="no-referrer"
            target="_blank"
          >
            <FacebookIcon round size={32} />
          </a>
          <a
            className="text-blue-900"
            href="https://twitter.com/i_am_ugo_"
            rel="no-referrer"
            target="_blank"
          >
            <TwitterIcon round size={32} />
          </a>
          <a
            className="text-blue-900"
            href="https://www.linkedin.com/in/ikegbulam-ugochukwu-b62b53258/"
            rel="no-referrer"
            target="_blank"
          >
            <LinkedinIcon round size={32} />
          </a>
          <a
            className="text-blue-900"
            href="https://github.com/ugochukwudev"
            rel="no-referrer"
            target="_blank"
          >
            <img src="/github.svg" alt="github" className="w-[32px]" />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <p> &#169; Ugochukwu Paul</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
