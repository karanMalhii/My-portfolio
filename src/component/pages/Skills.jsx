import React from 'react'

export default function Skills() {
  return (
    <div>
         <section
            id="skills"
            className="w-full md:py-2 text-white lg:py-2 bg-slate-900 dark:bg-gray-800"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-600 to-amber-300 text-transparent bg-clip-text">
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
  )
}
