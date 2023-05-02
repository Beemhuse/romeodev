import React from "react";
import Layout from "../components/Layout";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import image1 from "../assets/image1.svg";
import logogroup from "../assets/logogroup.svg";
import MapContainer from "../components/Map";
import pic from "../assets/pic.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ytvid from '../assets/ytvid.svg'
import OfferDetails from '../components/OfferDetails'

const Product = () => {
  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit">
      <HomeIcon sx={{ mr: 0.5, fontSize: 20 }} fontSize="inherit" />
    </Link>,
    <Link underline="hover" key="2" color="inherit">
      Offers
    </Link>,
    <Typography key="3" color="text.primary">
      Intelligent Finite Elements in Structural mechanics
    </Typography>,
  ];
  return (
    <Layout>
      <div className="mt-[80px]">
        <div className="flex w-full justify-between items-center">
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>
          <button className="bg-[#272E71] text-white px-4 py-2 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50">
            Edit
          </button>
        </div>

        <div className="md:flex block border-[1px] border-[grey] mt-[1rem] min-h-[400px] ">
          <aside className="md:basis-[70%] basis-auto">
            <img src={image1} alt="" />
            <div className="p-[1rem]">
              <h3 className="text-xl">
                Intelligent Finite Elements in Structural mechanics
              </h3>
              <p className="text-[13px]">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
          </aside>
          <aside className=" flex flex-col gap-[8%] justify-center p-[1rem]">
            <div className="h-[40%]">
              <p>Offered By</p>
              <img src={logogroup} alt="" />
              <ul>
                <li className="flex items-center gap-3">
                  <img src={pic} alt="" />
                  <span>
                    Sven Pietsch <br /> <small>Innoloft GmbH</small>
                  </span>
                </li>
              </ul>
              <p className="w-[70%]">
                <span>
                  <LocationOnIcon />
                </span>
                Jülicher Straße 72a, 52070 Aachen, Germany
              </p>
            </div>
            <div className="h-[40%] md:block hidden">
              <MapContainer />
            </div>
          </aside>
        </div>

        {/* videosection */}
        <div className=" border-[1px] border-[grey] mt-[1rem] min-h-[400px]  flex flex-col relative items-center justify-center">
          <p className="p-[2rem] absolute top-2 left-2"> video</p>
          <img src={ytvid} className='h-[70%] w-[60%] m-auto'/>
       </div>
       <OfferDetails />
      </div>
    </Layout>
  );
};

export default Product;
