import React from 'react'

export default function Projects() {
  return (
    <div>
         <section
            id="projects"
            className={`w-full py-8 md:py-8 lg:py-8 bg-slate-900 text-white
            ${location.pathname === "/project" && "h-[90vh]"}`}
          >
             <div
          className={` px-4 md:px-6 ${
            location.pathname === "/project" && "pt-24"
          }`}
        >
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-b from-orange-700 to-amber-300 text-transparent bg-clip-text w-fit h-14 pr-2">
                Notable Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="mt-2">
                    A description of the project, the work involved, and the
                    technologies used.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="mt-2">
                    A description of the project, the work involved, and the
                    technologies used.
                  </p>
                </div>
              </div>
            </div>
          </section>
    </div>
  )
}
