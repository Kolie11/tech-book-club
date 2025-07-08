import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";
import UsersRating from './UsersRating';
import { FaLinkedin } from "react-icons/fa";

function DebugList() {
  return (
    <div className='flex  items-center justify-center flex-col bg-slate-800 pt-20'>
        <h1 className='text-6xl font-bold text-center text-white'>Ready to debug your <br /> reading list?</h1>
        <a href="#" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 cursor-pointer flex items-center gap-2 my-6 uppercase font-bold w-75'>Review membership options <FaLongArrowAltUp /></a>
       <div className='text-white mr-45 mb-8'>
         <UsersRating />
       </div>
       <hr className='border-1 border-gray-400 w-350'/>
       <footer className='text-white flex items-center justify-between w-full px-33 my-2'>
       <span> © {new Date().getFullYear()} - Tech Book Club - by Mathias </span>
        <a href='#'><FaLinkedin /></a>
       </footer>
    </div>
  )
}

export default DebugList