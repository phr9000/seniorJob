/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import "src/assets/styles/index.scss";
import "src/assets/fontawesome/css/fontawesome.css";
import "src/assets/fontawesome/css/brands.css";
import "src/assets/fontawesome/css/solid.css";

import Header from "src/components/Header";
import Footer from "src/components/Footer";
import SponsorBanner from "src/components/banner/SponsorBanner";

const Root: React.FC = () => {
  //
  // [시작] JobDetail 모바일 스타일에서 footer 스타일 변경을 위한 코드
  //
  const location = useLocation();
  const [isTabletWidth, setIsTabletWidth] = useState<boolean>(false);

  // 브라우저 창의 너비 990px 이하일 때 isTabletWidth true
  const tabletSize = 990;
  const checkIsTabletWidth = () => {
    setIsTabletWidth(window.innerWidth <= tabletSize);
  };

  useEffect(() => {
    if (location.pathname === "/Jobs/JobsDetail" || location.pathname === "/Courses/CoursesDetail") {
      checkIsTabletWidth();
      window.addEventListener("resize", checkIsTabletWidth);

      return () => {
        window.removeEventListener("resize", checkIsTabletWidth);
      };
      // test
    }
  }, [location.pathname]); // location.pathname만을 의존성으로 설정

  // 특정 route에서만 footer에 padding-bottom을 추가하도록 설정
  const isTabletRoute = location.pathname === "/Jobs/JobsDetail" ||  location.pathname === "/Courses/CoursesDetail"; // 특정 route를 지정
  const footerStyle = {
    paddingBottom: isTabletRoute && isTabletWidth ? "44px" : "0",
  };
  //
  // [끝] JobDetail 모바일 스타일에서 footer 스타일 변경을 위한 코드
  //
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <section className="SponsorBannerComp">
        <SponsorBanner />
      </section>
      <Footer style={footerStyle} />
    </div>
  );
};

export default Root;
