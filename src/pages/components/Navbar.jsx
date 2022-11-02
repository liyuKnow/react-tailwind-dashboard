import React from "react";
import { FaArrowDown, FaAngleDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="px-4 py-2 bg-white">
      <div className="container flex align-middle items-center justify-between mx-auto">
        <div className="flex w-[400px] xl:w-96">
          <input
            type="search"
            className="
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white opacity-40 bg-clip-padding
              border border-solid border-gray-500
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
            "
            id="exampleSearch"
            placeholder="Search"
          />
        </div>
        <div className="flex justify-center items-center gap-2">
          <img
            src="https://i.pravatar.cc/150?img=10"
            className="w-[50px] h-[50px] rounded-full"
            alt="Profile"
          />
          <FaAngleDown />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
