import React from "react";

function TechJourney() {
  return (
    <div className="bg-gray-100 flex items-center justify-center ">
      <div className="flex flex-col w-322 h-100 items-center bg-gray-800 text-white justify-center rounded-lg shadow-xl">
        <h1 className="text-center font-bold text-6xl mb-15">
          Your tech <br /> reading journey
        </h1>

        <div className="flex items-center justify-between gap-20">
          <div className="flex  flex-col justify-between ">
            <div className="flex items-center border-2 w-6 h-6 text-center justify-center text-xl p-4 mb-4 rounded-lg">
              1
            </div>
            <p className="text-xl">
              Choose your <br /> membership tier
            </p>
          </div>
          <div className="flex  flex-col">
            <div className="flex items-center border-2 w-6 h-6 text-center justify-center text-xl p-4 mb-4 rounded-lg">
              2
            </div>
            <p className="text-xl">
              Get your monthly <br /> book selection
            </p>
          </div>
          <div className="flex  flex-col">
            <div className="flex items-center border-2 w-6 h-6 text-center justify-center text-xl p-4 mb-4 rounded-lg">
              3
            </div>
            <p className="text-xl">
              Join our <br /> discussion forums
            </p>
          </div>
          <div className="flex  flex-col">
            <div className="flex items-center border-2 w-6 h-6 text-center justify-center text-xl p-4 mb-4 rounded-lg">
              4
            </div>
            <p className="text-xl">
              Attend exclusive <br /> meetups
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechJourney;
