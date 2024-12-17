// import React from 'react'
// import Image from 'next/image'

// const Herosection = () => {
//   return (
//     <div className="relative w-[1349] h-[690px] bg-cover">

//       {/* !st Image */}
//       <Image 
//          src="/img1.jpg" 
//          alt="maingirl" 
//         height={690} 
//         width={1349} 
//         className="w-full h-full object-cover" 
//       />
      
//       <div className="absolute inset-0 flex flex-col justify-center mt-[55px] items-center sm:items-start p-8 sm:p-12">
//         <div className="w-full sm:w-[599px] h-auto gap-[23px] mt-[55px] text-center sm:text-left">
//           <h5 className="font-montserrat font-bold text-[16px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-white">
//             SUMMER 2020
//           </h5>
//           <h1 className="font-montserrat font-bold text-[42px] sm:text-[60px] leading-[56px] sm:leading-[80px] tracking-[0.2px] text-white">
//             NEW COLLECTION
//           </h1>
//           <h4 className="font-montserrat font-normal text-[16px] sm:text-[20px] leading-[24px] sm:leading-[28px] tracking-[0.2px] text-white w-full sm:w-[376px]">
//             We know how large objects will act, 
//             but things on a small scale.
//           </h4>
//           <br />
//           <button className="w-full sm:w-auto  bg-[#2DC071] py-[12px] sm:px-[40px] px-[30px] rounded-[5px] gap-[10px] text-white font-montserrat">
//            Shop Now
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Herosection




import React from 'react';
import Image from 'next/image';

const Herosection = () => {
  return (
    <div className="relative w-full h-[690] bg-cover">
      {/* Background Image */}
      <Image
        src="/img1.jpg"
        alt="Hero Image"
        height={690}
        width={1349}
        className="w-full h-full object-cover"
        priority 
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-start px-6 sm:px-12">
        {/* Text Content */}
        <div className="max-w-screen-lg mx-auto lg:ml-[110] text-center sm:text-left">
          <h5 className="font-montserrat font-bold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[0.1px] text-white">
            SUMMER 2020
          </h5>
          <h1 className="font-montserrat font-bold text-[36px] sm:text-[50px] leading-[44px] sm:leading-[80px] tracking-[0.2px] text-white mt-2">
            NEW COLLECTION
          </h1>
          <h4 className="font-montserrat font-normal text-[12px] sm:text-[20px] leading-[22px] sm:leading-[28px] tracking-[0.2px] text-white mt-4 sm:mt-6 max-w-lg">
            We know how large objects will act,<br/> but things on a small scale.
          </h4>
          {/* Button */}
          <button className="mt-6 bg-[#2DC071] text-white font-montserrat py-3 px-8 rounded-md hover:bg-green-600 transition">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;


