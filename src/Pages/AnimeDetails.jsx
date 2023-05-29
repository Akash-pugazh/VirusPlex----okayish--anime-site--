import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import { getAnimeDetails } from "../Api";

export async function loader({ params }) {
  const { AnimeId } = params;
  const { data } = await getAnimeDetails(AnimeId);
  return data;
}

const AnimeDetails = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <main className="h-screen grid place-items-center">
      <Link to="/Anime">Back To AnimePage</Link>
      <section>AnimeDetails</section>
    </main>
  );
};

export default AnimeDetails;
