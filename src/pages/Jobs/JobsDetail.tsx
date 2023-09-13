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
                </div>
                <div className="right">
                <Button
                    color="red-fill"
                    size="full"
                    label="&nbsp;&nbsp;Register Now"
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
        </main>
    );
};
export default MainLayout;