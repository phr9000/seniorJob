/* eslint-disable */
import React, { useState }  from "react";
import Category from "./pannelview/Category";
import Location from "./pannelview/Location";
import Type from "./pannelview/Type";

const LatestList: React.FC = () => {
  const tabList = ['Jobs by Category', 'Jobs by Location', 'Jobs by Employment Type'];
  const [activeTab, setActiveTab] = useState(0);
  const tabClick = (index:number) => {
    setActiveTab(index);
  };
  const panels = [<Category />, <Location />, <Type />];
  return (

    <section className="need-help-container">
        <div className="need-help-inner">
          <h2>Need help in finding the job you want?</h2>
          {/* tab area */}
          <ul className="tab-area">
            {tabList.map((tab, index)=>(
              <li key={index} onClick={()=> tabClick(index)} className={ activeTab === index ? "active" : "" }>
                <a href="#none">
                  {tab}
                </a>
              </li>
            ))}
          </ul>
          {/* pannel area */}
          <ul className="pannel-area">
            {
              panels.map ((panel,index)=> (
                <li key={index} style={{ display: activeTab === index ? "block" : "none" }}>
                  {panel}
                </li>
              ))}
            
          </ul>
        </div>
        
    </section>
  );
};
export default LatestList;