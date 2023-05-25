import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Components/Layout";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="Login" element={<LoginPage />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
