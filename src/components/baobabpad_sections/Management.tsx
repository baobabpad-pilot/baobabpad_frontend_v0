import React, { useState } from 'react'

const Management = () => {

    
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
  return (
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
                    className="bg-[#C8F9FF] pt-2 pb-2 px-8 py-8 align-center "
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
                  className="pt-2 w-[15rem] h-[20rem] flex flex-col items-center justify-center gap-y-4 my-12 border border-600 shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer"
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
                    className="bg-[#C8F9FF] pt-2 pb-2 px-8 py-8 align-center"
                  >
                     <a href={member.profile}>View Profile</a>
                    
                  </button>
                </div>
              ))}
             </div>
            {/* end of the medium and above view for the team profile */}

          </div>
        </section>
  )
}

export default Management