/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";

/* Import Component */
import LatestList from "src/components/LatestList";
import AvailCourses from "src/components/AvailCourses";
import NeedHelp from "src/pages/Main/needhelp/NeedHelp";
import SubBanner from "src/components/banner/SubBanner";
import SponsorBanner from "src/components/banner/SponsorBanner";
import SearchBox from "./searchbox/SearchBox";

const MainLayout: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isTestClassVisible, setIsTestClassVisible] = useState(false);
  const testClassRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleFollow = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleFollow);

    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTestClassVisible(true);
        } else {
          setIsTestClassVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    if (testClassRef.current) {
      observer.observe(testClassRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [testClassRef.current]);

  useEffect(() => {
    const mainContainer = document.querySelector(".main-container");
    if (!mainContainer) return;

    const onScroll = () => {
      if (testClassRef.current && mainContainer) {
        const testClassTop = testClassRef.current.getBoundingClientRect().top;
        const searchBox = searchBoxRef.current; 
        if (testClassTop <= 0) {
          if (searchBox) {
            searchBox.classList.add("active");
          }
        } else {
          // .test-class 이전 스크롤 위치에서 클래스 제거
          if (searchBox) {
            searchBox.classList.remove("active");
          }
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <main className="main-container">
      <section className="banner">
        <div className="banner-txt-area j-mb20">
          <h3>A Job Platform for Seniors</h3>
          <p>
            Founded in 2006, the Centre For Seniors (CFS) is a non-profit,
            Social Service Agency (SSA) that is committed to promoting the total
            well-being of older persons in Singapore, specifically their
            vocational, financial and psycho-social health. Silver Job portal is
            created with seniors in mind to help them to explore work in the
            various sectors for meaningful retirement. For more info, please go
            to{" "}
            <a className="go-link" href="https://cfs.org.sg">
              https://cfs.org.sg
            </a>
          </p>
          <p>
            We welcome employers who are keen to hire seniors in your
            organization , please contact us at{" "}
            <a className="go-link">ready2work@cfs.org.sg</a>
          </p>
        </div>
      </section>
      <section className="search-box-container" ref={searchBoxRef}>
        <SearchBox />
      </section>
      {/* 스크롤 테스트 위치 */}
      <div className="test-class" ref={testClassRef}>

      </div>
      <section className="latestListComp">
        <LatestList />
      </section>
      
      <NeedHelp />

      <section className="AvailCoursesComp">
        <AvailCourses />
      </section>
      <section className="SubBannerComp">
        <SubBanner />
      </section>
      <section className="SponsorBannerComp">
        <SponsorBanner />
      </section>
    </main>
  );
};
export default MainLayout;
