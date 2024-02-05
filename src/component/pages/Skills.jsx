import React from 'react'

export default function Skills() {
  return (
    <div>
         <section
            id="skills"
            className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
          >
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
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
