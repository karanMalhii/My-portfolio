import React from "react";
import {
  SiJavascript,
  SiReact,
  SiPostgresql,
  SiGit,
  SiPhp,
  SiLaravel,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";

export default function Skills() {
  return (
    <div>
      <section
        id="skills"
        className="w-full py-8 md:py-8 lg:py-8 text-white bg-slate-900"
      >
        <div className="container px-4 md:px-6">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-600 to-amber-500 text-transparent bg-clip-text w-fit pr-2">
            Skills &amp; Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            <SkillIcon text="Html">
              <SiHtml5 />
            </SkillIcon>
            <SkillIcon icon={<SiBootstrap />} text="Bootstrap" />
            <SkillIcon icon={<SiJavascript />} text="JavaScript" />
            <SkillIcon icon={<SiReact />} text="React" />
            <SkillIcon icon={<SiLaravel />} text="Laravel" />
            <SkillIcon icon={<SiPostgresql />} text="PostgreSQL" />
            <SkillIcon icon={<SiGit />} text="Git" />
            <SkillIcon icon={<SiPhp />} text="PHP" />
          </div>
        </div>
      </section>
    </div>
  );
}

// SkillIcon component to display each skill/language with its corresponding icon
const SkillIcon = ({ icon, text, children }) => (
  <div className="flex items-center mt-1  ">
    <span className="mr-2 text-2xl ">{children}</span>
    <span>{text}</span>
  </div>
);
