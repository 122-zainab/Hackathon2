
import React from "react";
import { LuPhone } from "react-icons/lu";
import { BiMessage } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="w-full h-auto bg-[#252B42] flex flex-wrap items-center justify-between px-4 py-2 lg:h-[46px] lg:px-[24px]">
      {/* Contact Info */}
      <div className="flex flex-wrap items-center text-[#FFFFFF] gap-2 sm:gap-4 lg:gap-6">
        <LuPhone className="w-[16px] h-[16px]" />
        <h6 className="font-[700] text-[12px] sm:text-[14px] leading-[20px]">
          (225) 555-0118
        </h6>
        <div className="flex items-center gap-2 sm:gap-[5px]">
          <BiMessage className="w-[16px] h-[16px]" />
          <h6 className="font-[700] text-[12px] sm:text-[14px] leading-[20px]">
            michelle.rivera@example.com
          </h6>
        </div>
      </div>

      {/* Follow Us Text */}
      <div className="hidden lg:flex items-center text-[#FFFFFF] font-[700] text-[12px] sm:text-[14px]">
        <h6>Follow Us and get a chance to win 80% off</h6>
      </div>

      {/* Social Icons */}
      <div className="flex flex-wrap items-center text-[#FFFFFF] gap-2 sm:gap-3">
        <h6 className="font-[700] text-[12px] sm:text-[14px]">Follow Us:</h6>
        <IoLogoInstagram className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
        <FiYoutube className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
        <FaFacebook className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
        <FaTwitterSquare className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" />
      </div>
    </div>
  );
};

export default TopHeader;


