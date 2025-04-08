import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="bg-black">
      <div className="">
        <nav className="flex w-full screen-max-width items-center">
          <img src={appleImg} alt="Apple" width={14} height={18} />
          <div className="flex flex-1 justify-center max-sm:hidden gap-x-20">
            {navLists.map((navItems, index) => (
              <div
                key={index}
                className="text-sm cursor-pointer text-gray-500 hover:text-white transition-all"
              >
                {navItems}
              </div>
            ))}
          </div>
          <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
            <img src={searchImg} alt="Search" width={18} height={18} />
            <img src={bagImg} alt="Bag" width={18} height={18} />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
