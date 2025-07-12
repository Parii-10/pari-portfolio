import React from 'react';

function About() {
  return (
    <div id="about" className="px-8 pt-25 py-12  max-w-6xl mx-auto mt-6 flex flex-col space-y-6">
      <h1 className="text-4xl font-bold text-white">About Me</h1>
      <div className="w-full h-0.5 bg-gray-600 mb-5"></div>

      <p className="text-lg text-gray-300 leading-relaxed">
        I’m a passionate and dedicated full stack developer with hands-on experience in building robust web applications using both the MERN and PERN stacks. With a solid foundation in computer science and strong academic performance, I have developed and deployed real-world projects involving secure authentication, real-time communication, RESTful APIs, and third-party integrations like Stripe. I thrive in collaborative environments, continuously upskill with the latest technologies, and aim to deliver scalable, responsive, and user-centric solutions.
      </p>

      <h2 className="text-2xl font-semibold text-white">Skills</h2>

      <ul className="flex flex-wrap gap-4">
        <li>
          <span className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded">
            React.js
          </span>
        </li>
        <li>
          <span className="bg-green-700 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded">
            MongoDB
          </span>
        </li>
        <li>
          <span className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded">
            Node.js
          </span>
        </li>
        <li>
          <span className="bg-indigo-600 hover:bg-indigo-800 text-white font-semibold py-2 px-4 rounded">
            Express.js
          </span>
        </li>
        <li>
          <span className="bg-pink-600 hover:bg-pink-800 text-white font-semibold py-2 px-4 rounded">
            HTML & CSS
          </span>
        </li>
        <li>
          <span className="bg-yellow-600 hover:bg-yellow-800 text-white font-semibold py-2 px-4 rounded">
            DSA
          </span>
        </li>
        <li>
          <span className="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded">
            Java
          </span>
        </li>
      </ul>
    </div>
  );
}

export default About;
