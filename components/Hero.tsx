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
              <p className="text-lg lg:text-lg">
                I&apos;m a full Stack developer from Bangladesh 🇧🇩.
              </p>
              <p className="mt-3 text-lg lg:text-lg lg:m-0">
                I create free + premium courses on{" "}
                <a
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                  href="https://www.youtube.com/channel/UCxFDOHULIH3z-wDsR77-_0Q"
                >
                  return0.codes
                </a>
              </p>

              <div className="mt-4">
                <a
                  download={true}
                  href="https://github.com/kingRayhan/kingrayhan/raw/master/Md.Raihan-Resume.pdf"
                  className="flex items-center gap-1 text-base text-blue-600 no-underline lg:text-xl hover:underline"
                >
                  <span>Download My Resume</span>
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
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center order-first h-full lg:bg-slate-200 md:order-none">
            <Image
              className="image object-cover md:w-[32rem] md:h-[32rem] w-20 h-20 my-image"
              src="/images/rayhan.jpg"
              alt="My Photo"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
