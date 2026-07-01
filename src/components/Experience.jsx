import React from "react";
import { motion } from "framer-motion";
import { FaBriefcase, FaBuilding, FaCode } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      year: "2025 - Present",
      role: "Junior Backend Developer",
      company: "Refread Solutions",
      description: "Developing scalable backend applications using Java, Spring Boot, and MySQL. Designing and implementing RESTful APIs for enterprise applications. Writing optimized SQL queries and improving database performance. Collaborating with frontend developers to integrate backend services. Debugging production issues and maintaining existing applications. Working with Git for version control and collaborative development.",
      skills: [ "Java", "Spring Boot", "MySQL", "REST API", "Git", "Maven",],
    },
    {
      year: "2024 - 2025",
      role: "MERN Stack Developer Intern",
      company: "Saiket Systems",
      description: "Built responsive MERN applications, integrated REST APIs, managed authentication, and enhanced user experience through modern web technologies.",
      skills: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST API", ],
    },
    {
      year: "2023",
      role: "React JS Intern",
      company: "ThinkNext Technologies",
      description: "Developed responsive React.js user interfaces, reusable components, and improved application performance while working on real-world frontend projects.",
      skills: ["React", "JavaScript", "HTML", "CSS", "Tailwind",],
    },
  ];

  return (
    <section id="experience" className="relative overflow-hidden max-w-7xl mx-auto px-6 py-24">
      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px]" />
      {/* Heading */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-14">
        <p className="text-cyan-400 uppercase tracking-[4px] mb-3"> Experience </p>
        <h2 className="text-4xl md:text-5xl font-bold"> My Journey </h2>
      </motion.div>
      {/* Timeline */}
      <div className="relative ml-3">
        <div className="absolute left-[9px] top-0 h-full w-[2px] bg-gray-800">
          <div className="w-full h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 animate-pulse rounded-full" />
        </div>
        {experiences.map((exp, index) => (
          <motion.div key={index} initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{duration: 0.6, delay: index * 0.2,}} viewport={{ once: true }} className="relative pl-14 pb-14">
            {/* Timeline Dot */}
            <div className="absolute left-0 top-3 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-purple-500 shadow-[0_0_25px_#a855f7] z-10" />
            </div>
            {/* Year Badge */}
            <span className="inline-block px-4 py-1 rounded-full text-sm font-semibold bg-cyan-500/10 border border-cyan-500 text-cyan-300 mb-4">
              {exp.year}
            </span>
            {/* Card */}
            <motion.div whileHover={{y: -8, scale: 1.02, }} transition={{ duration: 0.3 }} className="group bg-[#111827]/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-7 hover:border-purple-500 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
                <div className="flex items-center gap-4">
                  {/* Company Circle */}
                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-xl shadow-lg group-hover:rotate-12 transition duration-300">
                    <FaBriefcase />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold"> {exp.role} </h3>
                    <p className="flex items-center gap-2 text-purple-400 mt-1"> <FaBuilding /> {exp.company}</p>
                  </div>
                </div>
                <FaCode className="hidden md:block text-4xl text-cyan-400 opacity-20 group-hover:opacity-60 transition duration-300" />
              </div>
              {/* Description */}
              <p className="hidden md:block text-gray-300 leading-7 mt-6"> {exp.description} </p>
              {/* Skills */}
              <div className="flex flex-wrap gap-3 mt-6">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/20 text-sm hover:bg-purple-500 hover:text-white transition-all duration-300 cursor-default" > {skill} </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
export default Experience;