const Card = ({ animeName , animeImage, description }) => {
  return (
    <div className="w-60 mr-2 ">
      <div className="min-h-full w-60 flex flex-col  items-center p-2 mx-1 rounded-lg shadow-lg shadow-gray-300 cursor-pointer z-10 transition-transform duration-500 hover:-translate-y-2  dark:shadow-md dark:bg-[#252525]">
        <div className="w-full h-52">
          <img
            src={animeImage}
            alt={animeName}
            className="max-h-52 min-w-full shadow-md shadow-gray-50 rounded-lg object-cover dark:shadow-none"
          />
        </div>
        <div className="p-1">
          <h3 className="font-semibold text-xl text-gray-700 my-1 dark:text-gray-300">
            {animeName}
          </h3>
          <p className="max-h-20 overflow-y-auto leading-5 text-gray-500 text-sm dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
