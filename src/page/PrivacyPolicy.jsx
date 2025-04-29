import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className='grid-cols-1 shadow-lg my-10 mx-5 md:mx-30 justify-center'>
      <div className='flex flex-col p-10 gap-8'>
        <h1 className='text-xl md:text-3xl lg:text-4xl font-bold'>Privacy Policy</h1>
        <span className='text-sm md:text-lg lg:text-lg text-gray-600'>
          Your privacy is important to us at Ne Cab. Here’s how we handle your information when you book a cab with us:
        </span>

        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-lg md:text-xl lg:text-2xl text-gray-800'>1. Data Collection</h2>
          <span className='text-sm md:text-lg lg:text-lg text-gray-600'>
            We collect your name, contact number, pickup and drop-off locations to process cab bookings.
          </span>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-lg md:text-xl lg:text-2xl text-gray-800'>2. Usage of Data</h2>
          <span className='text-sm md:text-lg lg:text-lg text-gray-600'>
            Your data is used to confirm cab bookings, facilitate driver coordination, provide customer support, and improve our services.
          </span>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-lg md:text-xl lg:text-2xl text-gray-800'>3. Sharing of Data</h2>
          <span className='text-sm md:text-lg lg:text-lg text-gray-600'>
            Your data may be shared with drivers to fulfill your ride request. We do not sell your data to third parties. We only disclose data to authorities when legally required.
          </span>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-lg md:text-xl lg:text-2xl text-gray-800'>4. User Rights</h2>
          <span className='text-sm md:text-lg lg:text-lg text-gray-600'>
            You have the right to access, update, or delete your personal data. Contact our support team for assistance regarding your information.
          </span>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-lg md:text-xl lg:text-2xl text-gray-800'>5. Security Measures</h2>
          <span className='text-sm md:text-lg lg:text-lg text-gray-600'>
            We implement industry-standard encryption and security protocols to protect your information against unauthorized access or misuse.
          </span>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='font-semibold text-lg md:text-xl lg:text-2xl text-gray-800'>6. Privacy Policy for Account Deletion</h2>
          <span className='text-sm md:text-lg lg:text-lg text-gray-600'>
            If you request account deletion, we will permanently remove your personal data in accordance with applicable privacy laws. Please refer to our support page or contact us directly to initiate this process.
            <Link to="/account-delete" ><span className='text-blue-800'> Refer to this link</span> </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
