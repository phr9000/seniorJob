/* eslint-disable */
import React from "react";

/* Import imgs */
import imgs from 'src/common/ImgDef';

/* Import SCSS */
import "src/assets/styles/layout/availCourses.scss";

/* Import Component */
import {BigBtn, SecTitle, SecTitleDesc} from "src/components/Guide";




const coursesList = [
  {
    postedOn: "",
    timeTypes: [
      {type: "Basic", icon: "fas fa-certificate"},
      {type: "Full Time", icon: "fas fa-hourglass-half"},
    ],
    title: "Fashion Retail Assistant (Part-Time)",
    day: "2 Days",
    location: "Grant/Subsidies: SkillsFuture Credit,NSA Subsidy",
    calendar: "From to",
    salary: "$450",
    salary2: "$40",
    fullFee: "FULL FEE",
    nettlFee: "NETT FEE",
    
  },
  {
    postedOn: "",
    timeTypes: [
      {type: "Basic", icon: "fas fa-certificate"},
      {type: "Full Time", icon: "fas fa-hourglass-half"},
    ],
    title: "Fashion Retail Assistant (Part-Time)",
    day: "1 Days",
    location: "Grant/Subsidies: SkillsFuture Credit,NSA Subsidy",
    calendar: "From 22-Jun-2023 to 23-Jun-2023",
    salary: "$150",
    salary2: "$96",
    fullFee: "FULL FEE",
    nettlFee: "NETT FEE",
  },

];

export const CoursesItem: React.FC<{ courses: typeof coursesList[0] }> = ({courses}) => (
  <li className="sec_list">
    <a href="#" className="add_links flex">
      <div className="text_area">
        <div className="row flex justify-between">
          <span className="posted_on">
            <i className="fas fa-pencil-alt"></i>
            &nbsp;&nbsp;Posted on {courses.postedOn}
          </span>
          <div className="time_type row flex items-center">
            {courses.timeTypes.map(({type, icon}) => (
              <p className={`timetype_${type.toLowerCase().replace(" ", "_")}`} key={type}>
                <i className={icon}></i>
                &nbsp;&nbsp;{type}
              </p>
            ))}
          </div>
        </div>
        <div className="row course_desc">
          <h3 className="courses_tit pc_ver">{courses.title}</h3>
          <div className="courses_info flex justify-between">
            <ul className="flex align-center">
              <li>
                <span className="txt">
                  <i className="fas fa-hourglass-half"></i>
                  &nbsp;&nbsp;{courses.day}
                </span>
              </li>
              <li>
                <span className="txt">
                  <i className="fas fa-hand-holding-usd"></i>
                  &nbsp;&nbsp;{courses.location}
                </span>
              </li>
              <li>
                <span className="txt">
                  <i className="fas fa-calendar-alt"></i>
                  &nbsp;&nbsp;{courses.calendar}
                </span>
              </li>
            </ul>
            <h3 className="courses_tit mo_ver">{courses.title}</h3>
            <div className="row salary_area_avail">
              <div>
                <div className="salary"><span className="data_salary">{courses.salary}</span></div>
                <div className="salperiod">{courses.fullFee}</div>
              </div>
              <div>
                <div className="salary"><span className="data_salary">{courses.salary2}</span></div>
                <div className="salperiod">{courses.nettlFee}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </li>
);


const margin = {
  marginTop: '10rem',
};
const AvailCourses: React.FC = () => {
  return (
    <div className="section_inner">
      <SecTitle title="Available Courses"/>
      <SecTitleDesc
        desc="We offer a variety of courses to help you advance in your career. Enrol now into a suitable course."
      />
      <ul className="sec_cont">
        {coursesList.map(courses => <CoursesItem courses={courses} key={courses.title}/>)}
      </ul>
      
      <BigBtn title="View All Course"/>
    </div>
  );
};
export default AvailCourses;