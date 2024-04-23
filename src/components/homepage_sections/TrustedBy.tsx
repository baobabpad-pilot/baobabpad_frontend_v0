import React from "react";
import Image from "next/image";

const TrustedBy = () => {
  return (
    <div className="my-12 py-12 px-32 grid grid-cols-3 gap-2">
      <div className="col-span-1 border-y-8 border-[#C5D1F7] py-4 flex flex-col gap-8 rounded-xl text-center">
        <h4>Our Partners</h4>

        <div className="w-full grid grid-cols-3 gap-14">
          <div className="relative h-12">
            <Image
              src={"/JLVINAR.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer  z-10"
            />
          </div>
          <div className="relative">
            <Image
              src={"/consectetur.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer  z-10"
            />
          </div>
          <div className="relative mt-4">
            <Image
              src={"/Bibendum.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"  
              className="cursor-pointer  z-10"
            />
          </div>
        </div>
      </div>

      <div className="col-span-2 border-y-8 border-[#A6F5FF] py-4 flex flex-col gap-8 rounded-xl text-center">
        <h4>Our Customers</h4>
        <div className="w-full grid grid-cols-5 gap-14">
        <div className="relative h-12">
            <Image
              src={"/JLVINAR.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer  z-10"
            />
          </div>
          <div className="relative">
            <Image
              src={"/consectetur.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer  z-10"
            />
          </div>
          <div className="relative mt-4">
            <Image
              src={"/Bibendum.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"  
              className="cursor-pointer  z-10"
            />
          </div>
          <div className="relative h-12">
            <Image
              src={"/JLVINAR.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer  z-10"
            />
          </div>
          <div className="relative">
            <Image
              src={"/consectetur.png"}
              alt="Baobabpad logo"
              layout="fill"
            //   objectFit="cover"
              className="cursor-pointer  z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
