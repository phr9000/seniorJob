import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "src/App.css";

import Root from "src/pages/Root";
import MainLayout from "src/pages/Main/MainLayout";
import JobsLayout from "src/pages/Jobs/JobsLayout";
import Guide from "src/components/Guide";

// import LatestList from "src/components/LatestList";
// import Button from "src/components/button/Button";
// import AvailCoursrs from "src/components/AvailCourses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <MainLayout /> },
      { path: "/guide", element: <Guide /> },
      { path: "/jobs", element: < JobsLayout /> },
      // {path: "/latest-list", element: <LatestList/>},
      // {path: "/button", element: <Button/>},
      // {path: "/avail_course", element: <AvailCoursrs/>},
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
