import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const accessToken = import.meta.env.VITE_ACCESS_TOKEN;

function Contact() {
  const [result, setResult] = React.useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", accessToken);
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    if (data.success) {
      setResult("Message Sent Successfully ✅");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-14">
        <p className="text-cyan-400 uppercase tracking-[4px] mb-3"> Contact </p>
        <h2 className="text-4xl md:text-5xl font-bold"> Let's Work Together </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Left Side */}
        <div
          className="bg-[#111827]/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
          <h3 className="text-2xl font-bold mb-6"> Get In Touch </h3>
          <p className="text-gray-400 leading-8">
            I'm currently open to Backend Developer and Software Engineer opportunities. Whether you have an exciting project, a full-time role, or simply want to connect, feel free to reach out. I'd be happy to hear from you.
          </p>
          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-purple-400 text-xl" />
              <span className="text-gray-300">sharmapari10004@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaLocationDot className="text-cyan-400 text-xl" />
              <span className="text-gray-300">Haryana, India</span>
            </div>
          </div>

          <div className="flex gap-5 mt-10">
            <a href="https://github.com/Parii-10" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-xl bg-black/30 border border-gray-700 hover:border-purple-500">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/pari-sharma-92713b2a3/" target="_blank" rel="noreferrer" className=" w-12 h-12 flex items-center justify-center rounded-xl bg-black/30 border border-gray-700 hover:border-cyan-500">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <form onSubmit={onSubmit}
          className="bg-[#111827]/60 backdrop-blur-xl border border-gray-800 rounded-3xl p-8">
          <div className="space-y-5">
            <input type="text" name="name" placeholder="Your Name" required className="w-full bg-black/30 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-purple-500"/>

            <input type="email" name="email" placeholder="Your Email" required className="w-full bg-black/30 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-purple-500"/>

            <textarea name="message" rows="6" placeholder="Your Message" required className="w-full bg-black/30 border border-gray-700 rounded-xl p-4 focus:outline-none focus:border-purple-500"/>

            <input type="checkbox" name="botcheck" className="hidden" />

            <button type="submit" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl font-semibold transition">
              Send Message
            </button>

            <p className="text-green-400"> {result} </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;