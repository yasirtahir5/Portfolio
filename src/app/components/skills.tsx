import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="Skills">
      <section className="w-full py-12 md:py-24 bg-gray-200">
        <div className="container px-4 grid max-w-5xl items-center justify-center gap-4 text-center md:px-6 md:gap-8 lg:gap-10 lg:text-center">
          <div className="space-y-3">
            <h1
              className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl leading-relaxed mb-2 text-yellow-500 animate-zoomIn text-shadow-lg" // Added animation and text shadow
            >
              My Skills
            </h1>
            <span className="inline-block h-1 w-40 rounded bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 mb-4" />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10 lg:grid-cols-4">
            {/*Typescript JavaType */}
            <div className="lg:mr-10 flex flex-col items-center justify-center space-y-2">
              <Image
                alt="Logo"
                className="rounded-full object-cover object-center "
                height={130}
                src="/Assets/tss.png"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={130}
              />

              <h3 className="text-lg  tracking-tight">Javascript/Typescript</h3>
              <div className="relative h-1 w-40 bg-gray-700 rounded-xl overflow-hidden">
                <div className="absolute bg-gradient-to-br from-yellow-500 to-yellow-300 h-1 rounded-xl w-[100%]"></div>
              </div>
              <p className=" text-gray-700 text-right mt-2">100%</p>
            </div>

            {/* Next Js */}
            <div className="lg:mr-10 flex flex-col items-center justify-center space-y-2">
              <Image
                alt="Logo"
                className="rounded-full object-cover object-center "
                height={130}
                src="/Assets/nextjs.png"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={130}
              />

              <h3 className="text-lg tracking-tight text-gray-700 ">Next Js</h3>
              <div className="relative h-1 w-40 bg-gray-700 rounded-xl overflow-hidden">
                <div className="absolute bg-gradient-to-br from-yellow-500 to-yellow-300 h-1 rounded-xl w-[90%]"></div>
              </div>
              <p className=" text-gray-700 text-right mt-2">95%</p>
            </div>

            {/* React*/}
            <div className="lg:mr-10 flex flex-col items-center justify-center space-y-2">
              <Image
                alt="Logo"
                className="rounded-full object-cover object-center "
                height={130}
                src="/Assets/react.png"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={130}
              />

              <h3 className="text-lg tracking-tight text-gray-700 ">React</h3>
              <div className="relative h-1 w-40 bg-gray-700 rounded-xl overflow-hidden">
                <div className="absolute bg-gradient-to-br from-yellow-500 to-yellow-300 h-1 rounded-xl w-[85%]"></div>
              </div>
              <p className=" text-gray-700 text-right mt-2">90%</p>
            </div>

            {/* Node*/}
            <div className="lg:mr-10 flex flex-col items-center justify-center space-y-2">
              <Image
                alt="Logo"
                className="rounded-full object-cover object-center "
                height={130}
                src="/Assets/node.png"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={130}
              />

              <h3 className="text-lg tracking-tight text-gray-700 ">H.T.M.L</h3>
              <div className="relative h-1 w-40 bg-gray-700 rounded-xl overflow-hidden">
                <div className="absolute bg-gradient-to-br from-yellow-500 to-yellow-300 h-1 rounded-xl w-[80%]"></div>
              </div>
              <p className=" text-gray-700 text-right mt-2">85%</p>
            </div>

            {/* CSS*/}
            <div className="lg:mr-10 flex flex-col items-center justify-center space-y-2">
              <Image
                alt="Logo"
                className="rounded-full object-cover object-center "
                height={130}
                src="/Assets/ss.png"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={130}
              />

              <h3 className="text-lg tracking-tight text-gray-700 ">C.S.S</h3>
              <div className="relative h-1 w-40 bg-gray-700 rounded-xl overflow-hidden">
                <div className="absolute bg-gradient-to-br from-yellow-500 to-yellow-300 h-1 rounded-xl w-[85%]"></div>
              </div>
              <p className=" text-gray-700 text-right mt-2">90%</p>
            </div>

            {/* H.T.M.L*/}
            <div className="lg:mr-10 flex flex-col items-center justify-center space-y-2">
              <Image
                alt="Logo"
                className="rounded-full object-cover object-center "
                height={130}
                src="/Assets/html.png"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={130}
              />

              <h3 className="text-lg tracking-tight text-gray-700 ">H.T.M.L</h3>
              <div className="relative h-1 w-40 bg-gray-700 rounded-xl overflow-hidden">
                <div className="absolute bg-gradient-to-br from-yellow-500 to-yellow-300 h-1 rounded-xl w-[80%]"></div>
              </div>
              <p className=" text-gray-700 text-right mt-2">85%</p>
            </div>

            {/* Python*/}
            <div className="lg:mr-10 flex flex-col items-center justify-center space-y-2">
              <Image
                alt="Logo"
                className="rounded-full object-cover object-center "
                height={130}
                src="/Assets/python.png"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={130}
              />

              <h3 className="text-lg tracking-tight text-gray-700 ">Python</h3>
              <div className="relative h-1 w-40 bg-gray-700 rounded-xl overflow-hidden">
                <div className="absolute bg-gradient-to-br from-yellow-500 to-yellow-300 h-1 rounded-xl w-[60%]"></div>
              </div>
              <p className=" text-gray-700 text-right mt-2">65%</p>
            </div>

            {/* Wordpress */}
            <div className="lg:mr-10 flex flex-col items-center justify-center space-y-2">
              <Image
                alt="Logo"
                className="rounded-full object-cover object-center "
                height={130}
                src="/Assets/wp.png"
                style={{
                  aspectRatio: "1/1",
                  objectFit: "cover",
                }}
                width={130}
              />

              <h3 className="text-lg tracking-tight text-gray-700 ">
                Wordpress
              </h3>
              <div className="relative h-1 w-40 bg-gray-700 rounded-xl overflow-hidden">
                <div className="absolute bg-gradient-to-br from-yellow-500 to-yellow-300 h-1 rounded-xl w-[50%]"></div>
              </div>
              <p className=" text-gray-700 text-right mt-2">50%</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
