
// import Link from "next/link"
// import { AiOutlineUser } from "react-icons/ai";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { CiSearch } from "react-icons/ci";
// import { CiHeart } from "react-icons/ci";
// import {RiArrowDropDownLine} from "react-icons/ri"


// export const navbar =() =>{
//     return (
//       <div className='bg-[white] w-[1339] h-[75px] items-center justify-between' >
//       <div className='flex items-center justify-between'>
//         <h3 className='w-[190px] h-[60px] justify-between text-[#252B42] leading-[24px] font-bold pl-[6px] mt-2'>Bandage</h3>
        
//           <ul className='w-[1150px] h-[48px] flex items-center pb-[23px] leading-[24px] gap-[13px]'>
           
//             <li> <Link className='w-[55px] h-[24px] text-sm  text-[#737373] font-[700] align-center'  href= "/">Home</Link></li>
//             <li> <Link className='w-[56px] h-[24px]  text-[#252B42] font-[700] flex items-center' href= "/">shop<RiArrowDropDownLine className=''/></Link></li>
//             <li> <Link className='w-[55px] h-[24px] text-[#737373] text-sm font-[700] leading-[24] align-center' href= "/">About</Link></li>
//             <li> <Link className='w-[55px] h-[24px] text-[#737373] text-sm  font-[700] align-center' href= "/">Blog</Link></li>
//             <li> <Link className='w-[55px] h-[24px] text-[#737373] text-sm  font-[700] align-center' href= "/">Contact</Link></li>
//             <li> <Link className='w-[55px] h-[24px] text-[#737373] text-sm  font-[700] align-center' href= "/">Pages</Link></li>
//           </ul>
//           <ul className=' flex items-center w-[600px] h-[48px] leading-[24px] gap-[2px] pb-[10px]'>


//        <li> <Link className='w-[45px] h-[24px] text-[#23A6F0] text-sm  font-[700] flex items-center'  href="/" ><AiOutlineUser/></Link></li>
//       <li>  <Link className='w-[45px] h-[24px] text-[#23A6F0]   font-[700] '  href="/" >Register/Login</Link></li>
//       <li>  <Link className='w-[45px] h-[24px] text-[#23A6F0]  text-sm font-[700] flex items-center '  href="/" ><CiSearch className='text-base'/></Link></li>

//        <li> <Link className='w-[45px] h-[24px] text-[#23A6F0] text-sm font-[700] flex items-center ' href=""><AiOutlineShoppingCart className='text-base' />1</Link></li>
//        <li> <Link className='w-[45px] h-[24px] text-[#23A6F0] text-sm font-[700] flex items-center ' href="" ><CiHeart className='text-base'/>1</Link> </li>
      
//        </ul>  </div>
      
//       </div>
//   )
// }

// export default navbar;



import Link from "next/link";
import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch, CiHeart } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Navbar = () => {
  return (
    <div className="bg-white w-full h-[75px] px-4 md:px-8 flex items-center justify-between shadow-md">
      {/* Logo Section */}
      <h3 className="text-[#252B42] font-bold text-xl md:text-2xl">Bandage</h3>

      {/* Links Section */}
      <ul className="hidden md:flex items-center space-x-4 lg:space-x-6">
        <li>
          <Link
            className="text-sm font-bold text-[#737373] hover:text-[#252B42]"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="text-sm font-bold text-[#252B42] flex items-center hover:text-blue-500"
            href="/"
          >
            Shop <RiArrowDropDownLine className="text-lg" />
          </Link>
        </li>
        <li>
          <Link
            className="text-sm font-bold text-[#737373] hover:text-[#252B42]"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-sm font-bold text-[#737373] hover:text-[#252B42]"
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="text-sm font-bold text-[#737373] hover:text-[#252B42]"
            href="/contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            className="text-sm font-bold text-[#737373] hover:text-[#252B42]"
            href="/pages"
          >
            Pages
          </Link>
        </li>
      </ul>

      {/* Icons Section */}
      <ul className="flex items-center space-x-4 md:space-x-6">
        <li>
          <Link
            className="text-[#23A6F0] flex items-center text-sm font-bold"
            href="/"
          >
            <AiOutlineUser className="text-xl" />
          </Link>
        </li>
        <li className="hidden sm:block">
          <Link
            className="text-[#23A6F0] text-sm font-bold"
            href="/register"
          >
            Register/Login
          </Link>
        </li>
        <li>
          <Link
            className="text-[#23A6F0] flex items-center text-sm font-bold"
            href="/search"
          >
            <CiSearch className="text-xl" />
          </Link>
        </li>
        <li>
          <Link
            className="text-[#23A6F0] flex items-center text-sm font-bold"
            href="/cart"
          >
            <AiOutlineShoppingCart className="text-xl" /> 1
          </Link>
        </li>
        <li>
          <Link
            className="text-[#23A6F0] flex items-center text-sm font-bold"
            href="/wishlist"
          >
            <CiHeart className="text-xl" /> 1
          </Link>
        </li>
      </ul>

      {/* Mobile Menu (Hamburger) */}
      <div className="md:hidden flex items-center">
        {/* Add a menu toggle button or mobile menu here */}
        <button className="text-[#23A6F0] text-2xl">
          {/* Replace with a Hamburger icon */}
          ☰
        </button>
      </div>
    </div>
  );
};

export default Navbar;


