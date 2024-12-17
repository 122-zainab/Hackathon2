
// import Image from "next/image";
// import picture1 from "@/images/img6.jpg";
// import pic2 from "@/images/img7.jpg";
// import pic3 from "@/images/img8.jpg";
// import pic4 from "@/images/img9.jpg";
// import pic5 from "@/images/img10.jpg";
// import pic6 from "@/images/img11.jpg";
// import pic7 from "@/images/img12.jpg";
// import pic8 from "@/images/img13.jpg";
// import colours from "@/images/product-colors.png";

// export default function ProductCard() {
//   return (
//     <div className="w-full absolute top-[1490px] left-0 flex justify-center">
//       <div className="max-w-[1120px] px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-12">
        
//         {/* Text Section */}
//         {/* <div className="w-full text-center space-y-2">
//           <h4 className="font-Montserrat font-normal text-base sm:text-lg text-[#737373]">
//             Featured Products
//           </h4>
//           <h3 className="font-Montserrat font-bold text-xl sm:text-2xl text-[#252B42]">
//             BESTSELLER PRODUCTS
//           </h3>
//           <p className="font-Montserrat font-normal text-sm sm:text-base text-[#737373]">
//             Problems trying to resolve the conflict between
//           </p>
//         </div> */}



// <div className="w-full text-center space-y-4 px-4 sm:px-4 lg:px-8">
//   <h4 className="font-Montserrat font-normal text-sm sm:text-base md:text-lg text-[#737373]">
//     Featured Products
//   </h4>
//   <h3 className="font-Montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#252B42]">
//     BESTSELLER PRODUCTS
//   </h3>
//   <p className="font-Montserrat font-normal text-xs sm:text-sm md:text-base text-[#737373]">
//     Problems trying to resolve the conflict between
//   </p>
// </div>


//         {/* Card Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[picture1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map(
//             (pic, index) => (
//               <div key={index} className="w-full flex flex-col items-center">


//                 {/* Image Container */}
//                 <div className="w-full aspect-w-1 aspect-h-1">
//                   <Image 
//                      src={pic} alt={`picture${index + 1}`} 
//                     // src={pic}
//                     // alt={picture${index + 1}}
//                     layout="responsive"
//                     width={239}
//                     height={185}
//                     className="rounded-md object-cover"
//                   />
//                 </div>

//                 {/* Text Section */}
//                 <div className="w-full py-4 space-y-2 text-center">
//                   <h5 className="font-Montserrat font-bold   text-sm sm:text-base text-[#252B42]">
//                     Graphic Design
//                   </h5>
//                   <p className="font-Montserrat font-normal text-sm text-[#737373]">
//                     English Department
//                   </p>
//                   <div className="flex justify-center items-center space-x-2">
//                     <h5 className="font-Montserrat font-bold text-sm text-[#BDBDBD] line-through">
//                       $16.48
//                     </h5>
//                     <h5 className="font-Montserrat font-bold text-sm text-[#23856D]">
//                       $6.48
//                     </h5>
//                   </div>

             

//                  <div className="w-full flex justify-center sm:justify-start">

//                   <div className="w-[82px] ml-[80] flex justify-center">
//                     <Image
//                       src={colours}
//                       alt="colours"
//                       layout="intrinsic"
//                       width={82}
//                       height={14}
//                     />
//                   </div>
//                   </div>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }




import Image from "next/image";
import picture1 from "@/images/img6.jpg";
import pic2 from "@/images/img7.jpg";
import pic3 from "@/images/img8.jpg";
import pic4 from "@/images/img9.jpg";
import pic5 from "@/images/img10.jpg";
import pic6 from "@/images/img11.jpg";
import pic7 from "@/images/img12.jpg";
import pic8 from "@/images/img13.jpg";
import colours from "@/images/product-colors.png";

export default function ProductCard() {
  return (
    <div className="w-full relative flex justify-center">
      <div className="max-w-[1120px] px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-12">
        
        {/* Text Section */}
        <div className="w-full text-center space-y-4 px-4">
          <h4 className="font-Montserrat font-normal text-sm sm:text-base md:text-lg text-[#737373]">
            Featured Products
          </h4>
          <h3 className="font-Montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#252B42]">
            BESTSELLER PRODUCTS
          </h3>
          <p className="font-Montserrat font-normal text-xs sm:text-sm md:text-base text-[#737373]">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[picture1, pic2, pic3, pic4, pic5, pic6, pic7, pic8].map(
            (pic, index) => (
              <div 
                key={index} 
                className="w-full flex flex-col items-center bg-white rounded-md shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                {/* Image Container */}
                <div className="w-full aspect-w-1 aspect-h-1">
                  <Image 
                    src={pic} 
                    alt='{Product ${index + 1}}' 
                    layout="responsive"
                    width={239}
                    height={185}
                    className="rounded-t-md object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className="w-full py-4 px-4 space-y-2 text-center">
                  <h5 className="font-Montserrat font-bold text-sm sm:text-base md:text-lg text-[#252B42]">
                    Graphic Design
                  </h5>
                  <p className="font-Montserrat font-normal text-sm text-[#737373]">
                    English Department
                  </p>
                  <div className="flex justify-center items-center space-x-2">
                    <h5 className="font-Montserrat font-bold text-sm text-[#BDBDBD] line-through">
                      $16.48
                    </h5>
                    <h5 className="font-Montserrat font-bold text-sm text-[#23856D]">
                      $6.48
                    </h5>
                  </div>

                  {/* Colours Section */}
                  <div className="w-[82px] flex justify-center mx-auto">
                    <Image
                      src={colours}
                      alt="Available Colours"
                      layout="intrinsic"
                      width={82}
                      height={14}
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}



