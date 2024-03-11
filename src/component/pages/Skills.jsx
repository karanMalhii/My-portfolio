import React from "react";
import { useLocation } from "react-router-dom";

export default function Skills() {
  return (
    <div>
      <section
        id="skills"
        className={`w-full py-8 md:py-8 lg:py-8 bg-slate-900 text-white
            ${location.pathname === "/skills" && "h-[90vh]"}`}
      >
        <div
          className={` px-4 md:px-6 ${
            location.pathname === "/skills" && "pt-24"
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-700 to-amber-300 text-transparent bg-clip-text w-fit">
            Skills &amp; Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <div>JavaScript</div>
            <div>React</div>
            <div>Node.js</div>
            <div>Express.js</div>
            <div>MongoDB</div>
            <div>PostgreSQL</div>
            <div>Git</div>
            <div>Agile/Scrum</div>
          </div>
        </div>
      </section>
    </div>
  );
}
