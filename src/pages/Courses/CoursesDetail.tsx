/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import BreadCrumb from "src/components/breadCrumb/BreadCrumb";
import Button from "src/components/button/Button";
import imgs from "src/common/ImgDef";
const CourseDetailLayout: React.FC = () => {
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
          <span className="job-type-bage basic">
            <i className="fa-solid fa-certificate"></i>
            &nbsp;&nbsp;Basic
          </span>
          <span className="job-type-bage full">
            <i className="fa-regular fa-clock"></i>
            &nbsp;&nbsp;Full Time
          </span>
          <h2>Administrative Assistant (1-year contract)</h2>
          <div className="flex items-end sal-tt">
            <h3>UP TO $2000 </h3>
            <p>per month</p>
          </div>
          <div className="hr"></div>
          {/* category */}
          <ul className="cate-area">
            <li className="col-xs-12 col-sm-6 col-md-6">
              <dl>
                <dt>LOCATION</dt>
                <dd>
                  <i className="a-sharp fa-solid fa-location-dot"></i>
                  <span>Esplanade - CC3</span>
                </dd>
              </dl>
            </li>
            <li className="col-xs-12 col-sm-6 col-md-6">
              <dl>
                <dt>WORKING ARRANGEMENTS</dt>
                <dd>
                  <i className="fa-solid fa-calendar-days"></i>
                  <span>5 Day Week</span>
                </dd>
              </dl>
            </li>
            <li className="col-xs-12 col-sm-6 col-md-6">
              <dl>
                <dt>CATEGORY</dt>
                <dd>
                  <i className="fa-solid fa-list"></i>
                  <span>Hospitality / F&B</span>
                </dd>
              </dl>
            </li>
          </ul>
          <div className="hr"></div>
          {/* job description */}
          <div className="description-area">
            <h4>Job Description</h4>
            <p>
              Reset tables
              <br />
              <br />
              Refill water for guests
              <br />
              <br />
              Serve bread & butter
              <br />
              <br />
              Clear plates & cutleries from tables
              <br />
              <br />
              Polish cutleries & glassware
              <br />
              <br />
              Maintain cleanliness of busser & bread station
              <br />
              <br />
              Support servers during dinner service
              <br />
              <br />
              Other side duties as assigned
              <br />
              <br />
              Full-time, 5 days weekly
              <br />
              <br />
              Working hours:4pm - 11:30pm
            </p>
          </div>
        </div>

        <div className="right">
          <div className="top">
            <div className="button-area">
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
            <div className="hr gray"></div>
            <div className="company-info">
              <div className="img">
                <img src={imgs.thumb_01} alt="compnay-img" />
              </div>
              <ul className="detail">
                <li>
                  <dl>
                    <dt>Company</dt>
                    <dd>CENTRE FOR SENIORS</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Business Registration Number</dt>
                    <dd>T06SS0199E</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Industry</dt>
                    <dd>Social Services / Non-Profit Organisations</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Address</dt>
                    <dd>
                      9 Bishan Place #10-02 Junction 8 Office Tower 579837
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>Website</dt>
                    <dd>http://www.centreforseniors.org.sg/</dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default CourseDetailLayout;
