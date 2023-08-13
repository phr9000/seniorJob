import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Root: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
