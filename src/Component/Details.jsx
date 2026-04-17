import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineTextsms } from "react-icons/md";
import { FiVideo } from "react-icons/fi";
import { MyFriendContext } from "./Context";
import { toast } from "react-toastify";
import NotFound from "./NotFound";

const Details = () => {
  const { id } = useParams();
  const friends = useLoaderData();

  const expectedFriends = friends.find((friend) => friend.id == id);
  const { setTimelineFriends } = useContext(MyFriendContext);

  if (!expectedFriends) {
    return <div className="p-10 text-center"><NotFound></NotFound></div>;
  }

  const handleTimeline = (type) => {
    const newEntry = {
      id: crypto.randomUUID(),
      friendId: expectedFriends.id,
      name: expectedFriends.name,
      picture: expectedFriends.picture,
      action: type,
      time: new Date(),
    };

    setTimelineFriends((prev) => [...prev, newEntry]);

    if (type === "Call") toast.success(`Called ${expectedFriends.name}`);
    if (type === "Text") toast.success(`Texted ${expectedFriends.name}`);
    if (type === "Video") toast.success(`Video called ${expectedFriends.name}`);
  };

  return (
    <div className="bg-[#F8FAFC] px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm space-y-3">
            <img
              src={expectedFriends.picture}
              className="w-16 h-16 rounded-full mx-auto"
              alt=""
            />

            <h2 className="font-semibold text-gray-800">
              {expectedFriends.name}
            </h2>

            <div className="flex justify-center gap-2 text-xs flex-wrap">
              <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                {expectedFriends.status}
              </span>

              {expectedFriends.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-green-100 text-green-600 px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-xs text-gray-500 italic">
              {expectedFriends.bio}
            </p>

            <p className="text-xs text-gray-400">{expectedFriends.email}</p>
          </div>

          <div className="space-y-3">
            <button className="w-full bg-white p-3 rounded-lg shadow-sm text-sm hover:bg-gray-50">
              Snooze 2 Weeks
            </button>

            <button className="w-full bg-white p-3 rounded-lg shadow-sm text-sm hover:bg-gray-50">
              Archive
            </button>

            <button className="w-full bg-white p-3 rounded-lg shadow-sm text-sm text-red-500 hover:bg-gray-50">
              Delete
            </button>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <h3 className="text-lg sm:text-xl font-bold text-green-700">
                {expectedFriends.days_since_contact}
              </h3>
              <p className="text-xs text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <h3 className="text-lg sm:text-xl font-bold text-green-700">
                {expectedFriends.goal}
              </h3>
              <p className="text-xs text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm text-center">
              <h3 className="text-sm sm:text-md font-semibold">
                {expectedFriends.next_due_date}
              </h3>
              <p className="text-xs text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h4 className="font-medium text-gray-800">Relationship Goal</h4>
              <p className="text-sm text-gray-500">
                Connect every{" "}
                <span className="font-semibold">
                  {expectedFriends.goal} days
                </span>
              </p>
            </div>

            <button className="text-xs border px-3 py-1 rounded-md hover:bg-gray-50">
              Edit
            </button>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h4 className="mb-3 font-medium text-gray-800">Quick Check-In</h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <button
                onClick={() => handleTimeline("Call")}
                className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
              >
                <LuPhoneCall className="text-lg" />
                <span className="text-sm mt-1">Call</span>
              </button>

              <button
                onClick={() => handleTimeline("Text")}
                className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
              >
                <MdOutlineTextsms className="text-lg" />
                <span className="text-sm mt-1">Text</span>
              </button>

              <button
                onClick={() => handleTimeline("Video")}
                className="border rounded-lg p-4 flex flex-col items-center hover:bg-gray-50"
              >
                <FiVideo className="text-lg" />
                <span className="text-sm mt-1">Video</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
