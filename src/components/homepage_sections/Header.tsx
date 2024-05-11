import React from "react";
import { ReactTyped } from "react-typed";

const Header = () => {
  return (
    <div className=" min-h-96 w-full bg-[#3a2ded] bg-opacity-90 pt-16 lg:px-24  px-18 flex flex-col items-center gap-24 area">
      <div className="rounded-full overflow-hidden  size-[8%]">
        <img
        src="/about-hero-image-4.png"
        alt="Team Member"
        className="w-32  "
         />
      </div>
      <div className="rounded-full overflow-hidden bg-gray-300  size-[ justify-end ml-[80%] mt-[-4rem]">
         <img src="/header2.png" alt="Team Member" className="" />
      </div>
      <div className="Z-20 mt-[-10%]">
        <h1 className=" md:text-4xl text-xl font-bold text-[#00BDD6] italic drop-shadow-lg black-shadow  ">
          <ReactTyped
            strings={[
              " Powered by Africa's best tech talent"
       
            ]}
            typeSpeed={100}
            backSpeed={140}
            loop
             />
        </h1>
    
      </div>
      <div className="rounded-full overflow-hidden mr-[30%] mt-[-4rem] size-20 mb-11">
         <img src="/about-hero-image-1.png" alt="Team Member" />
      </div>

     {/* <div className="flex z-50">
        <input
          id="email"
          type="text"
          placeholder="Powered by Baobabpad AI"
          className="px-4 py-2 rounded-l-2xl border-l text-sm sm:min-w-[400px]  font-normal border-y border-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-blue-500"
        />
        <button className="bg-[#00BDD6] hover:bg-[#489fab] text-white font-normal py-2 px-4 rounded-r-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
          Search
        </button>
          </div>*/}

      <ul className="circles ">
        <li className="rounded-full"><img src="/about-hero-image-4.png" alt="Team Member" className="w-32 " /></li>
        <li><img src="/header2.png" alt="Team Member" /> <span>Baobabpad</span></li>
        
        
        <li> <img src="/about-hero-image-4.png" alt="Team Member" className="w-32 " /></li>
        <li><img src="/header2.png" alt="Team Member" /><span>Baobabpad</span></li>
        <li> <img src="/about-hero-image-1.png" alt="Team Member" /></li>
        <li><img src="/header2.png" alt="Team Member" /></li>
        <li><img src="/about-hero-image-1.png" alt="Team Member" /></li>
        <li><img src="/header2.png" alt="Team Member" /></li>
        <li><img src="/about-hero-image-1.png" alt="Team Member" /></li>
        <li><img src="/header2.png" alt="Team Member" /><span>Baobabpad</span></li>
        <li><img src="/about-hero-image-4.png" alt="Team Member" className="w-32 " /></li>
        <li><img src="/header2.png" alt="Team Member"  /></li>
      </ul>
    </div>
  );
};

export default Header;
