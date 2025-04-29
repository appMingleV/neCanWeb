import React from 'react';
import halfcar from "../img/halfcar.png";

const EarnWith = () => {
    return (
        <div className="bg-[#e4ffe3] border-y-[10px] border-yellow-500" style={{ borderImage: 'linear-gradient(154deg, #f5c100, #029e5b) 1' }}>
            <div className="py-10 pl-4 md:pl-10  flex flex-row items-center justify-between gap-4">

                {/* Text Content */}
                <div className="w-1/2 px-2 sm:px-4">
                    <p className="text-sm md:text-lg lg:text-xl text-yellow-500 font-semibold mb-1 sm:mb-2">For Drivers</p>
                    <h2 className="text-sm md:text-2xl lg:text-4xl font-bold text-black mb-2 sm:mb-4">
                        DO YOU WANT TO <br /> EARN WITH US
                    </h2>
                    <p className="text-[8px] md:text-xl text-green-600 mb-4 sm:mb-6">
                        Join us and start earning with our reliable <br className="hidden sm:block" /> platform for drivers.
                    </p>
                    <ul className="text-green-700 font-bold text-sm sm:text-base md:text-lg space-y-1 sm:space-y-2">
                        <li>Luxury cars</li>
                        <li>Fixed price</li>
                        <li>Good application</li>
                        <li>Stable orders</li>
                        <li>Cash payment</li>
                        <li>Minimum fee</li>
                    </ul>
                </div>

                {/* Car Image */}
                <div className="w-1/2 flex justify-end">
                    <img src={halfcar} alt="Taxi Car" className="w-35 sm:w-52 md:w-72 object-contain" />
                </div>

            </div>
        </div>
    );
};

export default EarnWith;
