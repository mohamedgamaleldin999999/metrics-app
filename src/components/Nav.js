import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronLeft, Mic, Settings } from 'react-feather';

const Navbar = () => {
  const location = useLocation();
  const [navPosition, setNavPosition] = useState(0);
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setNavPosition(0);
        break;
      case '/city':
        setNavPosition(1);
        break;
      default:
    }
  }, [location]);

  return (
    <nav className="w-full flex flex-row gap-0 pt-4 pb-4">
      <div className="basis-2/6 pl-3 font-semibold text-lg">
        {navPosition === 0
          ? (
            <span className=" flex justify-start items-center">
              <ChevronLeft />
              {(new Date()).getFullYear()}
            </span>
          )
          : (
            <span>
              <NavLink to="/"><ChevronLeft /></NavLink>
            </span>
          )}
      </div>
      <div className="basis-2/6 text-center capitalize text-lg header ml-auto mr-auto">
        {navPosition === 0
          ? <span className=" whitespace-nowrap">most views</span>
          : <span className=" whitespace-nowrap">town/city views</span>}
      </div>
      <div className="basis-2/6 pr-3 ml-auto">
        <div className="ml-auto mr-0 max-w-fit flex">
          <span className="pr-4"><Mic /></span>
          <span><Settings /></span>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
