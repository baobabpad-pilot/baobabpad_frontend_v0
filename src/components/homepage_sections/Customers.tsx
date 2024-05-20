import React from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Customers = () => {
  return (
    <div className="text-center lg:px-32 px-4 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold text-[#341473]">What Our Clients Say</h1>
      <div className="w-full bg-[#EBFDFF] lg:grid  md:grid grid-cols-5 hidden">
        <div className="col-span-1 relative h-60">
          <div className="relative h-full">
            <Image
              src={"/background.png"}
              alt="Baobabpad logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer  z-10"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-60 h-56">
            <div className="relative h-full">
              
              <Image
                src={"/Image 83.png"}
                alt="Baobabpad logo"
                layout="fill"
                objectFit="contain"
                className="cursor-pointer  z-10"
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 p-10 flex flex-col gap-6 px-24">
          <h1 className="text-[#00BDD6] text-3xl text-start">
            Since using Baobabpad, our processes have become more efficient and
            organized. It's a game-changer!"
          </h1>
          <p className="text-start font-medium text-xl">John Anderson</p>
          <div className="flex justify-between w-[15%] ml-[5%] mb-4">
            <a href="#" className="bg-[#00BDD6] text-white  rounded-full"><IoIosArrowBack  className="size-7"/></a>
            <a href="#" className="bg-[#00BDD6] text-white  rounded-full"><IoIosArrowForward className="size-7"/></a>
          </div>
        </div>
      </div>

      {/*Small size responsive*/}
      <div className="w-[100%] lg:hidden md:hidden  ">
        <div className="col-span-1 relative h-60 rounded-t-lg w-[50%] justify-start">
          <div className="relative h-full   ">
            <Image
              src={"/background.png"}
              alt="Baobabpad logo"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer "
            />
          </div>
          <div className="absolute bottom-0 w-80 h-56">
            <div className="relative h-full ">
              
              <Image
                src={"/Image 83.png"}
                alt="Baobabpad logo"
                layout="fill"
                objectFit="contain"
                className="cursor-pointer  z-10"
              />
            </div>
          </div>
        </div>
        <div className="col-span-4 py-2 flex flex-col gap-6  bg-[#EBFDFF] ">
          <h1 className="text-[#00BDD6] lg:text-3xl text-2xl text-start">
            Since using Baobabpad, our processes have become more efficient and
            organized. It's a game-changer!"
          </h1>
          <p className="text-start font-medium text-xl ml-8">John Anderson</p>
          <div className="flex justify-between md:w-[15%] w-[20%] ml-[3rem] mb-4">
            <a href="#" className="bg-[#00BDD6] text-white  rounded-full"><IoIosArrowBack  className="size-7"/></a>
            <a href="#"  className="bg-[#00BDD6] text-white  rounded-full"><IoIosArrowForward className="size-7"/></a>
          
          </div>
        </div>
      </div>

      
      {/*end of small size*/}

    </div>
  );
};

export default Customers;
