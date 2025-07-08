import React from "react";
import { FaBookReader } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import devImgs from "/public/dev-reading.jpg";
import UsersRating from "./UsersRating";

function Header() {
  return (
    <div className="bg-gray-800 text-white p-4 h-210">
      <header className="flex g-2 px-45">
        <span className="flex gap-2 font-bold text-xl">
          <FaBookReader />
          Tech book club
        </span>
      </header>
      <div className="main-content flex justify-evenly items-center mt-10">
        <div className="left-content">
          <h1 className="text-8xl mt-30 mb-8 font-medium p-0">
            Join the <br /> ultimate tech <br /> book club{" "}
          </h1>
          <p className="text-lg text-justify font-normal">
            Turn your reading time into learning time with fellow tech <br />{" "}
            enthusiasts.Get recommendations, join vibrant discussions, <br />{" "}
            and level up your skills one chapter at a time
          </p>
          <a href="#" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer flex items-center gap-2 my-6 uppercase font-bold w-75">
            Review membership options <FaArrowDown />
          </a>
        </div>
        <div className="right-content w-130 h-155">
          <img
            src={devImgs}
            alt="Developer reading"
            className=" object-cover rounded-lg shadow-lg w-full h-full mt-20"
          />
        </div>
      </div>
      <UsersRating />
    </div>
  );
}

export default Header;
