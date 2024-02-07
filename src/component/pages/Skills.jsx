import React from 'react'

export default function Skills() {
  return (
    <div>
      <section
        id="skills"
        className="pl-8 w-full py-8 md:py-8 lg:py-8  text-white bg-slate-900"
      >
        <div className="container px-4 md:px-6">
          <h2 className=" text-4xl font-bold tracking-tighter sm:text-5xl  bg-gradient-to-r from-orange-600 to-amber-500 text-transparent bg-clip-text">
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
