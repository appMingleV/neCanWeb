// TaxiSlider.jsx
import React from 'react';
// import Slider from 'react-slick';
import taxiImage from '../img/banner1.jpg'; 
const TaxiSlider = () => {
  

  return (
    <div className="">
     
        <div className="rounded-xl overflow-hidden">
          <img
            src={taxiImage}
            alt="Taxi Slide"
            className="w-full h-auto md:h-90 rounded-xl shadow-lg object-cover"
          />
        </div>
     
    </div>
  );
};

export default TaxiSlider;
