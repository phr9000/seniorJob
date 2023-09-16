import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "src/App.css";

import Root from "src/pages/Root";
import MainLayout from "src/pages/Main/MainLayout";
import JobsLayout from "src/pages/Jobs/JobsLayout";
import JobsDetail from "src/pages/Jobs/JobsDetail";
import Guide from "src/components/Guide";
import ContactUsLayout from "src/pages/ContactUs/ContactUsLayout";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {index: true, element: <MainLayout/>},
      {path: "/guide", element: <Guide/>},
      {path: "/Jobs", element: <JobsLayout/>},
      {
        path: "/Jobs", // /jobs 아래에 jobsdetail 추가
        children: [
          {path: "JobsDetail", element: <JobsDetail/>},
        ],
      },
      {path: "/ContactUs", element: <ContactUsLayout/>},
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router}/>;
};

export default App;
