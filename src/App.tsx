import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "src/App.css";

import Root from "src/pages/Root";
import MainLayout from "src/pages/Main/MainLayout";
import JobsLayout from "src/pages/Jobs/JobsLayout";
import JobsDetail from "src/pages/Jobs/JobsDetail";
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
      { path: "/jobs", element: <JobsLayout /> },
      {
        path: "/jobs", // /jobs 아래에 jobsdetail 추가
        children: [
          { path: "jobsDetail", element: <JobsDetail /> },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
