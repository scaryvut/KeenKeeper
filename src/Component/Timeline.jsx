import React, { useContext, useState } from "react";
import { MyFriendContext } from "./Context";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import callImg from '../assets/call.png'
import textImg from '../assets/text.png'
import videoImg from '../assets/video.png'
import NoActivity from "./NoActivity";

const Timeline = () => {
  const { timelineFriends } = useContext(MyFriendContext);
  const [filter, setFilter] = useState("All");

  const filteredData =
    filter === "All"
      ? timelineFriends
      : timelineFriends.filter((item) => item.action === filter);

  const getIcon = (action) => {
    if (action === "Call") return <img src={callImg} alt="" />
    if (action === "Text") return <img src={textImg} alt=""/>
    if (action === "Video") return <img src={videoImg} alt=""/>
    return;
  };

  if (!timelineFriends || timelineFriends.length === 0) {
    return (
      <div className="p-10 text-center text-gray-500">
        <NoActivity></NoActivity>
      </div>
    );
  }

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-10">
      <div className="max-w-3xl mx-auto mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Timeline
        </h2>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-3 py-2 rounded-md text-sm bg-white"
        >
          <option value="All">All Activity</option>
          <option value="Call">Calls</option>
          <option value="Text">Texts</option>
          <option value="Video">Videos</option>
        </select>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">

        {filteredData
          .slice()
          .reverse()
          .map((item) => (
            <div
              key={item.id}
              className="bg-white px-4 py-3 rounded-lg shadow-sm flex items-center gap-4 hover:bg-gray-50"
            >
              <div className="text-xl text-gray-600">
                {getIcon(item.action)}
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-700">
                  <span className="font-medium">
                    {item.action}
                  </span>{" "}
                  with{" "}
                  <span className="text-gray-900 font-semibold">
                    {item.name}
                  </span>
                </p>

                <p className="text-xs text-gray-400">
                  {new Date(item.time).toDateString()}
                </p>
              </div>

            </div>
          ))}

      </div>
    </div>
  );
};

export default Timeline;