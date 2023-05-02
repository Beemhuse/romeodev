import React from "react";
import settings from "../assets/setting.png";
import trl from "../assets/trl.png";
import strategy from '../assets/strategy.png'
import money from '../assets/money.png'

const OfferDetails = () => {
  return (
    <div className=" border-[1px] border-[grey] p-[1rem] mt-[1rem] min-h-[200px]  ">
      <p className="p-[0.5rem]  "> offer details</p>
      <aside className="grid grid-cols-2 justify-center">
        <figure className="mb-[2rem]">
          {" "}
          <p className="flex">
            <img src={settings} alt="" /> <span>Technology</span>
          </p>
          <p className="mt-3 mx-[1rem]">
            <span className="bg-[#E5E7EB] rounded-md py-[0.2rem] px-[0.5rem]">
              label 1
            </span>
            <span className="bg-[#E5E7EB] mx-[0.5rem] rounded-md py-[0.2rem] px-[0.5rem]">
              label 2
            </span>
            <span className="bg-[#E5E7EB] rounded-md py-[0.2rem] px-[0.5rem]">
              label 3
            </span>
          </p>
        </figure>
        <figure className="mb-[1rem]">
          {" "}
          <p className="flex">
            <img src={strategy} alt="" /> <span>Business Model</span>
          </p>
          <p className="mt-3 mx-[1rem]">
            <span className="bg-[#E5E7EB] rounded-md py-[0.2rem] px-[0.5rem]">
              label 1
            </span>
            <span className="bg-[#E5E7EB] mx-[0.5rem] rounded-md py-[0.2rem] px-[0.5rem]">
              label 2
            </span>
            <span className="bg-[#E5E7EB] rounded-md py-[0.2rem] px-[0.5rem]">
              label 3
            </span>
          </p>
        </figure>
        <figure>
          {" "}
          <p className="flex">
            <img src={trl} alt="" /> <span>TRL</span>
          </p>
          <p className="mt-3 mx-[1rem]">
            <span className="bg-[#E5E7EB] rounded-md py-[0.2rem] px-[0.5rem]">
            TRL 9 – Actual system proven in operational environment
            </span>
            
          </p>
        </figure>
        <figure>
          {" "}
          <p className="flex">
            <img src={money} alt="" /> <span>costs</span>
          </p>
          <p className="mt-3 mx-[1rem]">
            <span className="bg-[#E5E7EB] rounded-md py-[0.2rem] px-[0.5rem]">
              1000
            </span>
            
          </p>
        </figure>
      </aside>
    </div>
  );
};

export default OfferDetails;
