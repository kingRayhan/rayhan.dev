import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="home" className="relative overflow-hidden app-hero-area">
      {/* Gradient 1 */}
      <div className="gradient-1__inner h-[600px] w-[600px] absolute -bottom-10 -left-[420px] hidden lg:block"></div>
      <div className="wrapper">
        <div className="grid items-center min-h-[80vh] xl:min-h-screen md:gap-10 md:grid-cols-2">
          <div>
            <div className="my-12">
              <h2 className="text-4xl font-semibold text-center lg:text-left">
                Hi, I am <span className="name-marker">Rayhan</span>
              </h2>

              <div className="mt-8 text-center lg:text-left">
                <h1 className="inline-flex flex-col gap-3 text-2xl md:text-3xl">
                  <span className="call-to-action-text call-to-action-text--line-1">
                    I am here for you to build
                  </span>{" "}
                  <span className="call-to-action-text call-to-action-text--line-2">
                    an awesome application
                  </span>
                </h1>
              </div>
            </div>

            <div className="mt-4 lg:m-0 text-slate-500">
              <p className="mb-4 text-lg lg:text-lg">
                CTO at{" "}
                <a
                  href="https://www.graphland.dev/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Graphland
                </a>
              </p>

              <p className="text-lg lg:text-lg">
                👨‍💻 I specialize in building modern web apps using 🔥 React, 🚀
                Node.js, 🔮 GraphQL & 🍃 MongoDB. Let&apos;s create or revamp
                your website with new 🎉 features. 📲 Contact me to get started!
              </p>
              {/* <p className="mt-3 text-lg lg:text-lg lg:m-0">
                I create free + premium courses on{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                  href="https://www.youtube.com/channel/UCxFDOHULIH3z-wDsR77-_0Q"
                >
                  return0.codes
                </a>
              </p> */}

              <div className="flex flex-col gap-4 mt-4">
                <a
                  download={true}
                  href="https://drive.google.com/file/d/1rYPD28yv2i8Gk9REvw5rzk4_D8LsseUD/view"
                  className="flex items-center gap-1 text-base text-blue-600 no-underline lg:text-xl hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 lg:w-6 lg:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  <span>Download My Resume</span>
                </a>

                <a
                  href="https://cal.com/rayhan-dev/45min"
                  target="_blank"
                  className="flex items-center gap-1 text-base text-blue-600 no-underline lg:text-xl hover:underline"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4"></path>
                    <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                    <path d="M15 3v4"></path>
                    <path d="M7 3v4"></path>
                    <path d="M3 11h16"></path>
                    <path d="M18 16.496v1.504l1 1"></path>
                  </svg>
                  <span>Schedule a meeting</span>
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center order-first h-full md:order-none">
            {/* <div className="md:w-[32rem] md:h-[32rem] w-48 h-48 relative overflow-hidden">
              <Image
                width={400}
                height={420}
                className="object-cover m-auto image my-image object-bottoms"
                src="/images/me-tv.gif"
                alt="My Photo"
              />
            </div> */}
            <div className="relative overflow-hidden">
              <Image
                width={640}
                height={640}
                className="object-cover m-auto object-bottoms"
                src="/images/me-tv.gif"
                alt="My Photo"
              />

              <div className="flex-col hidden gap-2 mt-2  md:flex">
                <a
                  href="https://github.com/kingrayhan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-2xl text-white hover:underline"
                >
                  <svg
                    className="w-6 h-6 fill-white"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <span>Github</span>
                </a>

                <a
                  href="https://www.instagram.com/king_rayhan/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-2xl text-white hover:underline"
                >
                  <svg
                    className="w-6 h-6 fill-white"
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Instagram</title>
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
