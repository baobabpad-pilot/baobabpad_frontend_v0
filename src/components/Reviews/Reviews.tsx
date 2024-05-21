import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
      };

      const settings2 = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:1,
        slidesToScroll: 1,
      };




  return (
    <div>
    <div className="hidden w-full md:w-[100%] mt-1 md:h-[60vh] md:flex flex-col bg-[#00BDD6] items-center p-5 gap-5 ">
    <h3 className="text-white text-2xl font-semibold mb-4">Reviews</h3>
    
    {/* Review slider */}
    <Slider
      {...settings}
      className="w-full md:w-4/5 mx-auto "
    >
      <div className="md:w-1/3 w-full m-3 border border-white p-6 bg-white flex flex-col justify-between h-[calc(2 * 2rem)] gap-">
        <div className="flex items-center space-x-2">
          <img src="/kenny.png" alt="" className="rounded-full w-12" />
          <p className="text-sm">Ashley Robinson</p>
        </div>
        <p className="text-sm mt-4">
          I highly recommend a membership with baobabpad, the support on managing
          our cloud backend was excellent.
        </p>
      </div>

      <div className="md:w-1/3 w-full m-3 border border-gray-300 p-6 bg-white flex flex-col justify-between h-[calc(2 * 2rem)]">
        <div className="flex items-center space-x-2">
          <img src="/kenny.png" alt="" className="rounded-full w-12" />
          <p className="text-sm">Ashley Robinson</p>
        </div>
        <p className="text-sm mt-4">
          I highly recommend a membership with baobabpad, the support on managing
          our cloud backend was excellent.
        </p>
      </div>

      <div className="md:w-1/3 w-full m-3 border border-gray-300 p-6 bg-white flex flex-col justify-between h-[calc(2 * 2rem)]">
        <div className="flex items-center space-x-2">
          <img src="/kenny.png" alt="" className="rounded-full w-12" />
          <p className="text-sm">Ashley Robinson</p>
        </div>
        <p className="text-sm mt-4">
          I highly recommend a membership with baobabpad, the support on managing
          our cloud backend was excellent.
        </p>
      </div>
    </Slider>
    
  </div>

  {/*slide for small size */}

  <div className=" md:hidden w-full md:w-[100%] mt-1 md:h-[50vh] flex flex-col bg-[#00BDD6] items-center p-5 gap-5 ">
    <h3 className="text-white text-2xl font-semibold mb-4">Reviews</h3>
    
    {/* Review slider */}
    <Slider
      {...settings2}
      className="w-full md:w-4/5 mx-auto "
    >
      <div className="md:w-1/3 w-full m-3 border border-white p-6 bg-white flex flex-col justify-between h-[calc(2 * 2rem)] gap-">
        <div className="flex items-center space-x-2">
          <img src="/kenny.png" alt="" className="rounded-full w-12" />
          <p className="text-sm">Ashley Robinson</p>
        </div>
        <p className="text-sm mt-4">
          I highly recommend a membership with baobabpad, the support on managing
          our cloud backend was excellent.
        </p>
      </div>

      <div className="md:w-1/3 w-full m-3 border border-gray-300 p-6 bg-white flex flex-col justify-between h-[calc(2 * 2rem)]">
        <div className="flex items-center space-x-2">
          <img src="/kenny.png" alt="" className="rounded-full w-12" />
          <p className="text-sm">Ashley Robinson</p>
        </div>
        <p className="text-sm mt-4">
          I highly recommend a membership with baobabpad, the support on managing
          our cloud backend was excellent.
        </p>
      </div>

      <div className="md:w-1/3 w-full m-3 border border-gray-300 p-6 bg-white flex flex-col justify-between h-[calc(2 * 2rem)]">
        <div className="flex items-center space-x-2">
          <img src="/kenny.png" alt="" className="rounded-full w-12" />
          <p className="text-sm">Ashley Robinson</p>
        </div>
        <p className="text-sm mt-4">
          I highly recommend a membership with baobabpad, the support on managing
          our cloud backend was excellent.
        </p>
      </div>
    </Slider>
    
  </div>
  </div>

  
  )
}

export default Reviews