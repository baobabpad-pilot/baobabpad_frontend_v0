import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRouter } from 'next/router';
import Slider from "react-slick";
import SolutionNavbar from "@/components/SolutionsNavbar/SolutionNavbar";
import Client from "@/pages/Client"; 
import Remote from "@/pages/Remote"; 
import DigitalX from "@/pages/DigitalX"; 
import Cloud from "@/pages/Cloud"; 


interface SolutionsProps {}

const Solutions:React.FC<SolutionsProps> = () => {

  const [selectedPage, setSelectedPage]=useState<string | null>("Client");


  const solutionPages: { [key: string]: React.ComponentType } = {
    Client,
    Remote,
    DigitalX,
    Cloud,
  };

  const PageComponent = selectedPage ? solutionPages[selectedPage] : null;

  return (
    
      <>
         {PageComponent&&<PageComponent/>}
      </>
  
  );
};

export default Solutions;
