import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import "src/App.css";

import Root from "src/pages/Root";
import MainLayout from "src/pages/Main/MainLayout";
import Guide from "src/components/Guide";
// import LatestList from "src/components/LatestList";
// import Button from "src/components/button/Button";
// import AvailCoursrs from "src/components/AvailCourses";
// import SelectBoxBasic from "src/components/select/SelectBoxBasic";
import SelectBoxChk from "src/components/select/SelectBoxChk";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {index: true, element: <MainLayout/>},
      {path: "/guide", element: <Guide/>},
      // {path: "/latest-list", element: <LatestList/>},
      // {path: "/button", element: <Button/>},
      // {path: "/avail_course", element: <AvailCoursrs/>},
      // {path: "/SelectBoxBasic", element: <SelectBoxBasic/>},
      {path: "/SelectBoxChk", element: <SelectBoxChk/>},
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router}/>;
};

export default App;
