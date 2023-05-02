import {useState} from "react";
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
import ytvid from "../assets/ytvid.svg";
import OfferDetails from "../components/OfferDetails";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import FormControl from "@mui/material/FormControl";
import { TextField } from "@mui/material";

const Edit = () => {
  const breadcrumbs = [
   
    <Link underline="hover" key="2" color="inherit">
      Offer title
    </Link>,

  ];
 
  

  const companyText = ` Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
  diam nonumy eirmod tempor invidunt ut labore et dolore magna
  aliquyam erat, sed diam voluptua. At vero eos et accusam et
  justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
  takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
  dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
  sed diam voluptua. At vero eos et accusam et justo duo dolores
  et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
  est Lorem ipsum dolor sit amet.`;
  const [editorData, setEditorData] = useState(companyText);

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
  };
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
            View offer
          </button>
        </div>

        <div className="md:flex block border-[1px] border-[grey] mt-[1rem] min-h-[400px] ">
          <aside className="md:basis-[70%] basis-auto">
            <img src={image1} alt="" />
            <div className="p-[1rem]">
              <h3 className="text-xl">
                Intelligent Finite Elements in Structural mechanics
              </h3>

             <div className="w-full">
             <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onChange={handleEditorChange}
              />
             </div>
            <p className="flex gap-3 justify-end mt-[0.5rem]">  <button>cancel</button> <button className="bg-[#272E71] text-white px-[0.5rem] rounded">save</button></p>
            </div>
          </aside>
          <aside className=" flex flex-col gap-[8%] justify-center p-[1rem]">
            <div className="md:h-[40%] h-auto">
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
        <div className=" border-[1px] border-[grey] mt-[1rem] min-h-[150px]  flex flex-col relative items-center justify-center">
          <p className="p-[1rem] absolute top-0 left-2"> video</p>
          <FormControl sx={{ m: 1, width: "90%" }}>
            <TextField
              id="outlined-basic"
              label="Add a youtube or vimeo link"
              variant="outlined"
            />
          </FormControl>
        </div>
        <OfferDetails />
      </div>
    </Layout>
  );
};

export default Edit;
