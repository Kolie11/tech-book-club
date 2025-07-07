import React from "react";
import bookImg from "/public/book-readers.jpg";
import { SiTypescript } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";

function Average() {
  return (
    <div>
      <div className="flex justify-evenly items-center bg-gray-100  ">
        <div className="flex flex-col justify-center text-gray-800 w-130 h-155 ml-26">
          <h1 className="text-6xl font-bold mb-4">
            Not your average book <span>club</span>
          </h1>
          <p className="text-xl">
            Connect with a community that speaks your language - from{" "}
            <strong>Python</strong> to <strong>TypeScript</strong> and
            everything in between. Our discussions technical depth with
            practical applications.
          </p>
        </div>

        <div className="languages relative flex  gap-4 text-white ">
          <a
            href="#"
            className="bg-blue-500 p-3 rounded-full shadow-lg absolute left-15 w-12 h-12 flex items-center justify-center"
          >
            <SiTypescript />
          </a>
          <a
            href="#"
            className="bg-black p-3 rounded-full shadow-lg absolute -right-20 -bottom-28 w-11 h-11 flex items-center justify-center"
          >
            <FaSquareGithub />
          </a>
          <a
            href="#"
            className="bg-cyan-300 p-3 rounded-full shadow-lg absolute left-25 top-15 w-10 h-10 flex items-center justify-center"
          >
            <FaReact />
          </a>
        </div>

        <div>
          <img
            src={bookImg}
            alt="Book readers"
            className="w-135 h-120 object-cover rounded-lg shadow-lg  mr-20"
          />
        </div>
      </div>
    </div>
  );
}

export default Average;
