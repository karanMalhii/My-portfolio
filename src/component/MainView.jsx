import React from "react";

export default function MainView() {
  return (
    <div className="relative w-full bg-slate-900">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex">
          <div className="w-1/2">
            <div className="flex flex-col justify-center px-4 py-10 lg:px-6">
              <h1 className="mt-8 max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
                I'm karandeep singh
                <div className="text-5xl font-bold mt-2 py-2 bg-gradient-to-r from-orange-600 to-amber-300 text-transparent bg-clip-text w-fit">
                  Frontend Developer   
                </div>
              </h1>

              <p className="mt-8 max-w-3xl text-lg text-white">
                I am a full-stack developer with over 5 years of experience in
                building web applications. I specialize in JavaScript and have
                professional experience working with both front-end and back-end
                technologies. I am passionate about writing clean, efficient,
                and accessible code.
              </p>
              <div className="mt-8">
                <button
                  type="button"
                  className="rounded-md bg-orange-400 px-3 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black  bg-gradient-to-r from-orange-600 to-amber-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center items-center relative">
            <div className=" z-50 bg-transprent w-[313px] h-[313px] overflow-hidden rounded-full flex justify-center">
              <img
                src="PERFECT_prev_ui.png"
                alt="karandeep"
                className="rounded-b-[90px]"
              />
            </div>
            <span className="absolute top-52 left-[90px] z-40">
              <img src="javascript.gif" alt="karandeep" width={120} />
            </span>
            <span className="bg-black/30 w-[330px] h-[330px] rounded-full absolute z-30"></span>

            <section className="floating-element max-w-xs rounded-lg border-2 border-gray-400/10 p-4 will-change-transform spacing-2 absolute bottom-[-70px] bg-gray-900/90 z-50 right-0">
              <header className="flex gap-4">
                <div className="overflow-hidden h-12 rounded-full border-2 border-gray-400/50">
                  <img
                    alt="Karandeep Singh"
                    width="40"
                    height="40"
                    src="profilepic.png"
                  />{" "}
                </div>
                <div className="flex flex-col justify-center">
                  <h2 className="text-sm heroText font-semibold tracking-wide text-white">
                    Karandeep Singh
                  </h2>
                  <h3 className="text-sm tracking-tight text-gray-200 d:text-gray-300/90">
                    @karandeep.singh
                  </h3>
                </div>
                <a
                  href="https://twitter.com/karanmalhii"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="butter-border my-auto ml-auto flex items-center justify-center rounded-full bg-sky-500/90 py-1.5 px-4 text-xs text-white transition-colors hfa:bg-sky-600/80 d:bg-sky-600/90 d:hfa:bg-sky-500/80"
                >
                  Follow
                </a>
              </header>
              <main>
                <p className=" pr-2 text-[10px] tracking-tight text-slate-300 mt-2 line-clamp-3 d:text-gray-300/90">
                  Hey, I'm new to twitter and not really a social media person
                  🙃 I'm looking to connect with fellow developers and to learn
                  about the latest in web dev 🤗
                </p>
              </main>
              <footer className="mt-2">
                <p className="text-[10px] text-gray-200 d:text-gray-300/90">
                  <span className="heroText font-semibold text-slate-200 d:text-gray-200">
                    136
                  </span>
                  Following
                  <span className="ml-2 heroText font-semibold text-slate-200 d:text-gray-200">
                    8
                  </span>{" "}
                  Followers
                </p>
              </footer>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
