import React from "react";
import {Outlet} from "react-router-dom";

import "src/assets/styles/index.scss";
import "src/assets/styles/index.scss";
import "src/assets/fontawesome/css/fontawesome.css";
import "src/assets/fontawesome/css/brands.css";
import "src/assets/fontawesome/css/solid.css";

import Header from "src/components/Header";
import Footer from "src/components/Footer";
import SponsorBanner from "src/components/banner/SponsorBanner";



const Root: React.FC = () => {
  return (
    <div>
      <Header/>
      <div>
        <Outlet/>
      </div>
      <section className="SponsorBannerComp">
        <SponsorBanner />
      </section>
      <Footer/>
    </div>
  );
};

export default Root;
