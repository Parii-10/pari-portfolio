import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhoneVolume } from 'react-icons/fa';

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", accessToken);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div id="contact" className="max-w-6xl mx-auto px-4 py-12 relative z-10 text-white">
      <h1 className="text-3xl font-bold mb-5">Contact Me</h1>
      <div className="w-full h-0.5 bg-gray-500 mb-5"></div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Contact Form */}
        <div className="flex-1 bg-gray-900 bg-opacity-70 rounded-lg p-6 shadow-md border border-gray-700">
          <h2 className="text-2xl font-bold mb-2">Send A Message</h2>
          <div className="w-24 h-1 bg-blue-500 mb-4"></div>
          <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="bg-gray-800 text-white border border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="bg-gray-800 text-white border border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <textarea
              placeholder="Message"
              name="message"
              rows="4"
              className="bg-gray-800 text-white border border-gray-600 rounded p-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input type="checkbox" name="botcheck" className="hidden" />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-2 px-6 rounded w-max"
            >
              Send a Message
            </button>

            <p className="text-sm text-gray-300">{result}</p>
          </form>
        </div>

        {/* Personal Info */}
        <div className="flex-1 bg-gray-900 bg-opacity-70 rounded-lg p-6 shadow-md border border-gray-700">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mb-4"></div>
          <p className="text-lg text-gray-300">Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.Simply fill the from and send me an email.</p>
          <br />
          <p className="text-lg text-gray-300">PARI SHARMA</p>
          <div className="flex items-center gap-2 mt-2">
            <FaLocationDot className="h-6 w-6" />
            <p className="text-lg text-gray-300">Sirsa, Haryana, India</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaEnvelope className="h-6 w-6" />
            <p className="text-lg text-gray-300">sharmapari10004@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <FaPhoneVolume className="h-6 w-6" />
            <p className="text-lg text-gray-300">+91 9541281999</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
