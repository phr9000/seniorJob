/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import BreadCrumb  from "src/components/breadCrumb/BreadCrumb";
import Button from "src/components/button/Button";
const MainLayout: React.FC = () => {
    return (
        <main className="main-container">
            {/* bread crumb */}
            <BreadCrumb />
            <div className="jobs-detail-container">
                <div className="left">
                    <h4 className="post-date">
                        <i className="fas fa-pencil-alt"></i>
                        &nbsp;&nbsp;<span>POSTED ON 27-JUN-2022</span>
                    </h4>
                    <span className="job-type-bage">
                        <i className="fa-regular fa-clock"></i>
                        &nbsp;&nbsp;Full Time
                    </span>
                </div>
                <div className="right">
                    <div className="button-area">
                        <Button
                            color="red-fill"
                            size="full"
                            label="&nbsp;&nbsp;Apply Now"
                            icon="fa-solid fa-user-plus"
                            additionalClass="mb-5"
                        />
                        <Button
                            color="primary-line"
                            size="full"
                            label="&nbsp;&nbsp;Save Course"
                            icon="fa-regular fa-bookmark"
                            additionalClass="pb-5"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
};
export default MainLayout;