/* eslint-disable */
import React from "react";


/* Import imgs */
import imgs from 'src/common/ImgDef';


/* Import Component */
import {SecTitle} from 'src/components/Guide';

const LatestList: React.FC = () => {
  return (

    <section className="latestListComp">
      <div className="section_inner">
        <SecTitle title="Latest Jobs"/>
        <div className="sec_list">
          <a href="#" className="add_links">
            <div className="thumb_area">
              <img src={imgs.thumb_01} alt=""/>
            </div>
            <div className="text_area">
              test
            </div>
          </a>
        </div>
      </div>
    </section>

  );
};
export default LatestList;