import React from 'react';
import innovationImg from '../img/mobile-app.png';

const InnovationSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-40 py-10 bg-white text-center justify-center items-center">
      <div className="mx-auto flex flex-col lg:flex-row text-center items-center gap-10">
        {/* Left: Image */}
        <div className="w-full bg-gray-200  lg:w-1/2 max-w-sm flex justify-center text-center  py-5">

          <img
            src={innovationImg}
            alt="Innovation"
            className="w-full h-auto"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:w-1/2 text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
            GET MORE BENEFITS
          </h2>
          <h3 className='text-2xl font-bold text-yellow-500'>DOWNLOAD THE APP  </h3>

          <div className="mt-6 space-y-6">
            {/* Riders Block */}
            <div className="pl-4 border-l-4 border-green-700">
              <h3 className="text-lg sm:text-xl font-semibold text-black">FAST BOOKING</h3>
              <p className="text-gray-700 mt-1 text-sm sm:text-base">
                Quickly book your ride with just a few taps on the app.
              </p>
            </div>

            {/* Drivers Block */}
            <div className="pl-4 border-l-4 border-green-700">
              <h3 className="text-lg sm:text-xl font-semibold text-black">EASY TO USE</h3>
              <p className="text-gray-700 mt-1 text-sm sm:text-base">
                Simple and intuitive design, making it easy for everyone to use.
              </p>
            </div>

            {/* Affordable Pricing Block */}
            <div className="pl-4 border-l-4 border-green-700">
              <h3 className="text-lg sm:text-xl font-semibold text-black">AFFORDABLE PRICING</h3>
              <p className="text-gray-700 mt-1 text-sm sm:text-base">
                Enjoy competitive rates without compromising on quality or comfort.
              </p>
            </div>

            {/* 24/7 Support Block */}
            <div className="pl-4 border-l-4 border-green-700">
              <h3 className="text-lg sm:text-xl font-semibold text-black">24/7 SUPPORT</h3>
              <p className="text-gray-700 mt-1 text-sm sm:text-base">
                We're here for you any time of day or night — just reach out through the app.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
