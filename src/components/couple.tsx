// import Image from "next/image";
// import couples from "@/images/img35.png";

// export default function WhiteSection() {
//   return (
//     <div className="w-full h-auto absolute top-[3510px] md:top-[70vh] lg:top-[80vh]">
//       <div className="w-full max-w-[1440px] flex flex-col lg:flex-row gap-[8px] px-4 lg:px-0">
//         {/* Image Section */}
//         <div className="relative w-full lg:w-[1/2] h-[auto] lg:h-[682px] ">
//           <Image
//             src={couples}
//             alt="couple"
//             className="object-contain"
//             style={{ width: "auto", height: "auto" }}
//           />
//         </div>

//         {/* Text Section */}
//         <div className="w-full lg:w-[573px] h-auto flex flex-col gap-[20px] justify-center items-center lg:items-start text-center lg:text-left mt-[20px] lg:mt-0">
//           <h5 className="text-[14px] lg:text-[16px] font-Montserrat font-bold leading-[24px] text-[#BDBDBD]">
//             SUMMER 2020
//           </h5>
//           <h2 className="lg:w-[375px] text-[24px] lg:text-[40px] font-Montserrat font-bold leading-[32px] lg:leading-[50px] text-[#252B42]">
//             Part of the Neural Universe
//           </h2>
//           <h4 className=" lg:w-[375px] text-[16px] lg:text-[20px] font-Montserrat font-normal leading-[24px] lg:leading-[30px] text-[#737373]">
//             We know how large objects will act, but things on a small scale.
//           </h4>
//           <div className="flex flex-wrap justify-center lg:justify-start gap-[10px]">
//             <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] bg-[#2DC071] flex justify-center items-center">
//               <h1 className="text-[14px] font-Montserrat font-bold text-white">
//                 BUY NOW
//               </h1>
//             </button>
//             <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] border border-[#2DC071] flex justify-center items-center">
//               <h1 className="text-[14px] font-Montserrat font-bold whitespace-nowrap text-[#2DC071]">
//                 READ MORE
//               </h1>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import Image from "next/image";
import couples from "@/images/img35.png";

export default function WhiteSection() {
  return (
    <div className="w-full h-auto relative top-[870px]">
      <div className="w-full max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-8 px-4 md:top-[768px] lg:top-[1024px] lg:px-8">
        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 h-auto lg:h-[600px]">
          <Image
            src={couples}
            alt="couple"
            className="object-cover"
            priority
            height={700}
            width={800}

            // layout="fill"
            // sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[50%] flex flex-col gap-5 justify-center items-center lg:items-start text-center lg:text-left">
          <h5 className="text-[14px] md:text-[16px] font-Montserrat font-bold leading-[20px] md:leading-[24px] text-[#BDBDBD]">
            SUMMER 2020
          </h5>
          <h2 className="w-full max-w-[375px] text-[24px] md:text-[32px] lg:text-[40px] font-Montserrat font-bold leading-[32px] md:leading-[40px] lg:leading-[50px] text-[#252B42]">
            Part of the Neural Universe
          </h2>
          <h4 className="w-full max-w-[375px] text-[16px] md:text-[18px] lg:text-[20px] font-Montserrat font-normal leading-[24px] md:leading-[28px] lg:leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="w-[140px] md:w-[156px] h-[52px] rounded-md bg-[#2DC071] flex justify-center items-center">
              <span className="text-[14px] font-Montserrat font-bold text-white">
                BUY NOW
              </span>
            </button>
            <button className="w-[140px] md:w-[156px] h-[52px] rounded-md border border-[#2DC071] flex justify-center items-center">
              <span className="text-[14px] font-Montserrat font-bold text-[#2DC071]">
                READ MORE
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}




