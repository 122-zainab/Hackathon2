 "use client";
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
// import Navbar from "../components/navbar2";
import girl from "@/images/hero-2-bg-shape-cover.png";
import videocard from "@/images/videocard.png";
import facebookIcon from "@/images/Vector1.png";
import instagramIcon from "@/images/Vector1.png";
import twittericon from "@/images/Vector2.png";
 import user1 from "@/images/img43.jpg";
import user2 from "@/images/img42.jpg";
import user3 from "@/images/img41.jpg";


import pic1 from "@/images/img45.png";
import pic2 from "@/images/img46.png";
import pic3 from "@/images/img47.png";
import pic4 from "@/images/img48.png";
import pic5 from "@/images/img49.png";
import pic6 from "@/images/img50.png";
import img27 from "@/images/img25.png"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


export default function Navbar() {
  

  return (
    <div className="w-[1250] h-[91px] px-[54px]">
      <nav className="w-[1250] h-[91] flex justify-between items-center">
        {/* Brand Section */}
        <div className="text-[#252B42] font-bold text-[24px] leading-[32px]">
          Bandage
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <ul className="flex space-x-6">
            <li>
              <Link legacyBehavior href="/">
                <a className="font-semibold text-sm text-[#737373]">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="font-semibold text-sm text-[#737373]">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="font-semibold text-sm text-[#737373]">Services</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="font-semibold text-sm text-[#737373]">Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Button Section for Desktop */}
        <div className="hidden md:flex items-center justify-end space-x-8 mt-4">
          {/* Login Link */}
          <Link legacyBehavior href="/login">
            <a className="font-semibold text-sm text-[#23A6F0]">Login</a>
          </Link>

          {/* Become a Member Button */}
          <Link legacyBehavior href="/learn-more">
            <a className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px]">
              Become a Member
              <svg className="w-[12px] h-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10" fill="none" stroke="#FFFFFF">
                <path d="M2 5h8M5 2l3 3-3 3" />
              </svg>
            </a>
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button  className="text-[#252B42]">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {/* { && ( */}
        <div className="md:hidden bg-white shadow-md absolute top-[91px] left-0 right-0 p-4">
          <ul className="space-y-4">
            <li>
              <Link legacyBehavior href="/">
                <a className="font-semibold text-sm text-[#737373]">Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about">
                <a className="font-semibold text-sm text-[#737373]">About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/">
                <a className="font-semibold text-sm text-[#737373]">Services</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/contact">
                <a className="font-semibold text-sm text-[#737373]">Contact</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/login">
                <a className="font-semibold text-sm text-[#23A6F0]">Login</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/learn-more">
                <a className="font-semibold text-sm text-white flex items-center gap-2 px-6 py-3 bg-[#23A6F0] rounded-[5px]">
                  Become a Member
                  <svg className="w-[12px] h-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 10" fill="none" stroke="#FFFFFF">
                    <path d="M2 5h8M5 2l3 3-3 3" />
                  </svg>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        
      




 {/* Hero Section  */}
    
      <div className="relative flex flex-col gap-8">

       {/* First Section */}

<div className="w-[1300] max-w-[1300px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
  <div className="flex flex-col lg:flex-row items-center gap-[30px] w-full lg:w-[1044px] lg:h-[321px]">
 
     {/* Column 1 */}

    <div className="flex flex-col lg:items-start items-center gap-[35px] w-full lg:w-[599px] h-auto lg:h-[321px]">
      <h5 className="text-[14px] sm:text-[14px] lg:w-[149px] font-semibold text-[#252B42] tracking-[0.1px]">
        ABOUT COMPANY
      </h5>
      <h1 className="text-[30px] sm:text-[30px] lg:text-[58px] font-bold text-[#252B42] tracking-[0.2px]">
        ABOUT US
      </h1>
      <h4 className="text-[12px] sm:text-[18px] lg:text-[20px] text-[#737373] w-[200px] lg:w-[376px]">
        We know how large objects will act,<br/> but things on a small scale
      </h4>
      <div className="flex flex-row items-start gap-[10px] w-[195px] h-[52px]">
        <div className="flex flex-col items-center px-[40px] py-[15px] gap-[10px] w-[195px] bg-[#23A6F0] rounded-[5px]">
          <span className="font-bold text-[14px] sm:text-[16px] text-[#FFFFFF] whitespace-nowrap">
            Get Quote Now
          </span>
        </div>
      </div>
    </div>
    
      {/* Column 2 */}
      
      <Image src={girl} alt="girl" className="absolute w-[800]  h-[600] ml-[520] lg:block hidden lg:left-[-1px] top-[300px] lg:top-[0px]" />
          
  </div>
