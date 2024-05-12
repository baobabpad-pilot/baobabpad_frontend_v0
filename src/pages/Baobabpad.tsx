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













const Baobabpad = () => {

  const teamDetailsArray=[
    {
      image:'/brenda_mkeshwa_CEO.jpg',
      username:'Brenda Mkeshwa',
      position:'CEO'
    },
    {
      image:'/kenny.png',
      username:'Kenny Kaluiji',
      position:'Founder'
    },
    {
      image:'/jacob_mwale_tech_lead.jpg',
      username:'Jacob Mwale',
      position:'Tech Lead'
    },
    {
      image:'/chimwemwe_masona_tech_lead.png',
      username:'Chimwemwe Masona',
      position:'Tech Lead'
    },
    {
      image:'/selma_hamutenya_product_manager.png',
      username:'Selma Hamutenya',
      position:'Product Manager'
    },
    {
      image:'/Mark_Ai.jpg',
      username:'Mark Njoroge',
      position:'AI Lead'
    },
    {
      image:'/steve.jpg',
      username:'Stephen Ondieki',
      position:'Testing Lead'
    },
    {
      image:'/crispin_manda_product_manager.png',
      username:'Crispin Manda ',
      position:'Product Manager'
    },
    {
      image:'/sidney_kipron_cloud_manager.png',
      username:'Sidney Kiprono ',
      position:'Cloud Manager'
    },
    {
      image:'/martin_mundia_cloud_manager.jpg',
      username:'Martin Mundia ',
      position:'Cloud Manager'
    },
  ]

  const adversoryTeamArray=[
    {
      image:'/Kofo Obasanjo.jpeg',
      username:'Kofo Blackshire',
      position:'Change maker',
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
      position:'Femtech ',
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
      username:'Tish Gilberts',
      position:'Impact',
      LinkedIn:'https://www.linkedin.com/in/tish-gilbert-2b084497/'
    },
  ]


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
            <button className=" text-blue-500 text-2xl bg-transparent border border-blue-500 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-full transition duration-300 px-20">
              Learn more
            </button>
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
              <span className="font-bold text-600 text-[1.5rem]">Village Management Team</span>
              
                   
                 
                 {/*  start of profile cards */}
                 <div className=" px-4  flex gap-x-6  flex-wrap justify-center">
                 

                 {teamDetailsArray.map((member, index)=>(
                      <div key={index} className="pt-2 w-[15rem] h-[20rem] flex flex-col items-center justify-center gap-y-4 my-12 border border-600  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer
                      ">
                         <img
                         src={member.image}
                         alt="Team Member"
                         className="w-[40%] h-[30%] rounded-[50%]"
                      />
                      <span className="font-bold font-700 text-xl">{member.username}</span>
                      <span className="text-[#9095A0]">{member.position}</span>
                      <button type="button" className="bg-[#C8F9FF] pt-2 pb-2 px-8 py-8 align-center ">View Profile</button>
                      {/* <div className="bg-[#C8F9FF] text-white rounded-[100%] w-10 h-10 px-3 py-1  "><span className="text-black  text-2xl">+</span></div> */}
                                              
                   </div>
                    ))}               
                 </div>
                 {/* end of profile cards */}
          </div>
        </section>
        <section className="border-t border-500 p-12">
          <div className=" p-4 flex flex-col gap-y-1 justify-center">
              <span className="font-bold text-600 text-[1.5rem]">Advisory Team</span>
              
             
                 {/*  start of profile cards */}
                 <div className=" px-4  flex gap-x-6  flex-wrap justify-center">
                 

                 {adversoryTeamArray.map((member, index)=>(
                      <div key={index} className="pt-2 w-[18rem] h-[20.75rem] flex flex-col items-center justify-center gap-y-4 my-12 border border-600  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer ">
                          <img
                          src={member.image}
                          alt="Team Member"
                         className="w-[40%] h-[30%] rounded-[50%]"
                       />
                       <span className="font-bold font-700 text-xl">{member.username}</span>
                        <span className="text-[#9095A0]">{member.position}</span>
                        <div  className=" pt-2 pb-2 px-8 py-8   flex flex-row "> 
                        <img src="/linkedIn.png" alt="" />
                        <a href={member.LinkedIn} className="hover:text-[#00BDD6] hover:text-underline"> 
                        View Profile</a>
                        </div>
                        {/* <div className="bg-[#C8F9FF] text-white rounded-[100%] w-10 h-10 px-3 py-1  "><span className="text-black  text-2xl">+</span></div> */}
                                              
                    </div>

                    ))}      
                  
                 </div>
                 {/* end of profile cards */}
              

          </div>
        </section>
          {/* end of Village management team  */}
   
    

        {/* Start of why baobabpad section */}
        <section className="border-t border-500  md:flex items-center flex-wrap p-10">
            <div className="flex flex-col justify-center md:w-[60%] w-[100%] gap-y-5  p-4">
              <div className="flex flex-col ">
                  <span className="text-[#00BDD6]">Officia esse deserunt magna</span>
                  <span className="font-bold text-5xl text-[#323842]">Why Baobabpad</span>
              </div>

              <div className="mt-5">
                <span className="text-[1.5rem] ">Intuitive talent software development platform that lets you find and hire vetted talent, build teams, and connect seamless.</span>
              </div>

              <div className="flex flex-row gap-x-4 items-center">
                   <button className="w-[7rem] bg-[#00BDD6] text-white font-[1.125rem] p-[0.4rem] rounded-[1rem] hover:bg-white hover:text-[#00BDD6] hover:border hover:border-500"> Try Free</button>
                   <span className="text-[#9095A0] font-[1.125rem] cursor-pointer hover:bg-[#00BDD6] hover:border  hover:text-[#FFF] hover:p-[0.4rem]  hover:rounded-[1rem]">Learn More</span>
              </div>
  
             {/*Right with phone in hand*/}       
            </div>           
              <div className="    md:w-[22rem] w-[18rem] md:h-[27rem] h-[15rem] relative z-99 ml-11 mb-8">
                 <img src="/hand_holding_phone.png" alt="hand holiding a phone"  />
              </div>
            
        </section>
        {/* End of why baobabpad section */}

        {/* Start of  Clients benefits and  devops benefits */}
          <section className="border-t border-500 flex  flex-row justify-center w-[100%] items-center flex-wrap  gap-x-7  gap-y-10 p-10">
            <div className="border border-white-100 bg-[#EBFDFF] flex flex-col w-[30.625rem] h-[22.625rem] p-4 ">
                <span className="font-bold text-3xl ml-[35%]">Client </span>
                <span className="mb-4">Baobabpad is a membership based platform, for our clients this means no additional costs for scaling your product development. The annual membership fee is exclusive and comes with perks and benefits, such as:</span>
                <ul className="list-disc pl-8">
                    <li className="mb-2">Acccess to remote team management support </li>
                    <li className="mb-2">Culture and team building excellence across locations</li>
                    <li className="mb-2">Merit-reward infrastructure for our talent</li>
                    <li className="mb-2">High return on investment and profitability</li>
                </ul>
            </div>

            <div className="border border-white-100 bg-[#F5F2FD] flex flex-col w-[30.625rem] h-[22.625rem] p-8">
                <span className="font-bold text-3xl ml-[40%]"> DevOps</span>
                <span>adipisicing elit. Quidem officiis explicabo quos dolorem perspiciatis vel asperiores odit harum, itaque quas maxime eveniet numquam hic, iste error omnis! Ad, rerum provident</span>

            <div className="flex flex-row justify-around">
            <div className="flex flex-col justify-center">
                   <div className="flex  items-center ml-1 p-2">
                      <VscGraph />
                      <span className="p-2">Cost Effective</span>
                   </div>

                     <div>
                        <span className="p-4 text-[2rem] font-bold font-700">+40%</span>
                     </div>
              </div>

              <div className="flex flex-col justify-center">
                   <div className="flex  items-center ml-1 p-2">
                   <FaRegHandshake />
                      <span className="p-2">Quality Assurance</span>
                   </div>
                   <div>
                        <span className="p-4 text-[2rem] font-bold font-700">100%</span>
                   </div>
              </div>
            </div>

            


            </div>

          </section>

          {/* End of  Clients benefits and  devops benefits */}

          {/* Start of team building and project management section */}
          <section className="flex flex-row justify-evenly items-center flex-wrap p-10">
            <div className="flex flex-col items-center text-center  w-[30rem] h-[25rem] p-2 bg-violet-200 my-8">
                 
                  <span className=" text-[2rem] font-bold">Timezone</span>
                  <span className="text-[1.25rem] py-2">Improved collaboration across global timezoes. Baobabpad's collaboration features bridge the time zone gap by providing a centralized platform for communication and project management in real time. </span>
                  <div><HiOutlineUserAdd className="text-[#00BDD6] text-[3rem]  "/></div>
                  <span className="text-[#00BDD6] text-[2rem] py-4">Timezone</span>
             </div>
             <div className="flex flex-col items-center text-center w-[25rem] h-[25rem] p-2">               
                  <span className=" font-bold text-[2rem]">Management</span>
                  <span className="text-[1.25rem]">
                  Baobabpad provides dedicated In-house Project Managers and Account Managers to our clients with limited human resources, to manage project workflows and project workstreams. Our membership subscription comes with a full suite of project and account management support. 
                  </span>
                  <FaPeopleGroup  className="text-[#4069E5] text-[3rem] "/>
                  <span className="text-[#4069E5] text-[2rem]">Project Management</span>
             </div>
          </section>
          {/* End of team building and project management section */}
          {/* Start of message from  our village  */}
          <section className="flex flex-col justify-center  ">
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
          <section className="flex flex-col justify-center mt-7 ">
              <div className="flex flex-row justify-center">
              <span className="align-left font-extrabold font text-[3rem]">Our Impact</span>
              </div>
           <div className="flex justify-end p-4" >
              <button className="border border-[#00BDD6] p-2 text-[#00BDD6] text-[0.875rem] rounded-[1rem] hover:bg-[#00BDD6] hover:text-[#fff]">View More ...</button>
           </div>

           <div className="flex justify-center  flex-wrap gap-x-7 gap-y-7  ">
             <div className=" flex flex-col p-4 gap-y-5 shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
          
                <img src="/Pascaline 1.png" alt="Pascaline's photo"  className="w-[19rem] " />
                  {/* Link to Internship page */}
                <Link  href="#Internship" className="display-none" onClick={toggleInternship}>
                 <span className="text-[1.5rem] font-bold hover hover:text-[#00BDD6]">Virtual Intership Program </span>
                </Link>
                {showIntern && <Internship />}
            
                {/* end of Internship connection code */}

                <div >
                   <span className="bg-[#EBFDFF] text-[#00BDD6] text-[0.7rem] p-1 rounded-[1rem]">Impact</span>
                </div>
               
             </div>
              <div className="flex flex-col p-4  gap-y-5 shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer ">
                <img src="/kenny.png" alt="Kenny's photo" className="w-[19rem] h-[15rem]"  />
                <Link  href="#Mentorship" onClick={toggleMentorship}>
                <span className="text-[1.5rem] font-bold hover hover:text-[#00BDD6] ">Growth Mentorship</span>
                </Link>
                {showMentor && <Mentorship />}
                <div>
                     <span className="bg-[#F1F4FD] text-[#4069E5] text-[0.7rem] p-1 rounded-[1rem]">Human Capital</span>
                </div>
              </div>
              {/*
              <div className="flex flex-col p-4 gap-y-5 shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer">
                <img src="/team_haniken.png" alt="A boy holding a ball photo" className="w-[19rem]" />
                <span className="text-[1.5rem] font-bold">Team Hanniken</span>
               <div>
                   <span className="bg-[#EBFDFF] text-[#00BDD6] text-[0.7rem] p-1 rounded-[1rem]">Sports</span>
               </div>
                  </div>*/}
              
          
                
           </div>




          </section>

          {/* End of the impact section */}

          {/* Start of featured by section */}
          <section className="bg-[#F8F9FA] flex flex-col items-center mt-8 p-6 gap-y-4 ">

            <div>
              <span className="text-[2rem] font-medium text-[#341473]">Featured by:</span>
            </div>

            <div className="flex flex-row gap-x-8 justify-between">
            <div className="flex flex-row ">
                  <img src="/apex-fusion-icon-1.png" alt=" apex fusion icon" />
              
              </div>
              <div className="flex flex-row">
                  <img src="/nebulla-dynamics-1.png" alt="nebulla dynamics icon" />
               
              </div>

              <div className="flex flex-row">
                  <img src="/virtuoso-icon-1.png" alt=" virtuoso icon" />
               
              </div>

              <div className="flex flex-row">
                  <img src="/quantum-icon-1.png" alt="quantum icon" />
            
              </div>

              <div className="flex flex-row">
                  <img src="/pinnacle-nexus-icon-1.png" alt="pinnacle-nexus icon" />
               
              </div>
              
              <div className="flex flex-row">
                  <img src="/elysium-global-icon.png" alt="elysium-global icon" />
                
              </div>
            </div>
              


          </section>

          {/* End of featured by section */}




      </Layout>
    </div>
  );
};

export default Baobabpad;
