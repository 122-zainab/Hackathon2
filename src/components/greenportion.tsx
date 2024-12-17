
// import Image from "next/image";
// import greenportion from "@/images/img22.png";

// export default function GreenDiv() {
//   return (
//     <div className="w-full rounded-[5px] absolute bg-[#23856D] lg: mt-[-130px] lg: top-[2900px] border">
//       <div className="w-full max-w-[1299px] mx-auto h-auto lg:h-[600px]">
//         <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full h-auto lg:h-[600px] lg:px-[20px] gap-[40px]">
//           {/* Left Section */}
//           <div className="flex flex-col gap-[28px] mt-[200px] lg:w-1/2 px-[20px] lg:px-0">
//             <h4 className="text-[18px] leading-[28px] font-Montserrat font-normal text-white">
//               SUMMER 2020
//             </h4>
//             <h1 className="text-[32px] lg:text-[67px] leading-[40px] lg:leading-[75px] font-Montserrat font-bold text-white">
//               Vita Classic Product
//             </h1>
//             <p className="text-[14px] leading-[22px]  font-Montserrat font-medium text-white">
//               We know how large objects will act, We know how  <br/> are objects will act, We know
//             </p>
//             <div className="flex gap-[28px] items-center">
//               <h3 className="text-[24px] font-Montserrat font-bold text-white">
//                 $16.48
//               </h3>
//               <button className="rounded-[5px] px-[40px] bg-[#2DC071] py-[10px] flex justify-center items-center">
//                 <h1 className="text-[14px] font-Montserrat text-white">
//                   ADD TO CART
//                 </h1>
//               </button>
//             </div>
//           </div>
//           {/* Right Section */}
//           <div className="flex justify-center items-center w-full lg:w-1/2">
//             <Image
//               src={greenportion}
//               alt="greenportion"
//               className="w-auto h-[500] mt-[110] max-w-full"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





import Image from "next/image";
import greenportion from "@/images/img22.png";

export default function GreenDiv() {
  return (
    <div className="w-full bg-[#23856D] rounded-[5px] absolute lg:mt-[-130px] lg:top-[2900px] border">
      <div className="max-w-[1299px] mx-auto px-4 lg:px-8 h-auto lg:h-[600px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between w-full h-auto lg:h-[600px] gap-[40px]">
          {/* Left Section */}
          <div className="flex flex-col gap-[28px] mt-[200px] lg:w-1/2 px-[20px] lg:px-0">
            <h4 className="text-sm sm:text-[18px] leading-[28px] font-Montserrat font-normal text-white">
              SUMMER 2020
            </h4>
            <h1 className="text-xl sm:text-[32px] lg:text-[67px] leading-[40px] lg:leading-[75px] font-Montserrat font-bold text-white">
              Vita Classic Product
            </h1>
            <p className="text-xs sm:text-[14px] leading-[22px] font-Montserrat font-medium text-white">
              We know how large objects will act, We know how are objects will act, We know
            </p>
            <div className="flex gap-[28px] items-center">
              <h3 className="text-lg sm:text-[24px] font-Montserrat font-bold text-white">
                $16.48
              </h3>
              <button className="rounded-[5px] px-10 py-2 bg-[#2DC071] flex justify-center items-center">
                <h1 className="text-xs sm:text-[14px] font-Montserrat text-white">
                  ADD TO CART
                </h1>
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center items-center w-full lg:w-1/2">
            <Image
              src={greenportion}
              alt="greenportion"
              className="w-auto h-[440px] max-w-full"
              layout="intrinsic"
              width={600}
              height={440}
            />
          </div>
        </div>
      </div>
    </div>
  );
}



