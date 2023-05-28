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

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} loader={MainPageLoader} />
        <Route path="Login" element={<LoginPage />} />
        <Route
          path="Anime"
          element={<AnimePage />}
          action={AnimeSearchAction}
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
