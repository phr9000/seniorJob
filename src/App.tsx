import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "src/App.css";

import Root from "src/pages/Root";
import MainLayout from "src/pages/Main/MainLayout";
import JobsLayout from "src/pages/Jobs/JobsLayout";
import JobsDetail from "src/pages/Jobs/JobsDetail";
import CoursesLayout from "src/pages/Courses/CoursesLayout";
import CoursesDetail from "src/pages/Courses/CoursesDetail";
import Guide from "src/components/Guide";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <MainLayout /> },
      { path: "/guide", element: <Guide /> },
      { path: "/Jobs", element: <JobsLayout /> },
      {
        path: "/Jobs", // /jobs 아래에 jobsdetail 추가
        children: [
          { path: "JobsDetail", element: <JobsDetail /> },
        ],
      },
      { path: "/Courses", element: <CoursesLayout /> },
      {
        path: "/Courses", // /Courses 아래에 Coursesdetail 추가
        children: [
          { path: "CoursesDetail", element: <CoursesDetail /> },
        ],
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
