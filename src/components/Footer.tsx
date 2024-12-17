







import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-[1349] absolute mt-[1600]">
      <footer className="bg-white p-10 font-montserrat">
        <div className="w-[1150]">



          {/* Top */}

          <div className="w-[1300] flex flex-col md:flex-row justify-between items-center bg-gray-100 p-5 md:p-8 md:h-[142px]">
            {/* Name of logo*/}
            <div>
              <h3 className=" text-2xl font-bold text-[#252B42] tracking-wide">
                Bandage
              </h3>
            </div>
         

         {/* Icons */}
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-[#0066FF] text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-[#0066FF] text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-[#0066FF] text-xl">
                <FaTwitter />
              </a>
            </div>
          </div>

        
          <div className="w-full h-px bg-gray-300 my-10"></div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-10">


            {/* Company's Info */}
            <div>
              <h4 className="text-lg font-bold text-[#252B42] mb-4">
                Company Info
              </h4>
              <ul className="space-y-2 text-gray-500 font-semibold">
                <li>About Us</li>
                <li>Career</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>

            
            <div>
              <h4 className="text-lg font-bold text-[#252B42] mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-500 font-semibold">
                <li>About Us</li>
                <li>Career</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>

            
            <div>
              <h4 className="text-lg font-bold text-[#252B42] mb-4">
                Features
              </h4>
              <ul className="space-y-2 text-gray-500 font-semibold">
                <li>Business Marketing</li>
                <li>User Analytics</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>

            
            <div>
              <h4 className="text-lg font-bold text-[#252B42] mb-4">
                Resources
              </h4>
              <ul className="space-y-2 text-gray-500 font-semibold">
                <li>iOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>

          
            <div>
              <h4 className="text-lg font-bold text-[#252B42] mb-4">
                Get in Touch
              </h4>
              <form className="flex flex-col sm:flex-row items-center">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-3 mb-4 sm:mb-0 sm:mr-4 w-full sm:w-auto border border-gray-300 rounded-md font-semibold"
                />
                <button
                  type="submit"
                  className="bg-[#0066FF] text-white p-3 rounded-md w-full sm:w-auto font-semibold"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4 font-semibold">
                Lore imp sum dolor Amit
              </p>
            </div>
          </div>

          
          <div className="absolute justify-start  text-center text-gray-500 text-sm font-semibold">
            Made With Love By Finland All Right Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
