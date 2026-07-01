import React, { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? "hidden" : "auto";
  }, [navOpen]);

  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 30);};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = (
    <ul className="flex flex-col md:flex-row gap-6 text-lg">
      <li>
        <a href="#home" className="hover:text-purple-400 transition"> Home </a>
      </li>
      <li>
        <a href="#about" className="hover:text-purple-400 transition"> About </a>
      </li>
      <li>
        <a href="#experience" className="hover:text-purple-400 transition"> Experience </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-purple-400 transition"> Projects </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-purple-400 transition"> Contact</a>
      </li>
    </ul>
  );

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${ scrolled ? "bg-[#0B1120]/50 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)]" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold"> Pari Sharma<span className="text-purple-500">.</span> </h1>
        <div className="hidden md:flex items-center gap-10">
          {navLinks}
          <a href="https://drive.google.com/file/d/1DYbmykE5vlTntZ92Ce_gSTqCBulnkjRd/view?usp=sharing" target="_blank" rel="noreferrer" className="px-5 py-2 bg-purple-600 rounded-xl hover:bg-purple-700 transition"> Resume </a>
        </div>
        <div className="md:hidden">
          {navOpen ? (<IoClose size={28} onClick={() => setNavOpen(false)} className="cursor-pointer"/>) : (
            <IoMenu size={28} onClick={() => setNavOpen(true)} className="cursor-pointer"/>
          )}
        </div>
      </div>
      {navOpen && (<div className="md:hidden bg-[#0B1120]/50 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.25)] p-6"> <div onClick={() => setNavOpen(false)}> {navLinks} </div> </div>
      )}
    </header>
  );
}

export default Header;