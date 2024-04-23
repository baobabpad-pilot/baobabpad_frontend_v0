import React from "react";
import Image from "next/image";

const Customers = () => {
  return (
    <div className="text-center px-32 flex flex-col gap-10">
      <h1 className="text-3xl font-semibold text-[#341473]">What Our Clients Say</h1>
      <div className="w-full bg-[#EBFDFF] grid grid-cols-5">
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
        </div>
      </div>
    </div>
  );
};

export default Customers;
