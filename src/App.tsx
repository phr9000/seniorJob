import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import MainLayout from "./pages/Main/MainLayout";
import Guide from "./components/Guide";
import LatestList from "./components/LatestList";
import React from "react";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <MainLayout /> },
      { path: "/guide", element: <Guide /> },
      { path: "/latest-list", element: <LatestList /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