</div>

{/* COntainer Image */}

<div className='relative flex flex-col gap-8'>
<div className="w-[1300] max-w-[1300px] mx-auto flex flex-col items-start lg:gap-[80px] gap-[40px] py-[112px] sm:mb-[50px]">
<div >
 
  <p className='text-[14px] sm:text-[14px] lg:w-[149px] font-semibold text-[#E74040] gap-[30px] '>problems trying</p>
<h3 className='text-[18px] sm:text-[18px] font-bold lg:text-[20px] text-[#252B42] w-[200px] lg:w-[376px] mt-[20px] gap-[30px] ' > Met minim Mollie non deset <br/> Alamo est sit cliquey dolor do <br/> met sent</h3>
</div>
<div className='absolute flex top-[160px]'>
<p className=' ml-[400px] '>Problems trying to resolve the conflict between the two major realms of <br/> Classical Physics: Newtonian mechanics</p>
</div>
<div className='absolute flex w-[1000px] h-[250px] align-center'>
<div className=' absolute align-center mt-[200px] gap-[2px]'>
<h1 className='font-bold text-[55px] ml-[200px]' >15k</h1><span className=' absolute text-[12px] ml-[200px] text-[#737373]'>Happy Customers</span>
</div>

<div className=' absolute justify-center mt-[200px] gap-[2px]'>

<h1 className='font-bold text-[55px] ml-[400px]'>150k</h1><span className='absolute text-[14px] mt-[2px] ml-[400px] text-[#737373]'>Monthly Visitors</span>
</div>
<div className=' absolute justify-center mt-[200px] gap-[2px]'>

<h1 className='font-bold text-[55px] ml-[600px]'>15</h1><span className='absolute text-[14px] mt-[2px] ml-[600px] text-[#737373]'>Countries Worldwide</span>
</div>

<div className=' absolute justify-center mt-[200px] gap-[2px]'>

<h1 className='font-bold text-[55px] ml-[750px]'>100+</h1><span className='absolute text-[14px] mt-[2px] ml-[750px] text-[#737373]'>Top Partners</span>
</div>
<div className="flex justify-center gap-4 absolute ml-[160] top-[350]">
             
                    <Image
                      src={videocard}
                      alt="card"
                      className="w-180 h-180"
                    />
                    </div>
</div>
</div>

