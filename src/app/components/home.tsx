"use client";
import Image from "next/image";
import React from "react";
import { FaDownload } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div id="Home">
      <section className="text-gray-700 body-font bg-gray-200">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 lg:px-14  animate-pulse">
            <Image
              width={300}
              height={300}
              alt="Logo of your company"
              src="/assets/black.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div
              className="scroll-m-20 border-b pb-2 text-4xl font-semibold tracking-tight first:mt-0 text-gray-700
             "
            >
              Hello World..!
            </div>
            <h1
              className="title-font sm:text-5xl text-3xl mb-2 font-medium"
              style={{
                background:
                  "linear-gradient(45deg, #FFD900, #FCFF51   , #FFD100)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              <Typewriter
                options={{
                  strings: ["I Am A Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

            <div className=" mb-2 w-[150px] h-[3px] bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 mt-2 rounded-lg"></div>
            <p className="mb-8 leading-relaxed scroll-m-20 text-xl tracking-tight">
              Looking for assistance in tech services that are exceptionally
              fast, secure, and engaging? Get in touch for a FREE expert
              consultation! Our team of top-rated developers is here to help.
              Lets build something exceptional together!
            </p>
            <div className="flex justify-center">
                <a href="/assets/Resume Yasir Tahir.pdf">
              <button className="text-white inline-flex items-center rounded-2xl bg-yellow-500 border-0 py-1 px-5 focus:outline-none hover:bg-gray-700 hover:text-yellow-500 md:mt-0 text-md">
                  Download C.V
                  <FaDownload style={{ marginLeft: "0.5rem" }} />
              </button>
                </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
