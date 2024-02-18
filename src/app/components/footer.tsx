import Link from "next/link";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-gray-950">
      <footer className=" px-4 py-2 text-center text-white">
        <small className="mb-2 block text-sm scroll-m-20 tracking-tight">
          &copy; 2024 Yasir Tahir. All rights reserved.
        </small>
        <p className="text-sm mb-2 scroll-m-20 tracking-tight">
          <span className="font-semibold ">About this website:</span> Built with
          React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email
          & Resend, Vercel hosting.
        </p>
        <span className="inline-flex sm:ml-auto justify-center sm:justify-start">
          <Link
            target="_blank"
            href={"https://www.instagram.com/yasirt_5/"}
            className="ml-3 text-yellow-500"
          >
            <FaInstagram className="text-3xl hover:text-pink-600" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.linkedin.com/in/yasirtahir5/"}
            className="ml-3 text-yellow-500"
          >
            <FaLinkedin className="text-3xl hover:text-blue-900" />
          </Link>
          <Link
            target="_blank"
            href={"https://wa.me/+923070299901?"}
            className="ml-3 text-yellow-500"
          >
            <FaWhatsapp className="text-3xl hover:text-green-700" />
          </Link>
        </span>
      </footer>
    </div>
  );
};

export default Footer;
