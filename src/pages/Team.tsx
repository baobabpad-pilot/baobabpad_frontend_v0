import Layout from '@/components/Layout'
import React from 'react'

const Team = () => {
    const teamDetailsArray=[
        {
          image:'/brenda_mkeshwa_CEO.jpg',
          username:'Brenda Mkwesha',
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




  return (
    <Layout>
         <section className="border-t border-500 p-12">
          <div className=" p-2 flex flex-col gap-y-1 justify-center">
              <span className="font-bold text-600 text-[1.5rem]">Village Management Team</span>
              
                   
                 
                 {/*  start of profile cards */}
                 <div className=" px-4  flex gap-x-6  flex-wrap justify-center">
                 

                 {teamDetailsArray.map((member, index)=>(
                      <div key={index} className="pt-2 w-[25rem] h-[30rem] flex flex-col items-center justify-center gap-y-4 my-12 border border-600  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer
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
                 

                 {teamDetailsArray.map((member, index)=>(
                      <div key={index} className="pt-2 w-[23rem] h-[30.75rem] flex flex-col items-center justify-center gap-y-4 my-12 border border-600  shadow-2xl hover:transform hover:scale-110 transition-transform duration-300 hover:cursor-pointer
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

  
</Layout>
  )
}

export default Team