</div>   
   {/* Team's Card */}


        <div className="absolute top-[1670] w-[1200] bg-white ">
          <div className="container mx-auto flex flex-col items-center gap-16 px-4">


          
            <div className="text-center max-w-lg">
              <h1 className="text-4xl font-bold text-[#252B42]">
                Meet Our Team
              </h1>
              <p className="text-base text-[#737373] mt-4">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            
            <div className="absolute top-[160] flex gap-5">

              {/* img1 */}
              <div className="items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-[290px] h-[200px] relative">
                  <Image
                    src={user1}
                    alt="Team Member 1"
                    className="object-cover w-[290] h-[200]"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">Username</h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Profession
                  </h6>


                  {/*  Media Icons */}
                  



                  <div className="flex justify-center gap-4 mt-4">
                    <Image
                      src={facebookIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                    <Image
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                    <Image
                      src={twittericon}
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user2}
                    alt="Team Member 2"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Profeesion
                  </h6>



                  <div className="flex justify-center gap-4 mt-4">
             
                    <Image
                      src={facebookIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                    <Image
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                    <Image
                      src={twittericon}
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="w-full h-[230px] relative">
                  <Image
                    src={user3}
                    alt="Team Member 3"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 text-center">
                  <h5 className="text-xl font-bold text-[#252B42]">
                    Username
                  </h5>
                  <h6 className="text-sm font-semibold text-[#737373]">
                    Profession
                  </h6>
                  <div className="flex justify-center gap-4 mt-4">
                 
              
                 
                    <Image
                      src={facebookIcon}
                      alt="Facebook"
                      className="w-6 h-6"
                    />
                    <Image
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-6 h-6"
                    />
                    <Image
                      src={twittericon}
                      alt="Twitter"
                      className="w-6 h-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Big Companies*/}

        <section className="absolute top-[2300px]  bg-gray-100 py-20 flex justify-center">
          <div className="w-full max-w-6xl flex flex-col gap-[24px] items-center px-4 md:px-8">
            {/* Heading Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Big Companies Are Here
              </h2>
              <p className="text-gray-600 text-sm md:text-base max-w-lg mx-auto">
                Problems trying to resolve the conflict between the two major
                realms of Classical physics: Newtonian mechanics
              </p>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              <div className="flex justify-center">
                <Image src={pic1} alt="Client 1 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={pic2} alt="Client 2 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={pic3} alt="Client 3 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={pic4} alt="Client 4 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={pic5} alt="Client 5 Logo" className="h-12 w-auto" />
              </div>
              <div className="flex justify-center">
                <Image src={pic6} alt="Client 6 Logo" className="h-12 w-auto" />
              </div>
            </div>
          </div>
        </section>

{/* Blue Container with Image*/}

        {/* <section className="absolute top[2900px] w-1290 h-[600px]  bg-[#2A7CC7] justify-center items-center"> */}
          
      {/* Blue Section */}

      {/* <div className="absolute top-[2000px] w-[1080px] md:w-1/2 h-full bg-[#2A7CC7] lg:px-[250px] lg:ml-[0px] ml-[50px] py-16  justify-center ">
        <div className="w-[438px] flex flex-col gap-[24px]">
          <h5 className="text-white text-lg font-bold leading-[24px] tracking-[0.1px]">WORK WITH US</h5>
          <h2 className="text-white text-4xl font-bold leading-[50px] tracking-[0.2px]">
          Now Let’s grow Yours
          </h2>
          <p className="text-white lg:text-sm text-[12px] lg:w-auto w-[350px] leading-[20px] tracking-[0.2px]">
          The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th 
          </p>
          <button className="w-[132px] h-[52px] border border-white rounded-md flex items-center justify-center py-3 px-10 gap-2 mt-6">
            <span className="text-white text-sm font-bold">Button</span>
          </button>
        </div>
      </div>
      {/* Left Side Image */}
      {/* <div className="w-[540px] md:w-1/2 h-full relative">
        <Image
          src={img27}
          alt="Testimonial Background"
          className="absolute top-[2900px] w-[570px] h-[640px] left-[150px] justify-end inset-0 object-cover"
        />
      </div>

    </section>  */}




    {/* Footer */}

    <footer className=" absolute top-[2700px]  left-[100px] ">
             {/* Top Section */}
              <section className="bg-[#ffffff] py-10">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                    <div className="flex flex-col">
                        <h1 className="text-[#252b42] text-2xl font-bold leading-loose tracking-tight">Bandage</h1>
                    </div>
                    <div className="flex gap-6">
                        <Image src={facebookIcon} alt="fb" className="w-6 h-6 " />
                        <Image src={instagramIcon} alt="fb" className="w-6 h-6 " />
                        <Image src={twittericon} alt="fb" className="w-6 h-6 " />
                    </div>
                </div>
            </section> 
  
            {/* Divider */}
            <div className="border-t border-[#e6e6e6]" />
  
            {/* Main Footer Content */}
             <section className="bg-white py-12">
                <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
                     Company Info 
                     <div>
                        <h2 className="text-[#252b42] text-base font-bold">Company Info</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">About Us</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Careers</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">We Are Hiring</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Blog</a>
                        </nav>
                    </div>  
  
                
                    <div>
                        <h2 className="text-[#252b42] text-base font-bold">Legal</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">Terms of Service</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Privacy Policy</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Cookies</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Refund Policy</a>
                        </nav>
                    </div> 
  
                    
                     <div>
                        <h2 className="text-[#252b42] text-base font-bold">Features</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">Business Marketing</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">User Analytics</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Live Chat</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Unlimited Support</a>
                        </nav>
                    </div> 
  
                    {/* Resources */}
                     <div>
                        <h2 className="text-[#252b42] text-base font-bold">Resources</h2>
                        <nav className="flex flex-col gap-2.5 mt-3">
                            <a href="#" className="text-[#727272] text-sm font-bold">iOS & Android</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Watch a Demo</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">Customers</a>
                            <a href="#" className="text-[#727272] text-sm font-bold">API</a>
                        </nav>
                    </div> 
  
                    {/* Get in Touch  */}
                    
                     <div>
                        <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
                        <div className="mt-3">
                            <div className="relative mb-4">
                                <input
                                    type="email"
                                    className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm font-normal"
                                    placeholder="Your Email"
                                />
                                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm font-normal rounded-r-lg">
                                    Subscribe
                                </button>
                            </div>
                            <p className="text-[#727272] text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section> 

             {/* Bottom */}

             <section className="bg-[#FAFAFA] py-4">
                <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                    <p className="text-[#727272] text-sm font-bold">Made with love by Finland. All rights reserved.</p>
                    <div className="flex gap-4">
                       
                    </div>
                </div>
            </section>
        </footer> 
      </div>
    </div>
  


















  );
};





