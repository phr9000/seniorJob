import React from "react";
import {Outlet} from "react-router-dom";

import "src/assets/styles/index.scss";
import "src/assets/styles/index.scss";
import "src/assets/fontawesome/css/fontawesome.css";
import "src/assets/fontawesome/css/brands.css";
import "src/assets/fontawesome/css/solid.css";

import Header from "src/components/Header";
import Footer from "src/components/Footer";




const Root: React.FC = () => {
  return (
    <div>
      <Header/>
      <div>
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default Root;
