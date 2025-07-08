import React from "react";
import { FaStar } from "react-icons/fa";
function Membership() {
  return (
    <div className="bg-gray-100 h-full">
      <h1 className="font-bold text-center text-6xl pt-20 pb-10 text-gray-800">
        Membership options
      </h1>

      <div className="box flex items-center justify-center gap-6">
        <div className="border-2 border-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-2xl text-gray-800 pb-4">Starter</h2>
          <span className="text-xl">
            <strong>$19 </strong>/month
          </span>
          <hr className="mt-4 border-gray-400" />
          <p className="text-lg mt-3">☑️ 1 book/month</p>
          <p className="text-lg mb-5">☑️ Online forums</p>
          <a
            href="#"
            className="uppercase font-bold border-2 border-gray-800 p-3 rounded-lg inline-block text-center mt-2  text-gray-100 bg-gray-800 hover:bg-gray-500 hover:border-0 transition duration-500 ease"
          >
            Subscribe now
          </a>
        </div>

        <div className="border-2 border-gray-200 p-4 rounded-lg w-80 h-75 bg-blue-300 shadow-lg">
          <h2 className="font-bold text-2xl text-gray-800 pb-7">Pro</h2>
          <span className="text-xl">
            <strong>$29 </strong>/month
          </span>
          <hr className="mt-4 border-gray-400" />
          <p className="text-lg mt-3">☑️ 2 books/month</p>
          <p className="text-lg mb-5">☑️ Virtual meetups</p>
          <a
            href="#"
            className="text-center w-full uppercase font-bold border-2 border-gray-900 p-3 rounded-lg inline-block  bg-gray-100 mt-2 hover:bg-blue-100 transition duration-500 ease"
          >
            Subscribe now
          </a>
        </div>

        <div className="border-2 border-gray-200 p-4 rounded-lg">
          <h2 className="font-bold text-2xl text-gray-800 pb-4">Enterprise</h2>
          <span className="text-xl font-bold">Custom</span>
          <hr className="mt-4 border-gray-400" />
          <p className="text-lg mt-3">☑️ Team access</p>
          <p className="text-lg mb-5">☑️ Private sessions</p>
          <a
            href="#"
            className="uppercase font-bold border-2 border-gray-800 p-3 rounded-lg inline-block mt-2 w-full text-center text-gray-100 bg-gray-800 hover:bg-gray-500 hover:border-0 transition duration-500 ease"
          >
            Talk to us
          </a>
        </div>
      </div>

<span className="flex items-center justify-center mt-20 text-orange-500 gap-2">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
</span>
<h3 className="text-center mt-4 font-bold text-4xl">"This book club transformed my technical <br /> reading from a solitary activity into an <br /> enrichin community experience. The <br /> discussions are gold!"</h3>
<span className="text-center mt-4 block text-gray-500 pb-20">Sarah chen, Software Architect</span>
    </div>
  );
}

export default Membership;
