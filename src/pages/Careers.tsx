import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import styles from "../styles/careers.module.css";
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
                  src={"/user3.png"}
                  width={70}
                  height={70}
                  alt="Picture of the author"
                />
              </div>
              {/* Image 2 */}
              <div className="img2">
                <Image
                  src={"/user4.png"}
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
                  src={"/user2.png"}
                  width={60}
                  height={60}
                  alt="Picture of the author"
                />
              </div>
              {/* Image 2 */}
              <div className="img2 mt-5 " style={{ marginRight: "20px" }}>
                <Image
                  src={"/user1.png"}
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
        style={{ marginTop: isSmallScreen ? "800px" : "" }}
      >
        <h2 className="mt-10 text-center text-3xl">
          <b style={{ color: "rgb(50, 56, 66)" }}>Our benefits</b>
        </h2>

        <div className={styles.part}>
          <div className="container mx-auto px-4 lg:px-20 mt-10 flex flex-row justify-between items-center flex-wrap">
            <div className="img1">
              <img src="/benefits (5).png" alt="" className="w-full h-auto" />
            </div>
            {/* Image 2 */}
            <div className="img2">
              <img src="benefits (4).png" alt="" className="w-full h-auto" />
            </div>
            <div className="img2">
              <img src="benefits (3).png" alt="" className="w-full h-auto" />
            </div>
          </div>
          <div className="container mx-auto px-4 lg:px-20 mt-10 flex flex-row justify-between items-center flex-wrap">
            <div className="img1">
              <img src="/benefits (2).png" alt="" className="w-full h-auto" />
            </div>
            {/* Image 2 */}
            <div className="img2">
              <img src="benefits (6).png" alt="" className="w-full h-auto" />
            </div>
            <div className="img2">
              <img src="benefits (1).png" alt="" className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-10 text-center text-3xl">
        <b style={{ color: "rgb(50, 56, 66)" }}>Office Space</b>
      </h2>

      <div className="container flex mx-auto px-4 lg:px-20 mt-10 flex flex-row justify-between items-center flex-wrap">
        <div
          className="flex-auto bg-red-600 w-46 bg-cover bg-center"
          style={{
            height: "200px",
            marginRight: "5px",
            backgroundImage:
              "url('https://i.pinimg.com/564x/b0/aa/71/b0aa712b004c5458e8ff7fa22394f2e4.jpg')",
          }} 
        ></div>
        <div
          className="flex-auto bg-blue-600 w-64 bg-cover bg-center"
          style={{
            height: "200px",
            marginLeft: "5px",
            backgroundImage:
              "url('https://i.pinimg.com/564x/82/32/14/823214d1f8e66df38a13465358982924.jpg')",
          }} 
        ></div>
      </div>

      <div className="container flex mx-auto px-4 lg:px-20 mt-5 flex flex-row justify-between items-center flex-wrap">
        <div
          className="flex-auto w-64 bg-cover bg-center"
          style={{
            height: "400px",
            marginRight: "5px",
            backgroundImage:
              "url('https://i.pinimg.com/564x/59/16/6d/59166da12bcdd1a621b02381413ee256.jpg')",
          }} // Adjust margin-right as needed
        ></div>

        <div
          className="flex-auto  w-64"
          style={{ marginRight: "5px" }} // Adjust margin-right as needed
        >
          <img src="/Image33 (2).png" alt="" height="400px" />
        </div>
        <div
          className="flex-auto  w-64 rounded"
          style={{}} // Adjust height as needed
        >
          <img src="/Image33 (1).png" alt="" height="400px" />
        </div>
      </div>

      <h2 className="mt-10 text-center text-3xl">
        <b style={{ color: "rgb(50, 56, 66)" }}>Stories</b>
      </h2>

      <div className="container flex mx-auto px-4 lg:px-20 mt-10 flex flex-row justify-between items-center flex-wrap">
        <div
          className="flex-auto w-46"
          style={{ height: "200px", marginRight: "5px" }}
        >
          <iframe
            className="w-full h-full"
            src="https://drive.google.com/file/d/1ZRC8S7SBO8E8fT_6wvM9z04gAZeUCawN/preview"
            title="Google Drive video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div
          className="flex-auto w-64"
          style={{ height: "200px", marginLeft: "5px" }}
        >
          <iframe
            className="w-full h-full"
            src="https://drive.google.com/file/d/1SAkENMU536n9lh9cbPFE8mr_6zBdRc1G/preview"
            title="Google Drive video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="container flex mx-auto px-4 lg:px-20 mt-5 flex flex-row justify-between items-center flex-wrap">
        <div
          className="flex-auto w-64"
          style={{ height: "400px", marginRight: "5px" }}
        >
          <iframe
            className="w-full h-full"
            src="https://drive.google.com/file/d/1nhnhYopT172YPmDfpiNit4YdCEixEkx4/preview"
            title="Google Drive video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div
          className="flex-auto  w-64"
          style={{ marginRight: "5px" }} 
        >
          <img src="/Image33 (2).png" alt="" height="400px" />
        </div>
        <div
          className="flex-auto  w-64 rounded"
          style={{}} // Adjust height as needed
        >
          <img src="/Image33 (1).png" alt="" height="400px" />
        </div>
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
