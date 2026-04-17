import React, { useState } from "react";
import navImg from "../assets/logo.png";
import { IoHomeOutline } from "react-icons/io5";
import { RiTimeLine } from "react-icons/ri";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink } from "react-router";

const Navbar = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="px-[80px]">
      <div className="navbar bg-base-100 flex justify-between items-center">
      
        <div>
          <img src={navImg} alt="Logo" className="h-10" />
        </div>

      
        <div className="flex gap-6 items-center">
          <NavLink to="/"
            onClick={() => setActive("home")}
            className={`flex items-center gap-2 px-3 py-1 rounded transition ${
              active === "home"
                ? "bg-green-900 text-white"
                : "text-black hover:bg-gray-200"
            }`}
          >
            <IoHomeOutline />
            Home
          </NavLink>

          <NavLink to="/timelineFriends"
            onClick={() => setActive("timeline")}
            className={`flex items-center gap-2 px-3 py-1 rounded transition ${
              active === "timeline"
                ? "bg-green-900 text-white"
                : "text-black hover:bg-gray-200"
            }`}
          >
            <RiTimeLine />
            Timeline
          </NavLink>

          <NavLink to="/stats"
            onClick={() => setActive("stats")}
            className={`flex items-center gap-2 px-3 py-1 rounded transition ${
              active === "stats"
                ? "bg-green-900 text-white"
                : "text-black hover:bg-gray-200"
            }`}
          >
            <TfiStatsUp />
            Stats
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
