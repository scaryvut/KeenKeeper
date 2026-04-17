import React from 'react';

const NoActivity = () => {
    return (
        <div className="bg-[#F8FAFC] min-h-screen p-10">

  <div className="max-w-3xl mx-auto mb-6">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Timeline
    </h2>

    <select className="border px-3 py-2 rounded-md text-sm bg-white">
      <option>All Activity</option>
    </select>
  </div>

  <div className="max-w-3xl mx-auto">
    <div className="bg-white p-10 rounded-xl shadow-sm text-center">

      <div className="text-4xl mb-4">🕒</div>

      <h3 className="text-lg font-semibold text-gray-800">
        No activity yet
      </h3>

      <p className="text-sm text-gray-500 mt-2">
        When you call, text, or interact with friends, it will show up here.
      </p>

      <div className="mt-5 flex justify-center gap-3">
        <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50">
          Call someone
        </button>

        <button className="px-4 py-2 text-sm border rounded-md hover:bg-gray-50">
          Send a message
        </button>
      </div>

    </div>
  </div>
</div>
    );
};

export default NoActivity;