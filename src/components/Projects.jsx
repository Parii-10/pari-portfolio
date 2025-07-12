import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'DocBooker – Smart Doctor Appointment Platform',
    description: 'DocBooker is a full-stack doctor appointment booking app built with the MERN stack. It allows users to browse verified doctors, schedule appointments, and manage bookings with role-based access for admins, doctors, and patients.',
    image: 'https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352424/DocBooker_ffxcje.png',
    liveLink: 'https://docbooker-frontend-urn9.onrender.com/',
    githubLink: 'https://github.com/Parii-10/DocBooker'
  },
  {
    id: 2,
    title: 'Chatify – Real-Time Messaging',
    description: 'Chatify is a responsive real-time chat application that allows users to sign up, sign in, and exchange instant messages in a modern, intuitive interface. Built with authentication, live updates, and a clean UI for smooth user experience.',
    image: 'https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352415/Chatify_becsgc.png',
    liveLink: 'https://chatify-real-mern-project-frontend.onrender.com/',
    githubLink: 'https://github.com/Parii-10/Chatify-Real-MERN-Project'
  },
  {
    id: 3,
    title: 'Keeper – Notes Taking App',
    description: 'Keeper is a simple and intuitive notes app built with the PERN stack. It allows users to quickly add, view, and manage notes in a visually organized interface, helping them stay productive and clutter-free.',
    image: 'https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352437/Keeper_vpzc1m.png',
    liveLink: 'https://keeper-app-frontend-fzyo.onrender.com/',
    githubLink: 'https://github.com/Parii-10/Keeper-App'
  },
  {
    id: 4,
    title: 'Student Management System – Java Console App',
    description: 'A Java-based console application to manage student records using Object-Oriented Programming and ArrayList. It supports adding, updating, deleting, and viewing student details with a clean and modular class structure for efficient data handling.',
    image: 'https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352448/StudentManagement_jy8ebq.png',
    githubLink: 'https://github.com/Parii-10/Student-Management-System'
  },
  {
    id: 5,
    title: 'Family Travel Tracker – Backend API System',
    description: 'A backend-driven travel tracking system built using Node.js and PostgreSQL, designed to manage countries visited by multiple family members. It supports APIs for adding/removing members, tracking visited countries, and calculating totals.',
    image: 'https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352463/TravelTracker_lxtyx4.png',
    githubLink: 'https://github.com/Parii-10/World-Tracker'
  },
  {
    id: 6,
    title: 'Taskify – Persistent To-Do List App',
    description: 'Taskify is a full-stack to-do list application with a Node.js backend and PostgreSQL database to ensure tasks are permanently saved. Users can add, update, delete, and retrieve tasks with real-time syncing.',
    image: 'https://res.cloudinary.com/dbx52jxz7/image/upload/v1752352456/ToDoList_efky2s.png',
    githubLink: 'https://github.com/Parii-10/Permanent-To-Do-List'
  },
];

function Projects() {
  const [index, setIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCardsPerPage(3);
      else if (width >= 768) setCardsPerPage(2);
      else setCardsPerPage(1);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = projects.length - cardsPerPage;

  const handleScroll = (dir) => {
    if (dir === 'left' && index > 0) setIndex(index - cardsPerPage);
    else if (dir === 'right' && index < maxIndex) setIndex(index + cardsPerPage);
  };

  const visibleProjects = projects.slice(index, index + cardsPerPage);

  return (
    <div id="projects" className="px-8 pt-20 pb-15 max-w-6xl mx-auto relative z-10 text-white">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="w-full h-0.5 bg-gray-500 mb-5"></div>

      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={() => handleScroll('left')}
          disabled={index === 0}
          className={`p-3 rounded-full bg-gray-800 text-white hover:bg-gray-600 transition duration-300 absolute top-1/2 -translate-y-1/2
              left-2 md:left-[-2rem] lg:left-[-3rem] z-10 ${index === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
        >
          <FaArrowLeft />
        </button>

        {/* Cards */}
        <div className="flex justify-center gap-6 overflow-hidden w-full">
          {visibleProjects.map((project) => (
            <div
              key={project.id}
              className="w-full max-w-xs bg-gray-900 bg-opacity-70 rounded-lg shadow-md relative group hover:shadow-xl transition duration-300 border border-gray-700"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4 group-hover:opacity-100 opacity-90 transition duration-300">
                <h2 className="text-xl font-semibold mb-1 text-white">{project.title}</h2>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="mt-4 flex justify-between">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-800 text-white py-1 px-3 rounded"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-600 hover:bg-gray-800 text-white py-1 px-3 rounded"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => handleScroll('right')}
          disabled={index >= maxIndex}
          className={`p-3 rounded-full bg-gray-800 text-white hover:bg-gray-600 transition duration-300 absolute top-1/2 -translate-y-1/2
              right-2 md:right-[-2rem] lg:right-[-3rem] z-10 ${index >= maxIndex ? 'opacity-30 cursor-not-allowed' : ''}`}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default Projects;
