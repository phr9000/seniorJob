/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import BreadCrumb  from "src/components/breadCrumb/BreadCrumb";

const MainLayout: React.FC = () => {
    return (
        <main className="main-container">
            {/* bread crumb */}
            <BreadCrumb />
            <div className="jobs-detail-container">
                <div className="left">
                </div>
                <div className="right">
                </div>
            </div>
        </main>
    );
};
export default MainLayout;