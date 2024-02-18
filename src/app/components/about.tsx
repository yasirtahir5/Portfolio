import React from "react";
const About = () => {
  return (
    <div id="About">
      <section className="bg-gray-200 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1
              className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl leading-relaxed mb-2 text-yellow-500 animate-zoomIn text-shadow-lg" // Added animation and text shadow
            >
              About
            </h1>
            <span className="inline-block h-1 w-40 rounded bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 mb-4" />

            <p
              className="leading-relaxed text-lg text-gray-700 mb-4 animate-fadeInUp
             scroll-m-20 tracking-tight font"
            >
              I specialize in React and Node.js for both front-end and back-end
              development. In addition to my programming expertise, my skills
              also extend to logo designing, graphic designing, and proficiency
              in MS Office. As a professional Web Developer, I am deeply familiar
              with the latest cutting-edge frameworks and technologies shaping
              the digital landscape. My expertise primarily lies in JavaScript
              and TypeScript frameworks, particularly focusing on front-end
              development and crafting responsive web applications. I am
              dedicated to leveraging my skills to advance a companies mission
              and drive innovation. Whether working on independent projects or
              within collaborative team environments, I excel in demonstrating
              effective self-management and thrive on challenges that push
              boundaries. Lets connect and explore how we can collaborate to
              bring your vision to life and drive meaningful innovation together
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
