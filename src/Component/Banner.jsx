import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 pt-12 md:pt-16 pb-10 text-center">
        
        {/* TEXT SECTION */}
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Friends to keep close in your life
          </h1>

          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="mt-6 bg-green-700 text-white px-5 py-2 text-sm sm:text-base rounded-md hover:bg-green-800 transition">
            + Add a Friend
          </button>
        </div>

        {/* STATS SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
          
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-2xl font-semibold">10</h1>
            <p className="text-gray-500 text-sm">Total Friends</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-2xl font-semibold">3</h1>
            <p className="text-gray-500 text-sm">On Track</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-2xl font-semibold">6</h1>
            <p className="text-gray-500 text-sm">Need Attention</p>
          </div>

          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center">
            <h1 className="text-xl sm:text-2xl font-semibold">12</h1>
            <p className="text-gray-500 text-sm">
              Interactions This Month
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;