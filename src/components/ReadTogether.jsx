import React from 'react'
import  readers from "/public/readers.jpg"
function ReadTogether() {
  return (
    <div className='bg-gray-100 flex justify-evenly items-center '>

        <div className="left-img-box">
            <img className='w-135 h-120 object-cover rounded-xl shadow-xl' src={readers} alt="readers image" />
        </div>

        <div className="left-content flex flex-col justify-center text-gray-800 w-130 h-155 ">

            <h1 className='text-6xl font-bold mb-6 '>Read together,<br />grow together</h1>
            <p className='text-xl mb-4 '>☑️Monthly curated tech reads selected by industry experts</p>
            <p className='text-xl mb-4 '>☑️Virtual and in-person meetups for deep-dive discussions</p>
            <p className='text-xl mb-4 '>☑️Early access to new tech book releases</p>
            <p className='text-xl mb-4 '>☑️Author Q&A sessions with tech thought leaders</p>

        </div>
    </div>
  )
}

export default ReadTogether