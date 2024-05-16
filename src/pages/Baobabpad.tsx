import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CiWifiOn } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaRegPaperPlane } from "react-icons/fa";
import Layout from "@/components/Layout";
import { TbStar } from "react-icons/tb";
import { TbNorthStar } from "react-icons/tb";
import { SlEmotsmile } from "react-icons/sl";
import { FaShareNodes } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { VscGraph } from "react-icons/vsc";
import { FaRegHandshake } from "react-icons/fa";
import { HiOutlineUserAdd } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";
import { ReactTyped } from "react-typed";
import Link from 'next/link';
import { useState } from "react";
import Internship  from "@/components/Impact/Internship"
import Mentorship  from "@/components/Impact/Mentorship"
import LinkedIn from "next-auth/providers/linkedin";
import { profile } from "console";







const Baobabpad = () => {

  const teamDetailsArray = [
    {
      image: "/brenda_mkeshwa_CEO.jpg",
      username: "Brenda Mkeshwa",
      position: "CEO",
      profile:"https://www.linkedin.com/in/brenda-mkwesha-mba-52599a75/"
    },
    {
      image: "/kenny.png",
      username: "Kenny Kaluiji",
      position: "Founder",
      profile:"https://www.linkedin.com/in/kenny-kaluiji-902a1576/"
    },
    {
      image: "/jacob_mwale_tech_lead.jpg",
      username: "Jacob Mwale",
      position: "Tech Lead",
      profile:"https://github.com/Alsaahir"

    },
    {
      image: "/chimwemwe_masona_tech_lead.png",
      username: "Chimwemwe Masona",
      position: "Tech Lead",
      profile:"https://github.com/Chimz-Codes-ZM"
    },
    {
      image: "/selma_hamutenya_product_manager.png",
      username: "Selma Hamutenya",
      position: "Product Manager",
      profile:""
      
    },
    {
      image: "/Mark_Ai.jpg",
      username: "Mark Njoroge",
      position: "AI Lead",
      profile:"https://github.com/NjoroGit"
    },
    {
      image: "/steve.jpg",
      username: "Stephen Ondieki",
      position: "Testing Lead",
      profile:"https://github.com/stevehotcodes"
    },
    {
      image: "/crispin_manda_product_manager.png",
      username: "Crispin Manda ",
      position: "Product Manager",
      profile:'https://github.com/CrispinManda'
    },
    {
      image: "/sidney_kipron_cloud_manager.png",
      username: "Sidney Kiprono ",
      position: "Cloud Manager",
      profile:"https://github.com/siddny",
    },
    {
      image: "/martin_mundia_cloud_manager.jpg",
      username: "Martin Mundia ",
      position: "Cloud Manager",
      profile:"https://github.com/MartinDeMundia",
    },
  ];

  const [showAllCards, setShowAllCards] = useState(false);
  const visibleCards = showAllCards
    ? teamDetailsArray
    : teamDetailsArray.slice(0, 2);
    
  const buttonLabel = showAllCards ? "See Less" : "See More";

  const toggleShowAllCards = () => {
    setShowAllCards(!showAllCards);
  };

  const adversoryTeamArray=[
    {
      image:'/Kofo Obasanjo.jpeg',
      username:'Kofo Blackshire',
      position:'Changemaker',
      LinkedIn:'https://www.linkedin.com/in/kofo-obasanjo-blackshire-80a302a4/'
    },
    {
      image:'/Henry Ogbuagu.jpeg',
      username:'Henry Ogbuagu',
      position:'Business Advisor',
      LinkedIn:'https://www.linkedin.com/in/henry-ogbuagu-b1156283/'
    },
    
    {
      image:'/Lamisi Gurah.jpeg',
      username:'Lamisi Gurah',
      position:'Femtech Advisor',
      LinkedIn:'https://www.linkedin.com/in/lamisi/'
    },
  
    {
      image:'/Yannick_Di_Mondo.jpg',
      username:'Yannick di Mondo',
      position:'Technology Advisor',
      LinkedIn:'https://www.linkedin.com/in/yannickdimondo/'
    },
    {
      image:'/Tish_Gilberts.jpeg',
      username:'Tish Gilbert',
      position:'Impact Advisor',
      LinkedIn:'https://www.linkedin.com/in/tish-gilbert-2b084497/'
    },
  ]
  /// for team adversory

  const [showAllCards1, setShowAllCards1] = useState(false);
  const visibleCards1 = showAllCards1
    ? adversoryTeamArray
    :  adversoryTeamArray.slice(0, 2);
    
  const buttonLabel1 = showAllCards1 ? "See Less" : "See More";

  const toggleShowAllCards1 = () => {
    setShowAllCards1(!showAllCards1);
  };
  ////


  const [showIntern, setShowIntern] = useState(false);
  const toggleInternship = () => {
      setShowIntern(!showIntern);  
    };
  const [ showMentor, setShowMentor] = useState(false);
  

  const toggleMentorship = () => {
      setShowMentor(!showMentor);  
      
    };



  return (
    <div className="min-h-screen flex flex-col">
      <Layout>
        {/* Hero section */}
        <div className="min-h-96 w-full bg-[#3a2ded] bg-opacity-90 pt-16 lg:px-24  px-18 flex flex-col items-center gap-24 area">
          
          <div className="justify-a items-center w-full pb-[80px]  mx-auto">
            <div className="flex justify-between w-[80%] mx-auto mt-[5%]">
                 <div className="rounded-full overflow-hidden  ">
                   <img src="/about-hero-image-1.png" alt="Team Member" />
                 </div>
                 <div className="rounded-full overflow-hidden  size-[-20%]">
                 <img
                 src="/about-hero-image-4.png"
                 alt="Team Member"
                 className="w-32  "
                  />
              
                 </div>
            </div>
            
            <p className="lg:text-4xl text-xl font-bold text-blue-200 my-[2%]  p-3 px-2 br-2 rounded-2xl w-[100%] mx-auto">
              
                <ReactTyped
                 strings={[
                  " Investing in Africa's Human & Social Capital Innovation"
       
                ]}
                typeSpeed={60}
                backSpeed={140}
                loop
                />
            </p>
            <div className="flex justify-between w-[50%] mx-auto mt-8">
              <div className="size-[20%]">
                <img src="/about-hero-image-2.png" alt="Team Member" />
              </div>
              <div className="rounded-full overflow-hidden size-[20%]">
                <img src="/about-hero-image-3.png" alt="Team Member" />
              </div>
            </div>
            
          </div>
        </div>
        {/* About us */}
        <section className=" md:flex gap-5 ">
          {/* Left side with About text */}
          <div className="md:pl-20 md:w-[40%] w-[80%] mx-auto mt-11 mb-11 w">
            <h1 className="text-6xl mb-8 text-gray-800 font-bold">About us</h1>
            <img className="mb-8" src="/underline.png" alt="underline" />
            <p className="mb-10 text-gray-700 text-2xl">
              Baobabpad is a Virtual Technology Village, that offers a dynamic
              and innovative platform with top African technology talent,
              providing state of art technology value creation for businesses.
            </p>

            <Link href="#why-baobabpad">
            <button className=" text-blue-500 text-2xl bg-transparent border border-blue-500 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition duration-300 px-20">
              Learn more
            </button>
            </Link>
            
          </div>

          

          {/*Right side with photo, mission and vission */}
          <div className="bg-cover bg-opacity-100 py-[6rem] h-[100%] md:w-[60%] w-[100%] mt-2 rounded-l-lg  " style={{ backgroundImage: `url('aboutbg.png')` }}>
            {/*Vission  div*/}
            <div className=" md:flex flex-row gap-[40%] mt-[50%] mb-[10%]">
              <p className="text-violet-600  mb-6 text-5xl font-bold  md:ml-[-60%] ml-5 mt-5">VISION</p>
              <div className="flex gap-4  bg-white opacity-90 w-[90%] mx-auto my-auto rounded-md h-[50%]">
                <img src="Lightbulb.png" alt="Lightbuld" className="size-[7%] my-auto" />
                <p className="p-4 shadow-md text-xl font-medium">Elevating African Talent, Virtually and Globally.</p>
              </div>
            </div>
            {/*Mission  div*/}
            <div className="md:flex flex-row gap-[35%] ">
              <p className="text-blue-600 text-5xl font-bold  md:ml-[-60%] ml-5 mt-6">MISSION</p>
              <div className="flex gap-4 bg-white opacity-90 w-[90%] mx-auto rounded-md h-[50%] my-auto">
                <img src="Handshake.png" alt="handshake" className="size-[7%] my-auto"/>
                <p className="p-4 shadow-md text-xl font-medium">Empowering African Talents through a bustling ecosystem that harnesses the immense potential of Africa's tech-experts to the world. </p>
              </div>
              
            </div>
            
          </div>      
        </section>
         {/* end of section */}

        {/* Start of  Village Management Team  */}

        <section className="border-t border-500 p-12">
          <div className=" p-2 flex flex-col gap-y-1 justify-center">
            <span className="font-bold text-600 text-[1.5rem]">
              Village Management Team
            </span>

            {/*  start of profile cards view for small screen */}
            <div className=" px-4  sm:flex gap-x-6   sm:flex-wrap justify-center md:hidden">
              {visibleCards.map((member, index) => (
                <div
                  key={index}
                  className="pt-2 w-[15rem] h-[20rem] flex flex-col items-center justify-center gap-y-4 my-12 border border-600  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer
                      "
                >
                  <img
                    src={member.image}
                    alt="Team Member"
                    className="w-[40%] h-[30%] rounded-[50%]"
                  />
                  <span className="font-bold font-700 text-xl">
                    {member.username}
                  </span>
                  <span className="text-[#9095A0]">{member.position}</span>
                  <button
                    type="button"
                    className="bg-[#C8F9FF] pt-2 pb-2 px-8 py-8 align-center  "
                  >
                    <a href={member.profile}>View Profile</a>
               
                  </button>
                  {/* <div className="bg-[#C8F9FF] text-white rounded-[100%] w-10 h-10 px-3 py-1  "><span className="text-black  text-2xl">+</span></div> */}
                </div>
              ))}
            </div>
            {/* end of profile cards view for small screen*/}
            <button
              onClick={() => setShowAllCards(!showAllCards)}
              className={`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:block   ${
                showAllCards ? "" : "md:hidden"
              }`}
            >
              {buttonLabel}
            </button>
              

              {/* Medium screen and above view for the team profile */}
             <div className="px-4 md:flex gap-x-6 md:flex-wrap md:justify-center hidden">
              {teamDetailsArray.map((member, index) => (
                <div
                  key={index}
                  className="pt-2 w-[15rem] h-[20rem]  flex flex-col items-center justify-center gap-y-4 my-12 border border-600 shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer"
                >
                  <img
                    src={member.image}
                    alt="Team Member"
                    className="w-[40%] h-[30%] rounded-[50%]"
                  />
                  <span className="font-bold font-700 text-xl">
                    {member.username}
                  </span>
                  <span className="text-[#9095A0]">{member.position}</span>
                  <button
                    type="button"
                    className="bg-[#C8F9FF] pt-2 pb-2 px-4 py-8 align-center w-[40%]"
                  >
                     <a href={member.profile}>View Profile</a>
                    
                  </button>
                </div>
              ))}
             </div>
            {/* end of the medium and above view for the team profile */}

          </div>
        </section>
        {/* start of Advisory Team/*/}
        <section className="border-t border-500 p-12">
          <div className=" p-2 flex flex-col gap-y-1 justify-center">
          <span className="font-bold text-600 text-[1.5rem]">Advisory Team </span>

            {/*  start of profile cards view for small screen */}
            <div className=" px-4  sm:flex gap-x-6   sm:flex-wrap justify-center md:hidden">
              {visibleCards1.map((member, index) => (
                <div
                  key={index}
                  className="pt-2 w-[15rem] h-[20rem] flex flex-col items-center justify-center gap-y-4 my-12 border border-600  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer
                      "
                >
                  <img
                    src={member.image}
                    alt="Team Member"
                    className="w-[40%] h-[30%] rounded-[50%]"
                  />
                  <span className="font-bold font-700 text-xl">
                    {member.username}
                  </span>
                  <span className="text-[#9095A0]">{member.position}</span>
                  <div  className=" pt-2 pb-2 px-8 py-8   flex flex-row "> 
                        <img src="/linkedIn.png" alt=""  className="px-2"/>
                        <a href={member.LinkedIn} className="hover:text-[#00BDD6] hover:text-underline" target="_blank"> 
                        View Profile</a>
                        </div>
                  
                  {/* <div className="bg-[#C8F9FF] text-white rounded-[100%] w-10 h-10 px-3 py-1  "><span className="text-black  text-2xl">+</span></div> */}
                </div>
              ))}
            </div>
            {/* end of profile cards view for small screen*/}
            <button
              onClick={() => setShowAllCards1(!showAllCards1)}
              className={`mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded sm:block   ${
                showAllCards1 ? "" : "md:hidden"
              }`}
            >
              {buttonLabel1}
            </button>
              

              {/* Medium screen and above view for the team profile */}
             <div className="px-4 md:flex gap-x-6 md:flex-wrap md:justify-center hidden">
              {adversoryTeamArray.map((member, index) => (
                <div
                  key={index}
                  className="pt-2 w-[15rem] h-[20rem]  flex flex-col items-center justify-center gap-y-4 my-12 border border-600 shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer"
                >
                  <img
                    src={member.image}
                    alt="Team Member"
                    className="w-[40%] h-[30%] rounded-[50%]"
                  />
                  <span className="font-bold font-700 text-xl">
                    {member.username}
                  </span>
                  <span className="text-[#9095A0]">{member.position}</span>
                  <div  className=" pt-2 pb-2 px-8 py-8   flex flex-row "> 
                        <img src="/linkedIn.png" alt=""  className="px-2"/>
                        <a href={member.LinkedIn} className="hover:text-[#00BDD6] hover:text-underline" target="_blank"> 
                        View Profile</a>
                        </div>
                </div>
              ))}
             </div>
            {/* end of the medium and above view for the team profile */}

          </div>
        </section>
       
         {/*End of Advisory Team*/}  
          {/* end of Village management team  */}
   
    

        {/* Start of why baobabpad section */}
        <section id="why-baobabpad" className="border-t border-500  md:flex items-center flex-wrap p-10 " >
            <div className="flex flex-col justify-center md:w-[60%] w-[100%] gap-y-5  p-4">
              <div className="flex flex-col ">
                  <span className="font-bold text-5xl text-[#323842]">Why Baobabpad</span>
              </div>

              <div className="mt-5">
                <span className="text-[1.5rem] ">Intuitive talent software development platform that lets you find and hire vetted talent, build teams, and connect seamless.</span>
              </div>

              <div className="flex flex-row gap-x-4 items-center">
                   <Link href="/Subscription">
                   <button className="w-[7rem] bg-[#00BDD6] text-white font-[1.125rem] p-[0.4rem] rounded-[1rem] hover:bg-white hover:text-[#00BDD6] hover:border hover:border-500"> Try Free</button>
                   </Link>
                   <Link href="#client">
                   <button className="w-[7rem]  text-[#9095A0] border border-[#9095A0]  font-[1.125rem] p-[0.4rem] rounded-[1rem] cursor-pointer hover:bg-gray-200 hover:border hover:border-500"> Learn more</button>
                   </Link> 
                   
              </div>
  
             {/*Right with phone in hand*/}       
            </div>           
              <div className="    md:w-[22rem] w-[18rem] md:h-[27rem] h-[15rem] relative z-99 ml-11 mb-8">
                 <img src="/hand_holding_phone.png" alt="hand holiding a phone"  />
              </div>
            
        </section>
        {/* End of why baobabpad section */}

        {/* Start of  Clients benefits and  devops benefits */}
          <section id="client" className="border-t border-500 flex  flex-row justify-center w-[100%] items-center flex-wrap  gap-x-7  gap-y-10 p-10">
            <div className=" md:text-lg text-sm border border-white-100 bg-[#EBFDFF] flex flex-col w-[30.625rem] md:h-[22.625rem] h-[25.625rem] p-4 ">
                <span className="font-bold md:text-[2rem] text-[1.5rem] ml-[35%] mt-4">Client </span>
                <span className="mb-4 text-justify ">Baobabpad is a membership based platform, for our clients this means no additional costs for scaling your product development. The annual membership fee is exclusive and comes with perks and benefits, such as:</span>
                <ul className=" pl-4">
                    <li className="mb-2 flex  "><span className="text-blue-400 size-40 w-[6%] mr-4 h-[6%] my-auto md:text-2xl text-xl" ><FiPlus /></span> Acccess to remote team management support </li>
                    <li className="mb-2  flex"> <span className="text-blue-400 size-40 w-[6%] mr-4 h-[6%] my-auto md:text-2xl text-xl" ><FiPlus /></span>Culture and team building excellence across locations</li>
                    <li className="mb-2  flex"> <span className="text-blue-400 size-40 w-[6%] mr-4 h-[6%] my-auto md:text-2xl text-xl" ><FiPlus /></span>Merit-reward infrastructure for our talent</li>
                    <li className="mb-2  flex"> <span className="text-blue-400 size-40 w-[6%] mr-4 h-[6%] my-auto md:text-2xl text-xl" ><FiPlus /></span>High return on investment and profitability</li>
                </ul>
            </div>

            <div className="md:text-lg text-sm border border-white-100 bg-[#F5F2FD] flex flex-col w-[30.625rem] h-[22.625rem] p-8">
                <span className="font-bold md:text-[2rem] text-[1.5rem] text-2xl ml-[40%]"> DevOps</span>
                <span className="text-justify ">Working with Baobabpad DevOps empowers our clients to faster software delivery by streamlining the development and deployment process. Our clients are able  to optimize new features and products to market more quickly. Our competitive  business advantage is: </span>

            <div className="flex flex-row justify-around">
            <div className="flex flex-col justify-center">
                   <div className="flex  items-center ml-1 p-2">
                      <VscGraph />
                      <span className="p-2">Cost Effective</span>
                   </div>

                     <div>
                        <span className="p-4 md:text-[2rem] text-[1.5rem] font-bold font-700">+45%</span>
                     </div>
              </div>

              <div className="flex flex-col justify-center">
                   <div className="flex  items-center ml-1 p-2">
                   <FaRegHandshake />
                      <span className="p-2">Quality Assurance</span>
                   </div>
                   <div>
                        <span className="p-4 md:text-[2rem] text-[1.5rem] font-bold font-700">100%</span>
                   </div>
              </div>
            </div>

            


            </div>

          </section>

          {/* End of  Clients benefits and  devops benefits */}

          {/* Start of team building and project management section */}
          <section className="border-t border-500 flex  flex-row justify-center w-[100%] items-center flex-wrap  gap-x-7  gap-y-10 p-10">
            <div className="md:text-lg text-sm flex flex-col items-center text-center w-[30.625rem] h-[23.625rem] p-4 bg-violet-200 my-8 ">
                 
                  <span className=" md:text-[2rem] text-[1.5rem] font-bold md:mt-1 mt-9">Timezone</span>
                  <span className="text-[1.20rem] py-3 mt-1 text-justify md:text-lg text-sm">Improved collaboration across global timezoes. Baobabpad's collaboration features bridge the time zone gap by providing a centralized platform for communication and project management in real time. </span>
                  <div><HiOutlineUserAdd className="text-[#00BDD6] text-[3rem]  "/></div>
                  <span className="text-[#00BDD6] md:text-[2rem] text-[1.5rem] py-4">Timezone</span>
             </div>
             <div className="md:text-lg text-sm flex flex-col items-center text-center w-[30.625rem] h-[23.625rem] p-4  bg-[#ead1ad] ">               
                  <span className=" font-bold md:text-[2rem] text-[1.5rem] md:mt-1 mt-9">Management</span>
                  <span className="text-[1.20rem] py-5 mt-1 text-justify md:text-lg text-sm">
                  Baobabpad provides dedicated In-house Project Managers and Account Managers to our clients with limited human resources, to manage project workflows and project workstreams. Our membership subscription comes with a full suite of project and account management support. 
                  </span>
                  <FaPeopleGroup  className="text-[#4069E5] text-[3rem] "/>
                  <span className="text-[#4069E5] md:text-[2rem] text-[1rem]">Project Management</span>
             </div>
          </section>
          {/* End of team building and project management section */}
          {/* Start of message from  our village  */}
          <section className="hidden md:flex flex-col justify-center  ">
              <div className="flex flex-row justify-center">
              <span className="align-center font-extrabold font text-[3rem]">Message from Our Village</span>
              </div>
           <div className="flex justify-end p-4" >
              <button className="border border-[#00BDD6] p-2 text-[#00BDD6] text-[0.875rem] rounded-[1rem] hover:bg-[#00BDD6] hover:text-[#fff]">View More ...</button>
           </div>

           <div className="flex justify-center  flex-wrap gap-x-4 gap-y-11 w-[90%] mx-auto mb-11">
             <div className=" hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
             < CiPlay1  className="text-[2rem] text-[#000] absolute  "/>
                <img src="/our-village-image1.png" alt="woman smiling photo 2" className="w-[32rem] h-[25rem] "  />
             </div>
              <div className=" hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
              < CiPlay1  className="text-[2rem] text-[#000] absolute  "/>      
                <img src="/our-village-Image.png" alt="woman smiling photo 1" className="w-[32rem] h-[25rem] " />
              </div>
          
                
           </div>




          </section>

          {/* End of message from our village  */}

          {/* Start of the impact section */}
          <section className="hidden md:flex flex-col justify-center mt-7 ">
              <div className="flex flex-row justify-center">
              <span className="align-left font-extrabold font text-[3rem]">Our Impact</span>
              </div>
           <div className="flex justify-end p-4" >
              <button className="border border-[#00BDD6] p-2 text-[#00BDD6] text-[0.875rem] rounded-[1rem] hover:bg-[#00BDD6] hover:text-[#fff]">View More ...</button>
           </div>

           <div className="flex justify-center  flex-wrap gap-x-7 gap-y-7  ">
             <div className=" flex flex-col p-4 gap-y-5 shadow-2xl hover:transform hover:scale-100 transition-transform duration-300 hover:cursor-pointer">
          
                <img src="/pascaline-colored.jpg" alt="Pascaline's photo"  className="w-[19rem] mx-auto " />
                  {/* Link to Internship page */}
                <Link  href="#Internship" className="display-none " onClick={toggleInternship}>
                 <span className="text-[1.5rem] font-bold hover hover:text-[#00BDD6] "><p className="text-center">Virtual Intership Program </p></span>
                </Link>
                {showIntern && <Internship />}
            
                {/* end of Internship connection code */}

                <div >
                   <span className="bg-[#EBFDFF] text-[#00BDD6] text-[0.7rem] p-1 rounded-[1rem]">Impact</span>
                </div>
               
             </div>
              <div className="flex flex-col p-4 gap-y-5 shadow-2xl hover:transform hover:scale-100 transition-transform duration-300 hover:cursor-pointer ">
                <img src="/kenny.png" alt="Kenny's photo" className="w-[19rem] h-[17rem] mx-auto "  />
                <Link  href="#Mentorship" onClick={toggleMentorship}>
                <span id="pasi"className="text-[1.5rem] font-bold hover hover:text-[#00BDD6]  w-[100%]"><p className="  text-center ">Growth Mentorship</p></span>
                </Link>
                {showMentor && <Mentorship />}
                

                <div>
                     <span className="bg-[#F1F4FD] text-[#4069E5] text-[0.7rem] p-1 rounded-[1rem]">Human Capital</span>
                </div>
              </div>
              
                
           </div>

          </section>

          {/* End of the impact section */}

          {/* Start of featured by section */}
          <section className="bg-[#F8F9FA] flex flex-col items-center mt-8 p-6 gap-y-4 ">

            <div>
              <span className="text-[2rem] font-medium text-[#341473] mb-">Featured by:</span>
            </div>

            <div className="flex md:flex-col-3 flex-row-3 gap-[10%] ">

              <div className="w-[20%] ml-12 md:mb-5  ">
                  <div className="md:h-[75%] h-[70%] w-full shadow-2xl hover:transform hover:scale-110 transition-transform duration-300">
                  <img src="/NF.jpg" alt=" startup extreme logo" className="w-full h-full" />
                  </div>
                  <div className="mt-7">
                  <Link href="https://open.spotify.com/episode/0iV5UHXUqLtg7Z9gKEluNF?si=cdCQIVtHQS2x2lXGy-XsKg" className="mt-4">
                  <span className="text-xl font-medium text-gray-800 mt-11 hover hover:text-[#00BDD6] h-[40%] my-auto">Next frontier</span>
                  </Link>
                  </div>
               
              </div>

              <div className="w-[20%]">
                  <div className="h-[70%] w-full  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300">
                  <img src="/Nature.jpg" alt="nature backend Logo" className="w-full h-full rounded-lg"/>
                  </div>
                  <div className="mt-7">
                  <Link href="https://naturebacked.com/episode/how-to-fix-carbon-markets-with-kenny-kaluiji" className="mt-4">
                  <span className="text-xl font-medium text-gray-800 mt-11 hover hover:text-[#00BDD6] h-[40%] my-auto">Nature Backend</span>
                  </Link>
                  </div>
               
              </div>

              <div className="w-[20%]">
                  <div className="h-[70%] w-full  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300">
                  <img src="/StartUp.jpg" alt=" startup extreme logo" className="w-full h-full rounded-lg"/>
                  </div>
                  <div className="mt-7">
                  <Link href="https://www.startupextreme.co/" className="mt-4">
                  <span className="text-xl font-medium text-gray-800 mt-11 hover hover:text-[#00BDD6] h-[40%] my-auto">Startup Extreme</span>
                  </Link>
                  </div>
               
              </div>

              

            </div>
              


          </section>

          {/* End of featured by section */}

      </Layout>
    </div>
  );
};

export default Baobabpad;
