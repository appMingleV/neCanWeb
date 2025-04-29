import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaBars, FaTimes } from "react-icons/fa";
import QRCodeModal from './QRCodeModal'; // Same as in Footer

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false); // QR modal state
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="bg-[#42A147] backdrop-blur-md shadow-md sticky top-0 z-50 py-4 px-6 md:px-10 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={handleScrollTop}>
          <div className="flex items-center space-x-2">
            <h1 className="text-white text-2xl md:text-3xl font-bold tracking-wide drop-shadow-sm">
              NE-<span className="text-yellow-300">Cab</span>
            </h1>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:text-[22px] md:flex space-x-8 text-white font-medium text-lg">
          <Link to="/" className="hover:text-yellow-300 transition-all duration-300" onClick={handleScrollTop}>Home</Link>
          <Link to="/service" className="hover:text-yellow-300 transition-all duration-300" onClick={handleScrollTop}>Services</Link>
          <Link to="/about" className="hover:text-yellow-300 transition-all duration-300" onClick={handleScrollTop}>About Us</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition-all duration-300" onClick={handleScrollTop}>Contact</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="md:text-lg lg:text-xl text-xs flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300 shadow-md"
          >
            <FaDownload className="w-5 h-5" />
            Download App
          </button>

          <button
            className="md:hidden text-white focus:outline-none text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-16 left-0 w-full flex flex-col items-center md:hidden z-40 bg-yellow-500 text-white font-bold py-4 space-y-4">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/service" onClick={() => setIsOpen(false)}>Services</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        )}
      </header>

      <QRCodeModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Header;
