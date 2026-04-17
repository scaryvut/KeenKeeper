import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#F8FAFC]">
      <div className="ml-[245px] mr-[245px] pt-[80px] pb-[40px] text-center">
        <div className="text-center max-w-2xl m-auto">
          <h1 className="text-4xl font-bold text-gray-800">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-500 mt-4">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <button className="mt-6 bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition">
            + Add a Friend
          </button>
        </div>

        <div className="flex justify-between gap-[24px] mt-[40px]">
          <div className="w-[259.5px] h-[137px] shadow bg-white rounded-xl items-center flex flex-col justify-center ">
            <h1 className="text-2xl font-semibold">10</h1>
            <p className="text-gray-500">Total Friends</p>
          </div>

          <div className="w-[259.5px] h-[137px] shadow bg-white rounded-xl items-center flex flex-col justify-center ">
            <h1 className="text-2xl font-semibold">3</h1>
            <p className="text-gray-500">On Track</p>
          </div>
          <div className="w-[259.5px] h-[137px] shadow bg-white rounded-xl items-center flex flex-col justify-center ">
            <h1 className="text-2xl font-semibold">6</h1>
            <p className="text-gray-500">Need Attention</p>
          </div>
          <div className="w-[259.5px] h-[137px] shadow bg-white rounded-xl items-center flex flex-col justify-center ">
            <h1 className="text-2xl font-semibold">12</h1>
            <p className="text-gray-500">Interactions This Month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
