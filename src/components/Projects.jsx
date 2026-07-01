import React, { useState, useEffect } from "react";
import {FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight,} from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "DocBooker",
    description: "Full-stack doctor appointment booking platform with role-based authentication, appointment scheduling, and admin dashboard.",
    image: "https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352424/DocBooker_ffxcje.png",
    tech: ["React", "Node.js", "MongoDB", "Express"],
    liveLink: "https://docbooker-frontend-urn9.onrender.com/",
    githubLink: "https://github.com/Parii-10/DocBooker",
  },
  {
    id: 2,
    title: "Chatify",
    description: "Real-time messaging platform with authentication and instant communication features.",
    image: "https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352415/Chatify_becsgc.png",
    tech: ["React", "Socket.io", "Node.js"],
    liveLink: "https://chatify-real-mern-project-frontend.onrender.com/",
    githubLink: "https://github.com/Parii-10/Chatify-Real-MERN-Project",
  },
  {
    id: 3,
    title: "Keeper",
    description: "PERN stack note-taking application with PostgreSQL integration.",
    image: "https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352437/Keeper_vpzc1m.png",
    tech: ["React", "PostgreSQL", "Node.js"],
    liveLink: "https://keeper-app-frontend-fzyo.onrender.com/",
    githubLink: "https://github.com/Parii-10/Keeper-App",
  },
  {
    id: 4,
    title: "Student Management System",
    description: "Java OOP-based application for managing student records efficiently.",
    image: "https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352448/StudentManagement_jy8ebq.png",
    tech: ["Java", "OOP"],
    githubLink: "https://github.com/Parii-10/Student-Management-System",
  },
  {
    id: 5,
    title: "Travel Tracker",
    description: "Backend-focused application for tracking visited countries using PostgreSQL APIs.",
    image: "https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352463/TravelTracker_lxtyx4.png",
    tech: ["Node.js", "PostgreSQL"],
    githubLink: "https://github.com/Parii-10/World-Tracker",
  },
  {
    id: 6,
    title: "Taskify",
    description: "Persistent full-stack task management application with PostgreSQL.",
    image: "https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352456/ToDoList_efky2s.png",
    tech: ["React", "Node.js", "PostgreSQL"],
    githubLink: "https://github.com/Parii-10/Permanent-To-Do-List",
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1280) {
        setCardsPerPage(3);
      }
      else if (window.innerWidth >= 768) {
        setCardsPerPage(2);
      }
      else {
        setCardsPerPage(1);
      }
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () =>
      window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = Math.max(0, projects.length - cardsPerPage );
  const nextSlide = () => {
    if (currentIndex >= maxIndex) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const prevSlide = () => {
    if (currentIndex === 0) {
      setCurrentIndex(maxIndex);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-14">
        <p className="text-cyan-400 uppercase tracking-[4px] mb-3"> Portfolio </p>
        <h2 className="text-4xl md:text-5xl font-bold"> Featured Projects </h2>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className=" absolute left-[-20px] md:left-[-30px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#151b2b] border border-gray-700 hover:border-purple-500 hover:bg-purple-600 transition flex items-center justify-center">
          <FaChevronLeft />
        </button>
        {/* Cards */}
        <div className="overflow-hidden">
          <div className="flex gap-8 transition-transform duration-700 ease-in-out" style={{transform: `translateX(-${currentIndex * (100 / cardsPerPage)}%)`,}}>
            {projects.map((project) => (
              <div key={project.id} className={`flex-shrink-0 w-full md:w-[calc(50%-16px)] xl:w-[calc(33.333%-22px)] bg-[#111827]/60 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden hover:border-purple-500 hover:-translate-y-2 transition-all duration-300`}>
                <img src={project.image} alt={project.title} className="h-52 w-full object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-bold"> {project.title} </h3>
                  <p className="text-gray-400 mt-3 leading-7"> {project.description} </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full text-sm bg-purple-500/20 text-purple-300"> {item} </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-6">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer"className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 transition"> <FaExternalLinkAlt /> Live </a>
                    )}
                    <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-700 hover:border-purple-500 transition" > <FaGithub /> GitHub </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Arrow */}
        <button onClick={nextSlide} className=" absolute right-[-20px] md:right-[-30px] top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[#151b2b] border border-gray-700 hover:border-purple-500 hover:bg-purple-600 transition flex items-center justify-center"> <FaChevronRight /> </button>
      </div>
    </section>
  );
}
export default Projects;