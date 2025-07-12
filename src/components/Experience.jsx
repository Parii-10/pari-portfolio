import React from 'react';

function Experience() {
  return (
    <div id="experience" className="px-8 pt-26 pb-20 max-w-6xl mx-auto mt-7 text-white relative z-10">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="w-full h-0.5 bg-gray-600 mb-5"></div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Card 1 */}
        <div className="flex-1 border border-gray-700 rounded-lg shadow-md p-6 bg-gray-900 bg-opacity-70">
          <h2 className="text-2xl font-semibold mb-2">React Js Intern</h2>
          <p className="text-gray-300 mb-1">ThinkNext Technologies</p>
          <p className="text-gray-400 mb-2">07|2023 - 09|2023 | Chandigarh, India</p>
          <p className="text-gray-200 mb-4">
            Worked on React.js development by creating dynamic UI components, optimizing performance, managing state with hooks, and ensuring responsive, user-friendly web interfaces.
          </p>
          <a
            href="https://res.cloudinary.com/dbx52jxz7/image/upload/v1752351199/WhatsApp_Image_2025-06-17_at_19.53.44_vx1tsz.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
          >
            View Certificate
          </a>
        </div>

        {/* Card 2 */}
        <div className="flex-1 border border-gray-700 rounded-lg shadow-md p-6 bg-gray-900 bg-opacity-70">
          <h2 className="text-2xl font-semibold mb-2">MERN Stack Developer Intern</h2>
          <p className="text-gray-300 mb-1">Saiket Systems</p>
          <p className="text-gray-400 mb-2">12|2024 - 01|2025 | Online (via LinkedIn)</p>
          <p className="text-gray-200 mb-4">
            Contributed to MERN stack development by building responsive user interfaces, integrating RESTful APIs, managing state effectively, and enhancing overall application performance and usability.
          </p>
          <a
            href="https://res.cloudinary.com/dbx52jxz7/image/upload/v1752351177/WhatsApp_Image_2025-06-17_at_19.53.31_sxh4ux.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-600 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default Experience;
