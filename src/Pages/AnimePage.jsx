import React from "react";

import { Form, useActionData } from "react-router-dom";
import { Outlet } from "react-router-dom";

import { searchAnime } from "../Api";
import Card from "../Components/Card/Card";

import AnimeSections from "./AnimeSections";

export async function action({ request }) {
  const formData = await request.formData();
  const searchValue = formData.get("search");
  const { data } = await searchAnime(searchValue);
  const render = await data.map(anime => {
    return (
      <Card
        key={anime.mal_id}
        animeName={anime.title_english}
        animeImage={anime.images.webp.large_image_url}
        description={anime.synopsis}
        AnimeId={anime.mal_id}
      />
    );
  });
  return render;
}

const AnimePage = () => {
  const data = useActionData();

  return (
    <main className="h-full w-screen">
      <section className="w-full px-2 fixed top-[10%] z-50">
        <Form method="post" className="relative">
          <input
            className=" relative h-12 w-full text-2xl pl-3 select-none border border-black focus:outline-none placeholder:opacity-50 focus:placeholder:text-transparent rounded-md z-40"
            placeholder="Search"
            type="text"
            name="search"
          />
          <button className="border border-black font-semibold rounded-md p-2 absolute right-1 top-1/2 -translate-y-1/2 hover:bg-black hover:opacity-80 hover:text-white transition-all duration-300 ease-linear z-40">
            Submit
          </button>
        </Form>
      </section>
      <section className="pt-[27%]">
        {data && (
          <section className="px-2">
            <h1 className="bg-white w-full pl-2 text-2xl font-semibold z-10">
              Search Results🌚
            </h1>
            <div className=" grid grid-cols-2 -z-50">{data}</div>
          </section>
        )}

        <Outlet />
      </section>
    </main>
  );
};

export default AnimePage;
