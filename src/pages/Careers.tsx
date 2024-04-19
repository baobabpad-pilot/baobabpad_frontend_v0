import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "../styles/careers.module.css";
import user1 from "../career_images/user1.png";
import user2 from "../career_images/user2.png";
import user3 from "../career_images/user3.png";
import user4 from "../career_images/user4.png";
import Auth from "@/components/career_section/Auth";





const Careers = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); 

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div
        className={`${styles.container} flex-1 flex justify-center items-center font-bold text-3xl`}
        style={{
          backgroundColor: "rgb(245,245,245) ",
          height: "100vh",
          width: "100%",
        }}
      >
        <div
          className={`${styles.flexContainer} flex flex-row`}
          style={{ height: "100vh" }}
        >
          <div className={styles.part1}>
            <div className="container mx-30 mt-10 flex flex-row justify-center items-center">
              <div
                className="img1"
                style={{ marginRight: "25px", marginTop: "50px" }}
              >
                <Image
                  src={user3}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
              </div>
              {/* Image 2 */}
              <div className="img2">
                <Image
                  src={user4}
                  width={120}
                  height={120}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div
              className="container mx-30  flex flex-row justify-center items-center"
              // style={{ backgroundColor: "red" }}
            >
              {/* Image 2 */}
              <div
                className="img1"
                style={{ marginRight: "30px", marginBottom: "30px" }}
              >
                <Image
                  src={user2}
                  width={60}
                  height={60}
                  alt="Picture of the author"
                />
              </div>
              {/* Image 2 */}
              <div className="img2 mt-5 " style={{ marginRight: "20px" }}>
                <Image
                  src={user1}
                  width={90}
                  height={90}
                  alt="Picture of the author"
                />
              </div>
            </div>
            <div className="info mt-20">
              <p style={{ marginLeft: "10px", color: "rgb(0,189,214)" }}>
                Connecting Africa Talent, <br /> Virtually, and Globally
              </p>
            </div>
          </div>
          {/* ------------------------------------------------ */}
          {/* component */}
          <Auth />
          {/* -------------------------------------------------------- */}
        </div>
      </div>
      <div
        className="section2"
        style={{ marginTop: isSmallScreen ? "400px" : "" }}
      >
        <h2 className="mt-10 text-center text-3xl">
          <b style={{ color: "rgb(50, 56, 66)" }}>Our benefits</b>
        </h2>
      </div>
      <div
        className="footer"
        style={{ marginTop: isSmallScreen ? "30px" : "" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
