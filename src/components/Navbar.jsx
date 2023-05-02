import React from "react";
import logo from "../assets/inoloft_logo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import messenger from "../assets/messenger.svg";
import profile from "../assets/profile.svg";

const Navbar = () => {
  return (
    <section className="bg-[#272E71] p-[1rem] z-[20] flex items-center justify-between gap-4 fixed w-full">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div className="relative basis-[30%]">
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-[royalblue] focus:border-royalblue focus:outline-none bg-white"
          placeholder="Enter interests, keyword, company name, etc."
        />
        <svg
          className="absolute top-3 right-3 h-5 w-5 text-royalblue"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-1.333a6.667 6.667 0 100-13.334 6.667 6.667 0 000 13.334zM9.16 7.844a.667.667 0 111.005-.868 3.334 3.334 0 104.35 4.35.667.667 0 11-.868 1.005 4.667 4.667 0 11-4.487-4.487z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-white">
          <NotificationsNoneIcon />
        </span>
        <span>
          <img src={messenger} alt="" />
        </span>
        <span>
          <img src={profile} alt="" />
        </span>
      </div>
    </section>
  );
};

export default Navbar;
