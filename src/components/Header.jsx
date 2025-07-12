import React, { useState, useEffect } from 'react';
import { IoMenu, IoClose } from 'react-icons/io5';

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : 'auto';
  }, [navOpen]);

  const navLinks = (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-8 text-lg px-4 md:px-0">
      <li>
        <a href="#" className="text-white hover:text-blue-400 transition">Home</a>
      </li>
      <li>
        <a href="#about" className="text-white hover:text-blue-400 transition">About</a>
      </li>
      <li>
        <a href="#experience" className="text-white hover:text-blue-400 transition">Experience</a>
      </li>
      <li>
        <a href="#projects" className="text-white hover:text-blue-400 transition">Projects</a>
      </li>
      <li>
        <a href="#contact" className="text-white hover:text-blue-400 transition">Contact</a>
      </li>
    </ul>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full bg-black bg-opacity-70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <div className="text-xl md:text-2xl font-bold text-white">
          Pari Sharma
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center">
          {navLinks}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {navOpen ? (
            <IoClose
              className="h-7 w-7 text-white cursor-pointer"
              onClick={() => setNavOpen(false)}
            />
          ) : (
            <IoMenu
              className="h-7 w-7 text-white cursor-pointer"
              onClick={() => setNavOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {navOpen && (
        <div className="md:hidden bg-black bg-opacity-90 backdrop-blur-sm border-t border-gray-700 py-4 px-6 z-40">
          {navLinks}
        </div>
      )}

      <div className="w-full h-0.5 bg-gray-500 "></div>
    </header>
    
  );
}

export default Header;
