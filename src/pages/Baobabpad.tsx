import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CiWifiOn } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaRegPaperPlane } from "react-icons/fa";

const Baobabpad = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero section */}
        <div className="mt-7 flex flex-col items-center min-h-[500px] bg-[#ED7D2D] bg-opacity-40 justify-center text-center space-y-4">
          <h1 className="font-bold text-5xl text-[#723CDE] mt-20">Bao<span className="text-[#A6F5FF]">bab</span>pad</h1>
          <div className="flex justify-around items-center w-full pb-[150px]  mx-auto">
          <div className="rounded-full overflow-hidden -mt-48 mr-50 ">
              <img src="/about-hero-image-1.png" alt="Team Member" />
            </div>
            <div className="rounded-full overflow-hidden -mr-52">
              <img src="/about-hero-image-2.png" alt="Team Member" />
            </div>
          <p className="text-md text-[#00BDD6] bg-white p-2 px-6 br-2 rounded-3xl">Investing in Africa's Human & Social Capital Innovation</p>
            <div className="rounded-full overflow-hidden -ml-52">
              <img src="/about-hero-image-3.png" alt="Team Member" />
            </div>
            <div className="rounded-full overflow-hidden -mt-48">
              <img src="/about-hero-image-4.png" alt="Team Member"className="w-32" />
            </div>
          </div>
        </div>
        {/* About us */}
        <section className=" flex justify-between items-center -40 p-10">
        {/* Left side with text */}
        <div className="pl-20 max-w-[610px]">
          <h1 className="text-6xl mb-8 text-gray-800 font-bold">About us</h1>
          <img className="mb-8" src="/underline.png" alt="underline" />
          <p className="mb-10 text-gray-700 text-2xl">
            Baobabpad is a Virtual Technology Village, that offers a dynamic and innovative platform with top African technology talent, providing state of art technology value creation for businesses.
          </p>
          <button className=" text-blue-500 text-2xl bg-transparent border border-blue-500 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition duration-300 px-20">
            Learn more
          </button>
        </div>

        {/* Right side with image and social icons */}
        <div className="relative pr-20">
            
          <img
            className="pr-32"
            src="/about-us-image.png" 
            alt="Person using a phone"
          />

          {/* Eiusmod comm container */}
          <div className="absolute top-24 -left-32 p-6 w-[230px] mx-auto bg-white rounded-xl shadow-md flex flex-col items-center space-y-4">
            <h3 className="text-xl  font-medium text-[#00BDD6]">Eiusmod comm</h3>
            <div className="w-full">
              <button className="flex w-full px-4 py-2 bg-[#C8F9FF] text-blue-800 rounded-md shadow-sm space-x-2">
              <CiWifiOn className="mt-1"/>
                <span>LinkedIn</span>
              </button>
              <button className="flex  w-full px-4 py-2 mt-4 bg-[#F5F2FD] text-[#8353E2] rounded-md shadow-sm space-x-2">
              <CiShare2  className="mt-1"/>
                <span>Share</span>
              </button>
              <button className="flex  w-full px-4 py-2 mt-4 bg-[#FEF9EE] text-[#98690C] rounded-md shadow-sm space-x-2">
              <FaRegPaperPlane className="mt-1"/>
                <span>Chat</span>
              </button>
            </div>
        </div>

        </div>
      </section>

        
      
      <Footer />
    </div>
  );
};

export default Baobabpad;
