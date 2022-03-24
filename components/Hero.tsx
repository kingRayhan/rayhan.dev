import React from "react";

const Hero = () => {
  return (
    <>
      <div className="text-center my-20">
        <h2 className="text-4xl font-semibold">
          Hi, I am <span className="name-marker">Rayhan</span>
        </h2>

        <div className=" mt-8">
          <h1 className="md:text-5xl text-3xl flex-col gap-3  inline-flex">
            <span className="call-to-action-text call-to-action-text--line-1">
              I am here for you to build
            </span>{" "}
            <span className="call-to-action-text call-to-action-text--line-2">
              an awesome application
            </span>
          </h1>
        </div>
      </div>

      <div className=" prose max-w-none prose-xl text-slate-500 prose-a:text-blue-500">
        <p>I&apos;m a full Stack developer from Bangladesh 🇧🇩.</p>
        <p>
          I create free + premium courses on{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.youtube.com/channel/UCxFDOHULIH3z-wDsR77-_0Q"
          >
            return0.codes
          </a>
        </p>
        <p>
          Problem solving always gives me a rush of adrenaline, which is why I
          chose computer engineering. The reason I&apos;m saying this because I
          have changed stack for Techdiary about 3 times both Frontend and
          Backend.
        </p>

        <div>
          <a
            download={true}
            href="/downloadable/Md.Raihan-Resume.pdf"
            className=" flex items-center gap-1 no-underline"
          >
            <span>Download My Resume</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
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
    </>
  );
};

export default Hero;
