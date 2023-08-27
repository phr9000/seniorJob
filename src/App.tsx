import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import MainLayout from "./pages/Main/MainLayout";
import Guide from "./components/Guide";
import React from "react";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <MainLayout /> },
      { path: "/guide", element: <Guide /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
