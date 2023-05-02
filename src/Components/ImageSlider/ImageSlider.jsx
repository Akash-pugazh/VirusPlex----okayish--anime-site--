import { useState } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const ImageSlider = ({ airingAnimeList }) => {
  const [imageState, setImageState] = useState(0);
  const [animateImageState, setAnimateImageState] = useState(true);

  const airingAnimeListSrcArray = [];
  airingAnimeList.forEach(anime =>
    airingAnimeListSrcArray.push(anime.images.webp.large_image_url),
  );

  const changeImageInterval =
    animateImageState &&
    setInterval(() => {
      imageState < airingAnimeListSrcArray.length - 1
        ? setImageState(imageState + 1)
        : setImageState(0);
      clearInterval(changeImageInterval);
    }, 1000);

  return (
    <div
      onMouseOver={() => {
        console.log("MouseOver");
        setAnimateImageState(false);
        clearInterval(changeImageInterval);
      }}
      onMouseOut={() => setAnimateImageState(true)}
      className="relative h-full rounded-3xl cursor-pointer"
    >
      <AiFillCaretLeft
        onClick={() => {
          imageState === 0
            ? setImageState(airingAnimeListSrcArray.length - 1)
            : setImageState(imageState - 1);
        }}
        className="transition ease-linear duration-300 w-[5%] absolute text-4xl text-gray-50 backdrop: bg-white/30 h-full rounded-tl-3xl rounded-bl-3xl hover:bg-white/60"
      />
      <img
        src={airingAnimeListSrcArray[imageState]}
        onClick={() => console.log("Clicked")}
        className="select-none w-full h-full object-cover rounded-3xl"
      />
      <AiFillCaretRight
        onClick={() => {
          imageState < airingAnimeListSrcArray.length - 1
            ? setImageState(imageState + 1)
            : setImageState(0);
        }}
        className="transition ease-linear duration-300 w-[5%] absolute top-0 right-0 text-4xl text-gray-50 backdrop: bg-white/30 h-full rounded-tr-3xl rounded-br-3xl hover:bg-white/60"
      />
    </div>
  );
};

export default ImageSlider;
