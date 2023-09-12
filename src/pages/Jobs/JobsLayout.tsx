/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import LatestList from "src/components/LatestList";
/* Import Component */
const JobsLayout: React.FC = () => {
    return (
        <main className="main-container jobs-layout-container">
            <section className="container">
                <h2 className="text-left">All Jobs</h2>
                <LatestList />
            </section>
        </main>
    );
};
export default JobsLayout;