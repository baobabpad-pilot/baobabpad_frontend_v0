import React from "react";
import Image from "next/image";


const TrustedBy = () => {
  return (
    <div className=" py-3 lg:px-32 px-8 ">
      {/*<div className="col-span-1 border-y-8 border-[#C5D1F7] py-4 flex flex-col gap-8 rounded-xl text-center">*/}
        <h1 className="text-4xl font-medium py-4 mb-8">Trusted by</h1>
        <h4 className="text-xl">Our Partners :</h4>

     
     <div className="lg:w-[90%] w-[100%] h-[40%] grid  gap-3 grid-row-2 lg:ml-[10%] h-100 ">
          {/*Logos part 1 */}
          <div className="grid grid-cols-3">
          <div className="relative md:h-[8rem] h-[5rem] sm:mt-4 w-[100%] ">
            <Image
              src={"/Greentec.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"
              
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
          </div>

          {/* logo part 2*/}
          <div className="grid grid-cols-2 md:h-[10rem] h-[8rem]">
          <div className="relative md:h-[6rem] h-[4rem] bg-black mt-5 w-[60%] md:ml-0 ml-7 rounded-md text-right">
            <Image
              src={"/diza.png"}
              alt="diza"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer size-5  "
            />
          </div>

          <div className="relative md:h-[6rem] h-[4rem] mt-5 w-[60%] border border-gray-400 rounded-md">
            <Image
              src={"/aws-logo.jpeg"}
              alt="aws"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer size-5  "
            />
          </div>
          </div>
          
          {/*</div>*/}
      </div>

      
    </div>
  );
};

export default TrustedBy;
