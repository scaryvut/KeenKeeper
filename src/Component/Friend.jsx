import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const getFriends = async () => {
  const res = await fetch("/friends.json");
  return res.json();
};

const Friend = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    getFriends().then((data) => setFriends(data));
  }, []);

  return (
    <div className="bg-[#F8FAFC] px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
      
      {/* TITLE */}
      <h3 className="font-bold text-xl mb-6 text-center sm:text-left">
        Your Friends
      </h3>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Link key={friend.id} to={`/details/${friend.id}`}>
            
            <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition duration-200">
              
              {/* IMAGE */}
              <img
                src={friend.picture}
                alt="profile"
                className="w-20 h-20 mx-auto rounded-full object-cover mb-4"
              />

              {/* NAME */}
              <h2 className="text-lg font-semibold text-gray-800">
                {friend.name}
              </h2>

              {/* DAYS */}
              <p className="text-sm text-gray-500 mb-3">
                {friend.days_since_contact} days ago
              </p>

              {/* TAGS */}
              <div className="flex gap-2 justify-center flex-wrap">
                {friend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-green-200 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* STATUS */}
              <div className="mt-4">
                <button
                  className={`text-sm px-4 py-1 rounded-full shadow ${
                    friend.status === "active"
                      ? "bg-green-500 text-white"
                      : friend.status === "overdue"
                      ? "bg-red-500 text-white"
                      : "bg-orange-400 text-white"
                  }`}
                >
                  {friend.status}
                </button>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Friend;