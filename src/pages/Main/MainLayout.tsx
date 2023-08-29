/* eslint-disable */
import React from "react";

/* Import Component */
import LatestList from "src/components/LatestList";
import NeedHelp from "./needhelp/NeedHelp";

const MainLayout: React.FC = () => {
  return (
    <main className="main-container">
      <div className="container"></div>
      <LatestList />
      <NeedHelp />
    </main>
  );
};
export default MainLayout;
