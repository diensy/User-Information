import { FaBars } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

import React, { useState, useRef, useEffect } from "react";

const Navbar = ({ slidebar, hideSlidebar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const a = location.pathname;
  const path = a.split("/");
  const path1 = a.split("/album/");
  const albumId = path1[1] ? path1[1] : "";
  const user = localStorage.getItem("userName");
  const avtar = user.slice(0, 1).toUpperCase();
  const dropDownRef = useRef(null);
  const [dropDown, setDropdown] = useState(false);
  const handelLogout = () => {
    localStorage.removeItem("userName");
    localStorage.removeItem("userPassword");
    navigate("/");
  };
  const toogleDropdown = (e) => {
    e.stopPropagation();
    setDropdown((prev) => !prev);
  };
  useEffect(() => {
    const handleClickedOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickedOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickedOutside);
    };
  }, []);
  return (
    <>
      <nav className="bg-gray-800 px-4 py-3 flex top-0 w-full fixed justify-stretch  shadow-lg  shadow-gray-700 z-30">
        <div className="flex items-center text-xl mr-auto">
          <FaBars
            className="text-white me-4 cursor-pointer"
            onClick={() => hideSlidebar(!slidebar)}
          />
          <span className="text-white font-semibold italic">
            {path[1].toUpperCase() + " " + albumId + " DETAILS"}
          </span>
        </div>

        <div className="relative z-50 " ref={dropDownRef}>
          <button className="text-white group" onClick={toogleDropdown}>
            <div className="avatar placeholder ">
              <div className="bg-sky-700 text-neutral-content w-10 rounded-full ">
                <span className="text-2xl">{avtar}</span>
              </div>
            </div>
          </button>
          {dropDown && (
            <div
              className="z-10  absolute shadow group-focus:block w-32 "
              style={{ margin: " 2px -106px" }}
            >
              <ul className="text-black list-none w-40 text-center font-semibold bg-slate-300 rounded-md pt-1 mt-2">
                <li>Hello {user}</li>
                <button
                  onClick={handelLogout}
                  className="flex justify-center items-center w-full p-1"
                >
                  Logout <IoIosLogOut className="ml-1" />
                </button>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default React.memo(Navbar);
