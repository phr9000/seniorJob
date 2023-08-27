import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import MainLayout from "./pages/Main/MainLayout";
import Guide from "./components/Guide";
<<<<<<< HEAD
=======
import LatestList from "./components/LatestList";

>>>>>>> 6ec70b30e5abdcde56e51145fc21c4657c84d30d
import React from "react";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {index: true, element: <MainLayout/>},
      {path: "/guide", element: <Guide/>},
      {path: "/latest-list", element: <LatestList/>},
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router}/>;
};

export default App;
