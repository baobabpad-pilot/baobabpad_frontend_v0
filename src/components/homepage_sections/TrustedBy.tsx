import React from "react";
import Image from "next/image";


const TrustedBy = () => {
  return (
    <div className=" py-3 lg:px-32 px-8 ">
      {/*<div className="col-span-1 border-y-8 border-[#C5D1F7] py-4 flex flex-col gap-8 rounded-xl text-center">*/}
        <h1 className="text-4xl font-medium py-4 mb-8">Trusted by</h1>
        <h4 className="text-xl">Our Partners :</h4>

        <div className="lg:w-[90%] w-[100%] grid grid-cols-3 gap-8 lg:ml-[10%] ">
          <div className="relative md:h-[8rem] h-[5rem] sm:mt-4 w-[100%] ">
            <Image
              src={"/Greentec.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer  z-10"
            />
          </div>
          <div className="relative md:h-[8rem] h-[5rem] w-[50%] ml-[20%]">
            <Image
              src={"/OIP.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer  z-10"
            />
          </div>
          <div className="relative md:h-[6rem] h-[3rem] mt-5 w-[60%] ">
            <Image
              src={"/Logo-WV.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer  z-10"
            />
          </div>
          <div className="relative mt-4">
          
          </div>
          {/*</div>*/}
      </div>

      
    </div>
  );
};

export default TrustedBy;
