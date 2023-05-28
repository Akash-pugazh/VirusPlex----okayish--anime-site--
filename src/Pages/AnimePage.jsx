import React from "react";
import { Form, useActionData } from "react-router-dom";
import { searchAnime } from "../Api";
import Card from "../Components/Card/Card";
export async function action({ request }) {
  const formData = await request.formData();
  const searchValue = formData.get("search");
  const { data } = await searchAnime(searchValue);
  console.log(data);
  const render = await data.map(anime => {
    return (
      <Card
        key={anime.mal_id}
        animeName={anime.title_english}
        animeImage={anime.images.webp.large_image_url}
        description={anime.synopsis}
      />
    );
  });
  return render;
}

const AnimePage = () => {
  const data = useActionData();
  console.log(data);
  return (
    <main className="w-screen pt-24">
      <section className="w-full px-2 pb-2 fixed top-18 z-10">
        <Form method="post" className="relative">
          <input
            className=" relative h-12 w-full text-2xl pl-3 select-none border border-black focus:outline-none placeholder:opacity-50 focus:placeholder:text-transparent rounded-md"
            placeholder="Search"
            type="text"
            name="search"
          />
          <button className="border border-black font-semibold rounded-md p-2 absolute right-1 top-1/2 -translate-y-1/2 hover:bg-black hover:opacity-80 hover:text-white transition-all duration-300 ease-linear">
            Submit
          </button>
        </Form>
      </section>
      <section className="px-2 grid grid-cols-2 overflow-hidden">{data}</section>
    </main>
  );
};

export default AnimePage;
