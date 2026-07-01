import React, { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {setShowBubble(true);}, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
        {/* Left Section */}
        <div>
          <p className="uppercase tracking-[4px] text-cyan-400 mb-4"> Welcome To My Portfolio </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Pari <span className="text-purple-500"> Sharma</span>
          </h1>

          <div className="mt-6 text-2xl md:text-3xl font-semibold h-12">
            <TypeAnimation
              sequence={[
                "Backend Developer", 2000,
                "Java Developer", 2000,
                "Spring Boot Developer", 2000,
                "Software Engineer", 2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>

          <p className="mt-8 text-gray-400 text-lg max-w-xl leading-8">
            Junior Backend Developer with professional experience in building scalable backend applications using Java, Spring Boot, MySQL and REST APIs. Passionate about writing clean, maintainable code and solving real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#projects" className="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700 transition"> View Projects </a>
            <a href="#contact"className="px-6 py-3 border border-gray-700 rounded-xl hover:border-purple-500 transition"> Contact Me </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
            <div>
              <h2 className="text-3xl font-bold text-purple-400">1+</h2>
              <p className="text-gray-400">Years Experience</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">10+</h2>
              <p className="text-gray-400">Projects</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-purple-400">8+</h2>
              <p className="text-gray-400">Technologies</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-cyan-400">300+</h2>
              <p className="text-gray-400">DSA Problems</p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex justify-center items-center">
          <div className="hero-gif-container">
            <img src="/images/girl.png" alt="Developer" className="hero-gif"/>
            <div className="thought-cloud">
              👋 Let's explore my journey!
              <span className="cloud-dot one"></span>
              <span className="cloud-dot two"></span>
              <span className="cloud-dot three"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;