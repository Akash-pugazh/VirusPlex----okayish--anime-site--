import { Link } from "react-router-dom";

const Card = ({ animeName, animeImage, description, AnimeId }) => {
  return (
    <Link className="w-60 mr-2" to={`/AnimeDetails/${AnimeId}`}>
      <div className="min-h-full w-60 flex flex-col  items-center p-2 mx-1 rounded-lg shadow-lg shadow-gray-300 cursor-pointer z-10 transition-transform duration-500 hover:-translate-y-2 ">
        <div className="w-full h-52">
          <img
            src={animeImage}
            alt={animeName}
            className="max-h-52 min-w-full shadow-md shadow-gray-50 rounded-lg object-cover"
          />
        </div>
        <div className="p-1">
          <h3 className="font-semibold text-xl text-gray-700 my-1">
            {animeName}
          </h3>
          <p className="max-h-20 overflow-y-hidden leading-5 text-gray-500 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
