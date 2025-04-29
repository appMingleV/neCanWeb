import React from 'react'
import bookcab from "../img/book-cab.png"

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-yellow-300 flex flex-col md:flex-row items-center justify-center px-6 py-10">
    {/* Form Section */}
    <div className="w-full md:w-1/2 max-w-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-1">
        Book <span className='text-green-800'>NE-Cab</span> Service 
      </h2>
      <p className="text-gray-800 md:text-[18px] mb-8">Reliable, Comfortable, Trusted Cab Service</p>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Passenger Name"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />
        <input
          type="text"
          placeholder="Pickup Location"
          className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
        />
        <select
          className="w-full px-4 bg-white py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
        >
          <option>1-4 Passenger </option>
          <option>5-7 Passenger </option>
          <option>7+ Passenger </option>
        </select>

        <button
          type="submit"
          className="bg-black text-white px-6 py-2 md:text-2xl rounded-md hover:bg-gray-800 transition-all"
        >
          Submit
        </button>
      </form>
    </div>

    {/* Car Image */}
    <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
      <img
        src={bookcab}
        alt="Car"
        className="w-full max-w-md md:max-w-lg drop-shadow-xl"
      />
    </div>
  </div>
  )
}

export default ContactUs