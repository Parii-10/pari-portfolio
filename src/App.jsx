import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import GridBackground from "./components/GridBackground";

function App() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <GridBackground />
      <div className="relative z-10">
        <Header />
        <main className="pt-20">
          <Sidebar />
          <Home />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;