import React from 'react';
import { useForm } from 'react-hook-form';
import img from "../img/cab.webp";

const Contactsection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form Submitted: ", data);
  };

  return (
    <div className="w-full px-4 py-10 bg-[#e4ffe3] flex flex-col lg:flex-row items-center justify-center gap-10">
      {/* Left: Form Section */}
      <div className="w-full lg:w-1/2 max-w-xl">
        <h2 className="text-3xl font-semibold mb-2">
          <span className="text-green-500">NE-Cab</span> for Business
        </h2>
        <h3 className="text-xl font-bold mb-4">One way cab for Corporate travel</h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className={`w-full p-3 border rounded-xl bg-white ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              {...register('name', {
                required: 'Name is required',
                minLength: { value: 3, message: 'Name must be at least 3 characters' },
              })}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email id"
              className={`w-full p-3 border rounded-xl bg-white ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block mb-1">Phone</label>
            <input
              type="text"
              maxLength={10}
              placeholder="Enter your phone number"
              className={`w-full p-3 border rounded-xl bg-white ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
              {...register('phone', {
                required: 'Phone number is required',
                validate: (value) => {
                  if (!/^\d+$/.test(value)) {
                    return 'It should be a number';
                  }
                  if (value.length !== 10) {
                    return 'Phone number must be exactly 10 digits';
                  }
                  return true;
                },
              })}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
              }}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
          </div>

          <button
            type="submit"
            className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right: Image Section */}
      <div className="w-full lg:w-1/2 max-w-lg">
        <img
          src={img}
          alt="Corporate Travel Banner"
          className="rounded-xl w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Contactsection;
