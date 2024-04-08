import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Header from "@/components/homepage_sections/Header";

const Homepage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center font-bold text-3xl">
        <Header />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
