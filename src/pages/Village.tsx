import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Village = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center font-bold text-3xl">
        Village
      </div>
      <Footer />
    </div>
  );
};

export default Village;
