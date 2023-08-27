/* eslint-disable */
import React from "react";


/* Import imgs */
import imgs from 'src/common/ImgDef';

/* Import SCSS */
import "src/components/latestList.scss";

/* Import Component */
import {SecTitle} from 'src/components/Guide';

const LatestList: React.FC = () => {
  return (

    <section className="latestListComp">
      <div className="section_inner">
        <SecTitle title="Latest Jobs"/>
        <div className="sec_list">
          <a href="#" className="add_links flex">
            <div className="thumb_area shrink-0">
              <img src={imgs.thumb_01} alt=""/>
            </div>
            <div className="text_area">
              <div className="row flex justify-between">
                <span className="posted_on">
                  <i className="fas fa-pencil-alt"></i>
                  &nbsp;&nbsp;Posted on 26 Aug 2023
                </span>
                <div className="row flex items-center">
                  <p className="jobtype_part">
                    <i className="far fa-clock"></i>
                    &nbsp;&nbsp;Part Time
                  </p>
                  <p className="jobtype_pull">
                    <i className="far fa-clock"></i>
                    &nbsp;&nbsp;Full Time
                  </p>
                </div>
              </div>
              <div className="row course_desc">
                <h3 className="job_tit">Fashion Retail Assistant (Part-Time)</h3>
                <div className="job_desc flex justify-between">
                  <ul className="flex align-center">
                    <li>
                      <span className="txt">
                        <i className="fas fa-building"></i>
                        &nbsp;&nbsp;CENTRE FOR SENIORS
                      </span>
                    </li>
                    <li>
                      <span className="txt">
                        <i className="fas fa-map-marker-alt"></i>
                        &nbsp;&nbsp;Dakota - CC8
                      </span>
                    </li>
                    <li>
                      <span className="txt">
                        <i className="fas fa-calendar-alt"></i>
                        &nbsp;&nbsp;Shifts
                      </span>
                    </li>
                  </ul>
                  <div className="row">
                    <div className="salary">
                      UP TO
                      <span className="data_salary">$3500</span>
                    </div>
                    <div className="salperiod">per month</div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

  );
};
export default LatestList;