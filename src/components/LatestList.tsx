/* eslint-disable */
import React from "react";


/* Import imgs */
import imgs from '../common/ImgDef';

const LatestList: React.FC = () => {
  return (

    <div className="latestListComp">
      <div className="section_inner">
        <h2 className="sec_title">Latest Jobs</h2>
        <div className="sec_list">
          <a href="#" className="add_links">
            <div className="thumb_area">
              <img src={imgs.thumb_01} alt=""/>
            </div>
            <div className="text_area">

            </div>
          </a>
        </div>
      </div>
    </div>

  );
};
export default LatestList;