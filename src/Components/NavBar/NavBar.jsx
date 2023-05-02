import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { HiMoon, HiOutlineMoon } from "react-icons/hi2";

const NavBar = ({ reqDarkMode, darkModeState, getAnimeList }) => {
  const MoonIconRender = darkModeState ? (
    <HiOutlineMoon
      className="text-2xl text-white cursor-pointer"
      onClick={() => reqDarkMode()}
    />
  ) : (
    <HiMoon className="text-2xl cursor-pointer" onClick={() => reqDarkMode()} />
  );

  return (
    <div className="p-5">
      <nav className=" flex justify-between items-center">
        <h1 className="select-none capitalize text-4xl font-share dark:text-gray-100">
          Virus Plex
        </h1>
        <SearchBar getAnimeList={getAnimeList} />
        {MoonIconRender}
      </nav>
    </div>
  );
};

export default NavBar;
