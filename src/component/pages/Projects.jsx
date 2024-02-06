import React from 'react'

export default function Projects() {
  return (
    <div>
      <section
        id="projects"
        className="w-full py-8 md:py-8 lg:py-8  text-white bg-slate-900"
      >
        <div className="container ml-14 px-4 md:px-6">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-r from-orange-600 to-amber-500 text-transparent bg-clip-text">
            Notable Projects
          </h1>
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
  );
}
