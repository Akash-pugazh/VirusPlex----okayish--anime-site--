import { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import CardBar from "./Components/CardBar/CardBar";
import Card from "./Components/Card/Card";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [animeList, setAnimeList] = useState([]);

  const getAnimeList = animeData => {
    setAnimeList([...animeData]);
  };



  const defaultImageSource =
    "https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png";

  const searchResult = animeList.map(anime => {
    const {
      mal_id,
      title,
      images: {
        jpg: { image_url },
      },
      synopsis,
    } = anime;
    if (image_url !== defaultImageSource)
      return (
        <Card
          key={mal_id}
          animeName={title}
          animeImage={image_url}
          description={synopsis}
        />
      );
  });

  const reqDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="min-h-screen max-w-screen dark:bg-gray-800">
        <NavBar
          getAnimeList={getAnimeList}
          reqDarkMode={reqDarkMode}
          darkModeState={darkMode}
        />
        <Hero />
        {animeList.length !== 0 && (
          <CardBar title="Search Result">{searchResult}</CardBar>
        )}
      </main>
    </div>
  );
};

export default App;
