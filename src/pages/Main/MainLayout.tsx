/* eslint-disable */
import React from "react";

/* Import Component */
import LatestList from 'src/components/LatestList'
import NeedHelp from './NeedHelp'

const MainLayout: React.FC = () => {
  return (
    <main>
      <div className="container">
        <NeedHelp/>
      </div>
    </main>
  );
};
export default MainLayout;
