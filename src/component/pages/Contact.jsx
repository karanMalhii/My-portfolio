import React from 'react'

export default function Contact() {
  return (
    <div>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
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
    </div>
  )
}
