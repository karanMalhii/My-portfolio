import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      className={`w-full py-8 md:py-8 lg:py-8 bg-slate-900 text-white
      ${location.pathname === "/contact" && "h-[90vh]"}`}
    >
        <div
          className={` px-4 md:px-6 ${
            location.pathname === "/contact" && "pt-24"
          }`}
        >
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-to-t from-orange-700 to-amber-300 text-transparent bg-clip-text w-fit">
          Contact Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div>
            <h3 className="text-xl font-bold">Get In Touch</h3>
            <p className="mt-2">
              The best way to reach me is via email: me@example.com
            </p>
            <p className="mt-2">
              You can also follow me on Twitter:{" "}
              <a href="#" className="underline">
                Twitter
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold">Send a Message</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
