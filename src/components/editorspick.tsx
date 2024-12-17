
import Image from "next/image";
import img2 from "/img2.jpg";
import img3 from "/img3.jpg";
import img4 from "/img4.jpg";
import img5 from "/img5.jpg";

export default function Editors() {
  return (
    <div className="w-full flex justify-center py-3 bg-[#f5f5f5]">
      <div className="w-full max-w-[1050px] h-auto flex flex-col gap- 6 bg-[#FAFAFA] p-5 sm:p-4 md:p-10">
        {/* Main Section */}
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-Montserrat font-semibold text-lg sm:text-xl md:text-2xl">
            EDITOR’S PICK
          </h3>
          <p className="w-[90%] max-w-[350px] font-Montserrat font-normal text-sm md:text-base text-[#737373] text-center">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="w-full flex flex-wrap gap-4 justify-center">
          {/* Image 1 */}
          <div className="relative w-full sm:w-[37%] md:w-[400px] h-[500px] sm:h-[500px] md:h-[500px]">
            <Image
              src="/img2.jpg"
              alt="img1"
              fill
              className="object-cover rounded-md"
            />
            <button className="absolute top-[70%] left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-sm md:text-base text-[#252B42] hover:bg-gray-100">
              MEN
            </button>
          </div>

          {/* Image 2 */}
          <div className="relative w-[40%] sm:w-[23%] h-[400px] sm:h-[400px] md:h-[500px]">
            <Image
              src="/img3.jpg"
              alt="img2"
              fill
              className="object-cover"
            />
            <button className="absolute top-[70%] left-4 bg-white px-4 py-2 shadow-md font-Montserrat font-bold text-sm md:text-base text-[#252B42]">
              WOMEN
            </button>
          </div>

          {/* Image 3 */}
          <div className="flex flex-col gap-4 w-[43%] sm:w-[23%]">
            <div className="relative w-full h-[120px] sm:h-[180px] md:h-[260px]">
              <Image
                src="/img4.jpg"
                alt="img3"
                fill
                className="object-cover"
              />
              <button className="absolute top-[60%] left-4 bg-white px-3 py-2 shadow-md font-Montserrat font-bold text-sm md:text-base text-[#252B42]">
                ACCESSORIES
              </button>
            </div>

            {/* Image 4 */}
            <div className="relative w-full h-[180px] sm:h-[180px] md:h-[260px]">
              <Image
                src="/img5.jpg"
                alt="img4"
                fill
                className="object-cover"
              />
              <button className="absolute top-[60%] left-4 bg-white px-3 py-2 shadow-md font-Montserrat font-bold text-sm md:text-base text-[#252B42]">
                KIDS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


