// TaxiSlider.jsx
import React from 'react';

import taxiImage from '../img/cabtaxi.png'; 

const ServiceBanner = () => {
  

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 bg-green-100">
    {/* Left Text Content */}
    <div className="lg:w-1/2 text-center lg:text-left py-2 flex flex-col gap-2">
      <h1 className="text-2xl lg:text-4xl font-bold leading-tight md:text-left text-justify">
        Experience Maximum <br />
        Satisfaction with 
        Our<br/> <span className="text-yellow-400 font-bold">Online Cab Service</span>
      </h1>
      <p className="text-gray-700 text-md md:text-lg text-justify">
        Experience the ultimate in convenience and comfort with our online taxi service
        in Uttarakhand. You can trust us to provide a reliable and hassle-free transportation
        experience. Book your ride today and experience maximum satisfaction with our online taxi service.
      </p>
    </div>

    {/* Right Image */}
    <div className="lg:w-1/2  lg:mb-0 flex justify-center">
      <img
        src={taxiImage}
        alt="Taxi Service Car"
        className="w-full h-auto"
      />
    </div>
  </div>
  );
};

export default ServiceBanner;
