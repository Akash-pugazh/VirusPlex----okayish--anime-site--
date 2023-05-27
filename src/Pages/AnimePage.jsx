import React from "react";
import { Form } from "react-router-dom";

const AnimePage = () => {
  return (
    <main className="h-screen w-screen grid place-items-center">
      <section className="w-full px-2">
        <Form className="relative">
          <input
            className=" relative h-12 w-full text-2xl pl-3 select-none border border-black focus:outline-none placeholder:opacity-50 focus:placeholder:text-transparent rounded-md"
            placeholder="Search"
            type="text"
            name="search"
          />
          <button
            type="submit"
            className="border border-black font-semibold rounded-md p-2 absolute right-1 top-1/2 -translate-y-1/2 hover:bg-black hover:opacity-80 hover:text-white transition-all duration-300 ease-linear"
          >
            Submit
          </button>
        </Form>
      </section>
      AnimePage
    </main>
  );
};

export default AnimePage;
