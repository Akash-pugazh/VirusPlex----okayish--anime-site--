import { Link } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";

const AnimeSliders = ({ sliderTitle, sliderDataProps }) => {
  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const renderSliderItems = sliderDataProps.map(data => {
    return (
      <div key={data.id} className="h-40 border border-black ">
        <h1 className="grid place-items-center h-full">{data.name}</h1>
      </div>
    );
  });

  return (
    <div className="p-2">
      <Link to={sliderTitle}>
        <h2 className="text-2xl spacing font-semibold tracking-wide mb-2">
          {sliderTitle}
        </h2>
      </Link>
      <Slider {...sliderSettings}>{renderSliderItems}</Slider>
    </div>
  );
};

export default AnimeSliders;
