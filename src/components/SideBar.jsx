import React from "react";
import pic from "../assets/pic.png";
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import ApartmentIcon from '@mui/icons-material/Apartment';

const SideBar = () => {
  return (
    <div className=" fixed h-full w-[300px] p-[3rem] border-r-[1px] border-[grey] mt-[80px] md:block hidden" >
      <ul className="flex gap-3 flex-col">
        <li className="flex items-center gap-3">
          <img src={pic} alt="" />
          <span>Sven Pietsch <br /> <small>Innoloft GmbH</small></span>
        </li>
        <li> <HomeIcon /> Home</li>
        <li> <PeopleIcon /> Members</li>
        <li> <ApartmentIcon /> Organisations</li>
      </ul>
    </div>
  );
};

export default SideBar;
