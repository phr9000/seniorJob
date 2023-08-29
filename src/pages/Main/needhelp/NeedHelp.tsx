/* eslint-disable */
import React, { useState }  from "react";
import Category from "./pannelview/Category";

const LatestList: React.FC = () => {
  const tabList = ['a', 'b', 'c'];
  const [activeTab, setActiveTab] = useState(0);
  return (

    <section className="need-help-container">
        <h2>Need help in finding the job you want?</h2>
        <ul className="tab-area">
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <Category/>
    </section>
  );
};
export default LatestList;