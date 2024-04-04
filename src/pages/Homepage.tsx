import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center font-bold text-3xl">
        Homepage
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
