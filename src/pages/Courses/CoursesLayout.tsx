/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import AvailCourses from "src/components/AvailCourses";
import Pagination from "src/components/pagination/Pagination";
import SubBanner from "src/components/banner/SubBanner";
import SearchBox from "../Main/searchbox/SearchBox";
/* Import Component */
const CourseLayout: React.FC = () => {
    return (
        <main className="main-container jobs-layout-container">
            <section className="search-box-container active">
                <SearchBox />
            </section>
            <section className="container sub-page">
                <h2 className="text-left">Available Courses</h2>
                <AvailCourses />
                <Pagination/>
            </section>
            <section className="SubBannerComp">
                <SubBanner />
            </section>
        </main>
    );
};
export default CourseLayout;
