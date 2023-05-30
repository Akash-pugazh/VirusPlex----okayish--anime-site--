import React from "react";
import AnimeSliders from "../Components/AnimeSliders";
const AnimeSections = () => {
  const dummySliderContent = [
    { id: 1, name: "Akash" },
    { id: 2, name: "Akash" },
    { id: 3, name: "Akash" },
  ];
  return (
    <div>
      <section className="Trending">
        <AnimeSliders
          sliderTitle="Trending🔥"
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
