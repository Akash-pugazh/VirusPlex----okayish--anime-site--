import React from "react";
import AnimeSliders from "../Components/AnimeSliders";
// import { useLoaderData } from "react-router-dom";

// import { getTopAnime, getAiringAnime, getPopularAnime } from "../Api";

export async function loader() {
  // const apiCalls = [getTopAnime(), getAiringAnime(), getPopularAnime()]
  // const { data: topAnimeData } = await getTopAnime();
  // const { data: airingAnimeData } = await getAiringAnime();
  // const { data: popularAnimedata } = await getPopularAnime();
  // await Promise.all(apiCalls)
  // return {
  //   topAnimeData,
  //   airingAnimeData,
  //   popularAnimedata,
  // };
  return null
}



const AnimeSections = () => {
  // const { topAnimeData, airingAnimeData, popularAnimedata } = useLoaderData();

  const dummySliderContent = [
    { id: 1, name: "Akash" },
    { id: 2, name: "Akash" },
    { id: 3, name: "Akash" },
  ];
  return (
    <div>
      <section className="Top">
        <AnimeSliders
          sliderTitle="Top📈"
          sliderDataProps={dummySliderContent}
        />
      </section>
      <section className="Popular">
        <AnimeSliders
          sliderTitle="Popular🪄"
          sliderDataProps={dummySliderContent}
        />
      </section>
      <section className="Airing">
        <AnimeSliders
          sliderTitle="Airing👻"
          sliderDataProps={dummySliderContent}
        />
      </section>
    </div>
  );
};

export default AnimeSections;
