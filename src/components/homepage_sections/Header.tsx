import React from "react";

const Header = () => {
  return (
    <div className="min-h-96 w-full bg-[#ED7D2D] bg-opacity-40 pt-16 px-24 flex flex-col items-center gap-24 area">
      <div className="z-20">
        <h1 className=" md:text-7xl font-semibold text-[#00BDD6]">
          Virtual <span className="text-[#8353E2]">Technology</span> Village
        </h1>
      </div>

      <div className="flex z-50">
        <input
          id="email"
          type="text"
          placeholder="Powered by Baobabpad AI"
          className="px-4 py-2 rounded-l-2xl border-l text-sm sm:min-w-[400px]  font-normal border-y border-gray-700 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-blue-500"
        />
        <button className="bg-[#00BDD6] hover:bg-[#489fab] text-white font-normal py-2 px-4 rounded-r-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">
          Search
        </button>
      </div>

      <ul className="circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default Header;
