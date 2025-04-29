import React from 'react'
import { FaCogs, FaMapMarkedAlt, FaMobileAlt } from "react-icons/fa";
import img from "../img/techimge.webp";
import img2 from "../img/journey.jpg"

const Journey = () => {
  return (
    <div> 
         <div className="bg-white min-h-screen px-4 md:px-16 lg:px-24 py-10 text-gray-800">
    <div className="max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-600 mb-6">
        About NE-Cab
      </h1>
      <p className="text-center text-md md:text-xl text-gray-600 mb-5">
        Revolutionizing the way you travel — smart, reliable, and effortless.
      </p>
      <p className="text-justify md:text-center  text-md  md:text-[17px] text-gray-600 mb-12">
      Movement is what we power. It’s our lifeblood. It runs through our veins. 
      It’s what gets us out of bed each morning. It pushes us to constantly 
      reimagine how we can move better. For you. For all the places you want to go. 
      For all the things you want to get. For all the ways you want to earn. 
      Across the entire world. In real time. At the incredible speed of now.
      </p>

      {/* Technology Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <div>
          <img
            src={img}
            alt="Technology"
            className="w-full h-auto max-w-[500px] mx-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-yellow-500 flex items-center gap-2">
            <FaCogs /> 
            Our Technology
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-justify text-sm md:text-[17px] ">
            NE-Cab utilizes cutting-edge technology to deliver an exceptional
            user experience. Our app is designed with advanced features that
            make booking rides, managing your profile, and tracking your trips
            effortless.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed text-justify text-sm md:text-[17px]">
            Additionally, we use data analytics to continuously optimize our
            operations, ensuring timely rides and improved service delivery.
          </p>
        </div>
      </div>

      {/* Join Journey Section */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="md:order-2">
          <img
            src={img2}
            alt="Journey"
            className="w-full h-auto max-w-[500px] mx-auto"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-yellow-500 flex items-center gap-2 md:text-3xl">
            <FaMapMarkedAlt /> Join Our Journey
          </h2>
          <p className="mt-4 text-gray-700 leading-relaxed text-justify text-sm md:text-[17px]">
            As we look to the future, NE-Cab is committed to expanding our
            reach and enhancing our services. We are constantly innovating to
            introduce new features that make your travel experience even
            better.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed text-justify text-sm md:text-[17px]">
            Whether you're commuting to work, heading to an event, or
            exploring a new city, NE-Cab is here to make every journey
            enjoyable.
          </p>
        </div>
      </div>

      {/* CTA */}
      
    </div>
  </div>
  </div>
  )
}

export default Journey