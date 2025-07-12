import React from 'react';
import { FaLinkedin, FaGithub, FaTelegram, FaEnvelope } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:fixed lg:left-5 lg:top-1/2 lg:-translate-y-1/2 lg:items-center z-40">
      {/* Social Icons */}
      <div className="flex flex-col space-y-6">
        <a
          href="https://www.linkedin.com/in/pari-sharma-92713b2a3/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>

        <a
          href="https://github.com/Parii-10"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-green-400 transition-colors duration-300"
        >
          <FaGithub className="h-6 w-6" />
        </a>

        <a
          href="https://t.me/pari_sharma2004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-yellow-400 transition-colors duration-300"
        >
          <FaTelegram className="h-6 w-6" />
        </a>

        <a
          href="mailto:sharmapari10004@gmail.com"
          className="text-gray-300 hover:text-red-500 transition-colors duration-300"
        >
          <FaEnvelope className="h-6 w-6" />
        </a>
      </div>

      {/* Vertical line */}
      <div className="w-px h-32 bg-gray-500 mt-6"></div>
    </div>
  );
}

export default Sidebar;
