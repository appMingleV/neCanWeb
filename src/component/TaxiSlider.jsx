// TaxiSlider.jsx
import React from 'react';
// import Slider from 'react-slick';
import taxiImage from '../img/banner3.jpg'; // Replace with your actual image path

const TaxiSlider = () => {
  

  return (
    <div className="">
     
        <div className="overflow-hidden">
          <img
            src={taxiImage}
            alt="Taxi Slide"
            className="w-full h-auto shadow-lg object-cover"
          />
        </div>
     
    </div>
  );
};

export default TaxiSlider;
