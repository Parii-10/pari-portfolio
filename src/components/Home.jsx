import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-20 px-4 md:px-8 py-31 max-w-7xl mx-auto relative z-10">
      {/* Left Section - Text */}
      <div className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left items-center md:items-start">
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight md:whitespace-nowrap">
          Hello! I'm Pari Sharma
        </h1>

        <h3 className="text-xl md:text-2xl text-gray-200 h-10">
          <TypeAnimation
            sequence={[
              'Frontend Developer', 2000,
              'Backend Developer', 2000,
              'Full Stack Developer', 2000,
              'Software Engineer', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-semibold text-gray-100"
          />
        </h3>

        <div className='flex flex-row gap-15 ml-14'>
          <button className="bg-white text-black hover:bg-gray-200 font-bold py-2 px-4 rounded w-fit">
            <a href="https://drive.google.com/file/d/1Ta0CYHbxwLKNjHB6I9bsOjIJgFWozYnE/view?usp=drive_link" target='blank'>View Resume</a>
          </button>

          <button className="bg-gray-900 text-white hover:bg-white font-bold py-2 px-4 rounded w-fit">
            <a href="https://www.linkedin.com/in/pari-sharma-92713b2a3/" target='blank'>Get Connect</a>
          </button>
        </div>
      </div>

      {/* Right Section - Image (hidden on small devices) */}
      <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center hidden md:flex">
        <img
          src="https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352430/image.png_belcw7.jpg"
          alt="User"
          className="h-100 w-90 rounded-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
}

export default Home;
