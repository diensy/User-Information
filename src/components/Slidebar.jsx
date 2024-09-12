import React from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { MdWork, MdPhotoSizeSelectActual } from "react-icons/md";
import { BiSolidPhotoAlbum } from "react-icons/bi";

import { Link } from "react-router-dom";
const Slidebar = ({ slidebar }) => {
  console.log("Slidebar");
  return (
    <>
      <div
        className={`transform ${
          slidebar ? "-translate-x-full " : "translate-x-0"
        } w-64 bg-gray-800 duration-300 h-full fixed top-0 px-4 py-2  z-30 left-0 `}
      >
        <div className="my-2 mb-4">
          <h2 className="text-2x text-white font-bold mt-16">User Dashboard</h2>
        </div>
        <hr />
        {/* Home */}
        <ul className="mt-3 font-bold text-white">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-600  duration-300 py-2">
            <Link to="/home" className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>Home
            </Link>
          </li>
        </ul>
        {/* User */}
        <ul className="mt-3 font-bold text-white">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-600  duration-300 py-2">
            <Link to="/user" className="px-3">
              <FaUser className="inline-block w-6 h-6 mr-2 -mt-2"></FaUser>Users
            </Link>
          </li>
        </ul>
        {/* Todos */}
        <ul className="mt-3 font-bold text-white">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-600  duration-300 py-2">
            <Link to="/todos" className="px-3">
              <MdWork className="inline-block w-6 h-6 mr-2 -mt-2"></MdWork>Todos
            </Link>
          </li>
        </ul>
        {/* Photos */}
        <ul className="mt-3 font-bold text-white">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-600  duration-300 py-2">
            <Link to="/photos" className="px-3">
              <MdPhotoSizeSelectActual className="inline-block w-6 h-6 mr-2 -mt-2"></MdPhotoSizeSelectActual>
              Photos
            </Link>
          </li>
        </ul>
        {/* Albums */}
        <ul className="mt-3 font-bold text-white">
          <li className="mb-2 rounded hover:shadow hover:bg-blue-600  duration-300 py-2">
            <Link to="/album" className="px-3">
              <BiSolidPhotoAlbum className="inline-block w-6 h-6 mr-2 -mt-2"></BiSolidPhotoAlbum>
              Album
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default React.memo(Slidebar);
