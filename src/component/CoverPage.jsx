import React from "react";
import Navbar from "./Navbar";
import MainView from "./MainView";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function CoverPage() {
  return (
    <div>
   
      <MainView />
      <Experience />
      <Skills />
      <Projects />
      <Contact />

    </div>
  );
}
