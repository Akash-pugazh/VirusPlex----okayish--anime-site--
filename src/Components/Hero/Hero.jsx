import ImageSlider from "../ImageSlider/ImageSlider";
import { airingAnimeFetcher } from "../../Api/Api";
import { useState, useEffect } from "react";

const Hero = () => {
  const [airingAnimeList, setAiringAnimeList] = useState([]);

  useEffect(() => {
    airingAnimeFetcher().then(response => {
      setAiringAnimeList([...response]);
    });
  }, []);

  return (
    <div className="relative h-[30rem] p-2">
      <ImageSlider airingAnimeList={airingAnimeList} />
    </div>
  );
};

export default Hero;
