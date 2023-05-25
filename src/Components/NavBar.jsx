import React from "react";
import { Link, Form } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="w-full p-2 fixed flex justify-between items-center">
      <Link
        to="/"
        className="select-none text-black capitalize text-4xl font-share dark:text-gray-100"
      >
        ViRuS Plex
      </Link>
      <Form>
        <input
          className="select-none transition ease-linear duration-400 border border-black focus:outline-none focus:placeholder:text-transparent py-1 pl-2 pr-10 rounded-md dark:border-gray-400 dark:text-white dark:bg-transparent"
          placeholder="Search 🔍"
          type="text"
          name="search"
        />
      </Form>
      <Link
        to="Login"
        className="border border-black py-1 px-2 text-black rounded-md font-semibold"
      >
        Login
      </Link>
    </nav>
  );
};

export default NavBar;
