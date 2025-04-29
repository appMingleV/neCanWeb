import React from 'react';
import budgetImg from '../img/ride-budget.png'; // replace with correct path
import distanceImg from '../img/ride-distance.png'; // replace with correct path
import durationImg from '../img/ride-duration.png'; // replace with correct path
import purposeImg from '../img/ride-purpose.png'; // replace with correct path


const rideOptions = [
  {
    title: 'For any budget',
    description:
      'From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.',
    img: budgetImg,
  },
  {
    title: 'For any distance',
    description:
      'Book rides within the city with Daily, or take a trip to your favourite destinations outside the city with Outstation.',
    img: distanceImg,
  },
  {
    title: 'For any duration',
    description:
      'Easily plan a day out without having to worry about conveyance with an hour-based package from Rental.',
    img: durationImg,
  },
  {
    title: 'For any purpose',
    description:
      'Whether it’s a daily commute, a business meeting, or a weekend getaway, NE Cabs has the perfect ride for every occasion.',
      img: purposeImg,
  }
];

const RideOptions = () => {
  return (
    <section className="py-5 md:py-16 bg-white text-center px-4">
      <h2 className="text-2xl md:text-4xl font-bold text-black mb-2 md:mb-12">
        There&apos;s an <span className="text-green-600">NE-CAB</span> ride for everyone
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
        {rideOptions.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className=" p-6 rounded-xl mb-0 md:mb-4">
              <img src={item.img} alt={item.title} className="w-46 h-36 object-contain" />
            </div>
            <h3 className="text-xl font-semibold text-black mb-2">{item.title}</h3>
            <p className="text-gray-600 max-w-xs">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RideOptions;
