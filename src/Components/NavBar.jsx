import React from "react";
import { Link, NavLink } from "react-router-dom";

import "../Styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="w-full p-4 fixed z-10 flex justify-between items-center bg-slate-200 bg-opacity-50">
      <Link
        to="/"
        className="select-none text-black capitalize text-4xl font-share dark:text-gray-100"
      >
        ViRuS Plex
      </Link>
      {/* <Form>
        <input
          className="select-none transition ease-linear duration-400 border border-black focus:outline-none focus:placeholder:text-transparent py-1 pl-2 pr-10 rounded-md dark:border-gray-400 dark:text-white dark:bg-transparent"
          placeholder="Search 🔍"
          type="text"
          name="search"
        />
      </Form> */}
      <section>
        <NavLink
          style={({ isActive }) => {
            return {
              borderBottomWidth: isActive ? "2px" : "",
              borderBottomColor: isActive ? "black" : "",
              borderStyle: isActive ? "solid" : "",
            };
          }}
          className="ml-4 p-1 text-black font-semibold relative"
          id="NavLink"
          to="Anime"
        >
          <span>Anime</span>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return {
              borderBottomWidth: isActive ? "2px" : "",
              borderBottomColor: isActive ? "black" : "",
              borderStyle: isActive ? "solid" : "",
            };
          }}
          className="ml-4 p-1 text-black  font-semibold relative"
          id="NavLink"
          to="Login"
        >
          <span>Login</span>
        </NavLink>
      </section>
    </nav>
  );
};

export default NavBar;
