import React from "react";
import { useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  return (
    <section
      id="about"
      className={`w-full py-8 md:py-8 lg:py-8 bg-slate-900 
      ${location.pathname === "/about" && "h-[90vh]" }`}
    >
      <div
        className={` px-4 md:px-6 ${
          location.pathname === "/about" && "pt-24"
        }`}
      >
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl  bg-gradient-to-r from-orange-700 to-amber-300 text-transparent bg-clip-text w-fit pr-4 ">
          About Me
        </h1>
        <p className="max-w-[600px] text-gray-200 md:text-xl dark:text-gray-400 mt-4">
          I am a full-stack developer with over 5 years of experience in
          building web applications. I specialize in JavaScript and have
          professional experience working with both front-end and back-end
          technologies. I am passionate about writing clean, efficient, and
          accessible code.
        </p>
      </div>
    </section>
  );
}
