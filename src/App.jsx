import React from "react";
import Navbar from "./component/Navbar";
import MainView from "./component/MainView";
import About from "./component/pages/About";
import Skills from "./component/pages/Skills";
import Experience from "./component/pages/Experience";
import Projects from "./component/pages/Projects";
import Contact from "./component/pages/Contact";
import Footer from "./component/pages/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <MainView />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
