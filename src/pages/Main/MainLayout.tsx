/* eslint-disable */
import React from "react";

/* Import Component */
import LatestList from 'src/components/LatestList'

const MainLayout: React.FC = () => {
  return (
    <main>
      <div className="container">
        <LatestList/>
      </div>
    </main>
  );
};
export default MainLayout;
