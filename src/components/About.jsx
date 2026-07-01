import React from "react";
import {FaJava, FaReact, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaNodeJs,} from "react-icons/fa";
import {SiSpringboot, SiMysql, SiPostgresql, SiMongodb, SiJavascript, SiTailwindcss, SiPostman, SiApachemaven, SiHibernate, SiRuby, SiExpress,} from "react-icons/si";
import { TbApi } from "react-icons/tb";

function About() {
  const skills = [
    { name: "Java", icon: <FaJava className="text-orange-500" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "Spring MVC", icon: <SiSpringboot className="text-green-400" /> },
    { name: "REST API", icon: <TbApi className="text-cyan-400" /> },
    { name: "Hibernate", icon: <SiHibernate className="text-yellow-400" /> },
    { name: "Ruby", icon: <SiRuby className="text-red-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Express", icon: <SiExpress className="text-gray-300" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-white" /> },
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Maven", icon: <SiApachemaven className="text-red-500" /> },
  ];

  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-32">
      <div className="mb-16">
        <p className="text-cyan-400 uppercase tracking-[4px] mb-3">
          About Me
        </p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Building Reliable &
          <span className="text-purple-500">
            {" "}Scalable Software
          </span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-lg text-gray-300 leading-9">
            I'm a Junior Backend Developer currently working at Refread Solutions since November 2025. I specialize in developing secure and scalable backend applications using Java, Spring Boot, MySQL and RESTful APIs.
          </p>
          <p className="text-lg text-gray-300 leading-9 mt-6">
            I also have hands-on experience with React.js, Node.js, Express.js, MongoDB, PostgreSQL and Ruby. My focus is on writing clean, maintainable code, designing efficient APIs, optimizing database performance and building reliable software solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="bg-[#111827]/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition">
            <h3 className="text-4xl font-bold text-purple-400"> 1+ </h3>
            <p className="text-gray-400 mt-2"> Years Experience </p>
          </div>

          <div className="bg-[#111827]/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-cyan-500 transition">
            <h3 className="text-4xl font-bold text-cyan-400"> 10+ </h3>
            <p className="text-gray-400 mt-2"> Projects </p>
          </div>

          <div className="bg-[#111827]/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-purple-500 transition">
            <h3 className="text-4xl font-bold text-purple-400"> 8+ </h3>
            <p className="text-gray-400 mt-2"> Technologies </p>
          </div>

          <div className="bg-[#111827]/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-cyan-500 transition">
            <h3 className="text-4xl font-bold text-cyan-400"> 300+ </h3>
            <p className="text-gray-400 mt-2"> DSA Problems </p>
          </div>
        </div>
      </div>

      <div className="mt-24 mb-4 text-center">
        <p className="uppercase tracking-[4px] text-cyan-400"> Skills </p>
        <h2 className="text-4xl font-bold mt-3">
          Technologies
          <span className="text-purple-500"> {" "}I Work With </span>
        </h2>
      </div>

      <div className="overflow-hidden">
        <div className="skills-slider">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-card flex flex-col items-center justify-center">
              <span className="text-4xl mb-3">
                {skill.icon}
              </span>
              <span className="text-sm font-semibold tracking-wide text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;