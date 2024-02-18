"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="text-white body-font bg-gray-950 sticky top-0">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-yellow-500 mb-4 md:mb-0 hover:text-white">
          <Image
            className="h-10 w-10"
            alt="Logo"
            src={require("../../../public/assets/logo.png")}
          />
          <span
            className="ml-3 text-2xl first:mt-0 font "
            style={{ fontFamily: "Great Vibes" }}
          >
            Yasir Tahir
          </span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center tracking-tight">
          <Link
            href={"#Home"}
            className="mr-5 hover:text-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1"
          >
            Home
          </Link>
          <Link
            href={"#About"}
            className="mr-5 hover:text-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1"
          >
            About
          </Link>
          <Link
            href={"#Skills"}
            className="mr-5 hover:text-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1"
          >
            Skills
          </Link>
          <Link
            href={"#Contact"}
            className="mr-5 hover:text-yellow-500 transition duration-500 ease-in-out transform hover:-translate-y-1"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
