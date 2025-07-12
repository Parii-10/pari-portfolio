import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import StarBackground from './components/StarBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white">
      {/* Starry Background */}
      <StarBackground />

      {/* Main App Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex flex-col md:flex-row flex-grow pt-20"> {/* Added pt-20 here */}
          <Sidebar />
          <div className="flex-grow p-4">
            <Home />
            <About />
            <Experience />
            <Projects />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
