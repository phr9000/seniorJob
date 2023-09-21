/* eslint-disable */
import React, {useState} from "react";
import { NavLink } from "react-router-dom";
/* 이미지 가져오기 */
import imgs from 'src/common/ImgDef';

/* SCSS 가져오기 */
import "src/assets/styles/layout/availCourses.scss";

/* 컴포넌트 가져오기 */
import { BigBtn, SecTitle, SecTitleDesc } from "src/components/Guide";

const coursesList = [
  {
    postedOn: "",
    timeTypes: [
      { type: "기본", icon: "fas fa-certificate" },
      { type: "풀 타임", icon: "fas fa-hourglass-half" },
    ],
    title: "노인 간병 기술 기초 (중국어)",
    day: "2일",
    location: "보조금/지원금: 스킬퓨처 크레딧, NSA 지원금",
    calendar: "부터",
    salary: "$450",
    salary2: "$40",
    fullFee: "전액 비용",
    nettlFee: "순수 비용",
  },
  {
    postedOn: "",
    timeTypes: [
      { type: "기본", icon: "fas fa-certificate" },
      { type: "풀 타임", icon: "fas fa-hourglass-half" },
    ],
    title: "기업가정신: 비즈니스 모델 구축 및 승리적인 피치 제공",
    day: "1일",
    location: "보조금/지원금: 스킬퓨처 크레딧, NSA 지원금",
    calendar: "부터 2023년 6월 22일부터 2023년 6월 23일까지",
    salary: "$150",
    salary2: "$96",
    fullFee: "전액 비용",
    nettlFee: "순수 비용",
  },
  {
    postedOn: "",
    timeTypes: [
      { type: "기본", icon: "fas fa-certificate" },
      { type: "풀 타임", icon: "fas fa-hourglass-half" },
    ],
    title: "친구들을 위한 훈련 (영어)",
    day: "1일",
    location: "보조금/지원금: 스킬퓨처 크레딧, NSA 지원금",
    calendar: "부터 2023년 6월 8일부터 2023년 6월 8일까지",
    salary: "$150",
    salary2: "$30",
    fullFee: "전액 비용",
    nettlFee: "순수 비용",
  },
];

export const CoursesItem: React.FC<{
  courses: typeof coursesList[0];
  closeMenu: () => void;
}> = ({ courses, closeMenu }) => (
  <li className="sec_list">
    <NavLink to="/Courses/CoursesDetail" className="add_links flex" onClick={closeMenu}>
      <div className="text_area">
        <div className="row flex justify-between">
          <span className="posted_on">
            <i className="fas fa-pencil-alt"></i>
            &nbsp;&nbsp;{courses.postedOn}에 게시됨
          </span>
          <div className="time_type row flex items-center">
            {courses.timeTypes.map(({ type, icon }) => (
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
    </NavLink>
  </li>
);

const margin = {
  marginTop: '10rem',
};
const AvailCourses: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="section_inner">
      <SecTitle title="사용 가능한 강의" />
      <SecTitleDesc
        desc="진로를 나아가기 위한 다양한 강의를 제공합니다. 적합한 강의에 지금 등록하세요."
      />
      <ul className="sec_cont">
        {coursesList.map((courses) => (
          <CoursesItem courses={courses} key={courses.title} closeMenu={closeMenu} />
        ))}
      </ul>

      <BigBtn title="모든 강의 보기" />
    </div>
  );
};
export default AvailCourses;