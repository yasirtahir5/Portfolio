import React from "react";
import { FiSend } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="Contact">
      <div className="px-8 py-28 mx-auto flex justify-center bg-gray-200">
        <div className="text-center">
          <h1
            className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl leading-relaxed mb-2 text-yellow-500 animate-zoomIn text-shadow-lg" // Added animation and text shadow
          >
            Contact Us
          </h1>
          <span className="inline-block h-1 w-40 rounded bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 mb-4" />

          <p className="text-md mb-6 text-gray-700 scroll-m-20 tracking-tight">
            We&apos;d love to hear from you! Reach out to us with your
            Questions, Feedback.
          </p>

          <div className="max-w-md mx-auto">
            <form action="https://formspree.io/f/xdorrqor" method="POST">
              <div className="flex gap-4">
                <div className="mb-2 w-1/2">
                  <label
                    htmlFor="name"
                    className="block text-lg text-gray-700 "
                  >
                    <b className="scroll-m-20 text-sm font-semibold tracking-tight">
                      Name
                    </b>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-300 border border-gray-400 rounded py-2 px-3 focus:outline-none
                 focus:border-yellow-500 text-gray-700"
                    required
                  />
                </div>

                <div className="mb-2 w-1/1">
                  <label
                    htmlFor="email"
                    className="block text-lg text-gray-700"
                  >
                    <b className="scroll-m-20 text-sm font-semibold tracking-tight">
                      Email
                    </b>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-300 border border-gray-400 rounded py-2 px-3 focus:outline-none
                 focus:border-yellow-500 text-gray-700"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg text-gray-700"
                >
                  <b className="scroll-m-20 text-sm font-semibold tracking-tight">
                    Message
                  </b>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  className="w-full bg-gray-300 border border-gray-400 rounded py-2 px-3 focus:outline-none
                 focus:border-yellow-500 text-gray-700 resize-none"
                  required
                ></textarea>
              </div>

              <button className=" text-white inline-flex items-center rounded-2xl bg-yellow-500 border-0 py-1 px-5 focus:outline-none hover:bg-gray-700 hover:text-yellow-500 md:mt-0 text-md ">
                Send
                <BsArrowRight
                  style={{
                    marginLeft: "0.5rem",
                  }}
                />
              </button>
            </form>
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-6 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.instagram.com/yasirt_5/"}
              className="ml-3 text-gray-500"
            >
              <FaInstagram className="text-3xl hover:text-pink-600" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/in/yasirtahir5/"}
              className="ml-3 text-gray-500"
            >
              <FaLinkedin className="text-3xl hover:text-blue-900" />
            </Link>
            <Link
              target="_blank"
              href={"https://wa.me/+923070299901?"}
              className="ml-3 text-gray-500"
            >
              <FaWhatsapp className="text-3xl hover:text-green-700" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
