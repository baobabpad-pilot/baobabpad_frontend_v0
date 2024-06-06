import React from 'react'

const AdvisoryTeam = () => {
    const adversoryTeamArray = [
        {
          image: "/Kofo Obasanjo.jpeg",
          username: "Kofo Blackshire",
          position: "Changemaker",
          LinkedIn:
            "https://www.linkedin.com/in/kofo-obasanjo-blackshire-80a302a4/",
        },
        {
          image: "/Henry Ogbuagu.jpeg",
          username: "Henry Ogbuagu",
          position: "Growth Advisor",
          LinkedIn: "https://www.linkedin.com/in/henry-ogbuagu-b1156283/",
        },
    
        {
          image: "/Lamisi Gurah.jpeg",
          username: "Lamisi Gurah",
          position: "Femtech Advisor",
          LinkedIn: "https://www.linkedin.com/in/lamisi/",
        },
    
        {
          image: "/Yannick_Di_Mondo.jpg",
          username: "Yannick di Mondo",
          position: "Technology Advisor",
          LinkedIn: "https://www.linkedin.com/in/yannickdimondo/",
        },
        {
          image: "/Tish_Gilberts.jpeg",
          username: "Tish Gilbert",
          position: "Impact Advisor",
          LinkedIn: "https://www.linkedin.com/in/tish-gilbert-2b084497/",
        },
      ];

  return (
    <section className="border-t border-500 p-12">
          <div className=" p-4 flex flex-col gap-y-1 justify-center">
            <span className="font-bold text-600 text-[1.5rem]">
              Advisory Team
            </span>

            {/*  start of profile cards */}
            <div className=" px-4  flex gap-x-6  flex-wrap justify-center">
              {adversoryTeamArray.map((member, index) => (
                <div
                  key={index}
                  className="pt-2 w-[15rem] h-[20rem] flex flex-col items-center justify-center gap-y-4 my-12 border border-600  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer "
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
                  <div className=" pt-2 pb-2 px-8 py-8   flex flex-row ">
                    <img src="/linkedIn.png" alt="" className="px-2" />
                    <a
                      href={member.LinkedIn}
                      className="hover:text-[#00BDD6] hover:text-underline"
                      target="_blank"
                    >
                      View Profile
                    </a>
                  </div>
                  {/* <div className="bg-[#C8F9FF] text-white rounded-[100%] w-10 h-10 px-3 py-1  "><span className="text-black  text-2xl">+</span></div> */}
                </div>
              ))}
            </div>
            {/* end of profile cards */}
          </div>
        </section>
  )
}

export default AdvisoryTeam