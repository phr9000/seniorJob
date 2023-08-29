import React from "react";
import { Outlet } from "react-router-dom";
import "../assets/styles/index.scss";
import "src/assets/styles/index.scss";
import "src/assets/fontawesome/css/fontawesome.css";
import "src/assets/fontawesome/css/brands.css";
import "src/assets/fontawesome/css/solid.css";
// 파일경로 미생성 으로 인한 임시 주석처리
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
