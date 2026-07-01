import React from "react";
import {FaLinkedin, FaGithub, FaTelegram, FaEnvelope,} from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* ---------- Mobile Footer ---------- */}
        <div className="lg:hidden">
          <div className="flex justify-between items-center">
            <div className="grid grid-cols-2 gap-4">
              <a href="https://www.linkedin.com/in/pari-sharma-92713b2a3/" target="_blank" rel="noopener noreferrer" className="text-[#4e94d9] hover:scale-110 transition-all duration-300">
                <FaLinkedin size={22} />
              </a>
              <a href="https://github.com/Parii-10" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-gray-300 hover:scale-110 transition-all duration-300">
                <FaGithub size={22} />
              </a>
              <a href="https://t.me/pari_sharma2004" target="_blank" rel="noopener noreferrer" className="text-[#e974d9] hover:scale-110 transition-all duration-300">
                <FaTelegram size={22} />
              </a>
              <a href="mailto:sharmapari10004@gmail.com" className="text-[#e26458] hover:scale-110 transition-all duration-300">
                <FaEnvelope size={22} />
              </a>
            </div>
            <div className="text-right">
              <p className="text-gray-400 text-sm leading-6"> Designed & Developed by </p>
              <p className="text-white font-semibold text-center"> Pari Sharma </p>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            © 2026 All Rights Reserved.
          </p>
        </div>
        {/* ---------- Desktop Footer ---------- */}
        <div className="hidden lg:flex flex-col  justify-between items-center">
          <p className="text-gray-400"> Designed & Developed by Pari Sharma </p>
          <p className="text-gray-400"> © 2026 All Rights Reserved. </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;