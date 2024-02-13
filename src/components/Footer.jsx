import maid from "../assets/Maid.jpeg";
import { BiMailSend, BiPhoneCall } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-[#49122C] font-mukta w-full h-full">
      <div className="flex justify-between items-center container mx-auto py-20 w-full">
        <div className="1 max-w-sm">
          {/* Insert your logo here */}
          <img
            src={maid}
            alt="Logo"
            className="w-12 h-12 bg-white rounded-none ml-5 py-1 px-1"
          />
          <h1 className="text-white font-mukta font-bold text-xl">
            Maidaville
          </h1>
          <p className="text-[8px] ml-4 -mt-1 text-white">HOTELS & SUITES</p>
          <div className="mt-5">
            <p className="text-sm text-[#eeeded]">
              8 Sam Adegbite Close, Off Amodu <br /> Ojikutu Street, Off Saka
              Tinubu, <br /> Victoria Island, Lagos, Nigeria
            </p>
          </div>
          <div className="mt-5 flex flex-col">
            <p className="text-sm text-[#eeeded] inline-flex items-center gap-1">
              {" "}
              <BiPhoneCall color="#ffffff" /> 01 454 0121
            </p>
            <p className="inline-flex items-center gap-1">
              <BiMailSend color="#fff" />
              <a
                className="text-[#eeeded] text-sm"
                href="mailto:maidaville@eoaholdings.com?subject=Your%20Subject&body=Your%20Message"
              >
                maidaville@eoaholdings.com
              </a>
            </p>
          </div>
        </div>
        <div className="2 text-white text-sm">
          <ul className=" flex flex-col gap-8">
            <li>The Hotel</li>
            <li>Rooms & Suite</li>
            <li>Experience</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="3 text-white text-sm">
          <ul className=" flex flex-col gap-8">
            <li>Restuarant</li>
            <li>Offers</li>
            <li>Jobs</li>
            <li>Seminar</li>
          </ul>
        </div>

        <div className="4 flex flex-col max-w-md gap-6 ">
          <h1 className="text-2xl font-bold text-white">
            “Offer more than a gift <br /> voucher, offer an experience”
          </h1>

          <button className="text-white max-w-[10rem] font-bold bg-transparent text-sm mt-4  px-2 py-2 rounded-none hover:bg-white hover:text-[#49122C] border border-white ">
            BOOK NOW
          </button>
        </div>
      </div>
      <div className="border-t border-[#4f1832] w-full font-sans">
        <div className="container mx-auto py-8 flex justify-between items-center">
          <p className="  text-[#fff] mt-3">
            &copy; Copyright {new Date().getFullYear()}{" "}
            maidaville@eoaholdings.com
          </p>
          <div className="flex gap-4 text-white">
            <h1>Terms & Condition</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
