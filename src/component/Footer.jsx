import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QRCodeModal from './QRCodeModal'; 

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <footer className="bg-gray-800 text-white py-5 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* About Us */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            We are a fast and reliable bike taxi service, making daily commutes quick, affordable, and hassle-free.
            <br /><br />
            Our mission is to provide seamless transportation solutions, helping you beat the traffic and reach your destination on time, every time.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm md:text-lg text-gray-300 flex flex-col">
            <li><Link to="/service" onClick={scrollToTop} className="hover:text-yellow-300 transition">Services</Link></li>
            <li><Link to="/privacy-policy" onClick={scrollToTop} className="hover:text-yellow-300 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Explore More */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">Explore More</h3>
          <ul className="space-y-2 text-sm text-gray-300 flex flex-col md:text-lg">
            <li><Link to="/" onClick={scrollToTop} className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop} className="hover:text-yellow-300 transition">About Us</Link></li>
            <li><Link to="/contact" onClick={scrollToTop} className="hover:text-yellow-300 transition">Contact Us</Link></li>
            <li>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="hover:text-yellow-300 transition text-left"
              >
                Download App
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-yellow-400 text-2xl font-semibold mb-4">Contact Us</h3>
          <div className='flex flex-col gap-2'>
            <p className="text-gray-300 text-sm md:text-lg">Phone: <span className="text-white">1234567890</span></p>
            <p className="text-gray-300 text-sm md:text-lg">
              Email: <a href="mailto:cablowhelp@gmail.com" className="text-white hover:text-yellow-300 transition">info2344@gmail.com</a>
            </p>
            <p className="text-gray-300 text-sm md:text-lg">Address: vndfvbfd</p>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Bottom line */}
      <div className="mt-5 pt-3 border-t border-yellow-700 text-center text-sm text-gray-400">
        <span className="text-yellow-400 font-semibold">NE-CAB</span> 2024 © All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
