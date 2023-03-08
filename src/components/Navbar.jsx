import React from "react";
import { MdOutlineSoupKitchen } from "react-icons/md";
import { TbGrillFork } from "react-icons/tb";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // <div className=" container mx-auto flex justify-around p-7 rounded-lg shadow items-center bg-rose-100 sticky">
    //   <div className="flex justify-center items-center">
    //     <Link to={'/'}>
    //       <MdOutlineSoupKitchen className="text-4xl mx-5" />
    //     </Link>
    //     <p className="text-[#b5777f] font-semibold cursor-pointer text-3xl">
    //       Ohaiyo!
    //     </p>
    //   </div>
    //   <input
    //     className=" placeholder:text-black block bg-[#fda4af] w-60 border  rounded-md py-2 pl-9 pr-3 shadow-sm  focus:ring-1 sm:text-sm"
    //     placeholder="Search for anything..."
    //     type="text"
    //     name="search"
    //   />
    // </div>

    <div className="container mx-auto p-3 rounded-xl shadow-xl ">
      <nav className="flex flex-wrap items-center justify-between p-6 pt-2 rounded-xl border-4 border-double border-amber-700 bg-gradient-to-t from-orange-100 to-orange-300 sticky">
        <div className="flex justify-center items-center">
          <Link to={"/"}>
            <MdOutlineSoupKitchen className="text-6xl lg:ml-[20px] text-amber-900" />
          </Link>
          <a
            className="flex flex-col mr-4 text-5xl text-amber-900 font-semibold cursor-pointer italic hover:not-italic underline decoration-8 decoration-dotted hover:no-underline"
            href="#"
          >
            Categories
          </a>
        </div>
        <div className="main-menu w-full lg:w-auto flex flex-row justify-center mt-[25px] mb-[15px]">
          <ul className="flex lg:flex-row ml-[30px] lg:mx-auto pl-1">
            <li className=" pr-8">
              <a className="p-3 font-semibold text-[18px]" href="#">
                About
              </a>
            </li>
            <li className="list-disc pr-8">
              <a className="p-3 font-semibold text-[18px]" href="#">
                Forum
              </a>
            </li>
            <li className="list-disc pr-8">
              <a className="p-3 font-semibold text-[18px]" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* <div className="social-icon w-full lg:w-auto flex flex-row">
          <ul className="flex flex-row">
            <li>
              <a className="p-3 font-semibold text-[18px]" href="#">
                <i className="zmdi zmdi-facebook"></i>
              </a>
            </li>
            <li>
              <a className="p-3 font-semibold text-[18px]" href="#">
                <i className="zmdi zmdi-twitter"></i>
              </a>
            </li>
            <li>
              <a className="p-3 font-semibold text-[18px]" href="#">
                <i className="zmdi zmdi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div> */}
        <div className="mt-2 lg:mr-6 ml-4">
        <div className="pl-3 flex items-center border-1 border bg-white border-amber-900 shadow-md rounded-full">
          <input
            className="rounded-l-sm w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none"
            id="search"
            type="text"
            placeholder="Search"
          />
          <div class="">
            <button class="bg-amber-800 text-white rounded-full p-2 hover:bg-orange-500 focus:outline-none w-12 h-12 flex items-center justify-center outline-double outline-8 outline-amber-900">
            <TbGrillFork className="text-5xl text-white"/>
            </button>
          </div>
        </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
