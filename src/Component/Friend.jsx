import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { PacmanLoader } from "react-spinners";

const getFriends = async () => {
  const res = await fetch("/friends.json");
  return res.json();
};

const Friend = () => {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => {
    getFriends().then((data) => {
      setFriends(data);
      setLoading(false);
    });
  }, 2000);

  return () => clearTimeout(timer); // ✅ prevent memory leak
}, []);

 if (loading) {
  return (
    <div className="min-h-screen flex justify-center bg-[#F8FAFC]">
      <PacmanLoader />
    </div>
  );
}

  return (
    <div className="bg-[#F8FAFC] px-4 sm:px-6 md:px-10 lg:px-20 py-10">
      <h3 className="font-bold text-xl mb-6">Your Friends</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {friends.map((friend) => (
          <Link key={friend.id} to={`/details/${friend.id}`}>
            <div className="bg-white rounded-xl p-6 text-center shadow-sm">
              <img
                src={friend.picture}
                className="w-20 h-20 mx-auto rounded-full mb-4"
                alt=""
              />
              <h2 className="font-semibold">{friend.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Friend;