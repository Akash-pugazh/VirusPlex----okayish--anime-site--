import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Components/Layout";
import MainPage, { loader as MainPageLoader } from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import AnimePage, { action as AnimeSearchAction } from "./Pages/AnimePage";
import AnimeDetails, {
  loader as AnimeDetailsLoader,
} from "./Pages/AnimeDetails";
import TrendingPage from "./Pages/TrendingPage";
import PopularPage from "./Pages/PopularPage";
import AiringPage from "./Pages/AiringPage";
import AnimeSections from "./Pages/AnimeSections";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} loader={MainPageLoader} />
        <Route path="Login" element={<LoginPage />} />
        <Route path="Anime" element={<AnimePage />} action={AnimeSearchAction}>
          <Route index element={<AnimeSections />} />
          <Route path="Trending🔥" element={<TrendingPage />} />
          <Route path="Popular🪄" element={<PopularPage />} />
          <Route path="Airing👻" element={<AiringPage />} />
        </Route>
        <Route
          path="AnimeDetails/:AnimeId"
          element={<AnimeDetails />}
          loader={AnimeDetailsLoader}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
