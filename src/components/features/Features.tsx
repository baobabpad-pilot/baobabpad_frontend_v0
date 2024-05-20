import React from 'react'


interface FeaturesItem{
    title:string,
    imageSrc:string
}

interface FeatureProp{
     features:FeaturesItem[]
}


const Features :React.FC<FeatureProp>  = ({features}) => {

  return (
  <div className="w-full md:w-[44%] flex-col justify-center m-1 ">
      {features.map((feature, index) => (
        <div className="flex  items-center gap-x-1 border-l border-l-[#00BDD6] border-l-[7px] m-5 w-[90%]" key={index}>
              <p className="font-bold text-[1.5rem] w-[50%] ">{feature.title}</p>
              <img
                src={feature.imageSrc}
                alt=""
                className="rounded-[0.5rem] px-3"
              />
         </div>
      ))}
    </div>
  )
}

export default Features


