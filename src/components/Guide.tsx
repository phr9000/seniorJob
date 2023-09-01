/* eslint-disable */
import {Link} from "react-router-dom";
import React from "react";
import Button from "src/components/button/Button"

/* Import imgs */
import imgs from "src/common/ImgDef";

/* Import Component */
import {JobItem} from 'src/components/LatestList';
import {CoursesItem} from "src/components/AvailCourses";




interface SecTitleProps {
  /**
   * 문자열 또는 숫자 모두 가능하도록 하고 싶을때, 유니온 타입 사용
   * title?: string | number; 로 작성.
   * */
  title?: string; // 제목은 문자열로만 정의함
}

interface BigBtnTitleProps {
  title?: string;
}

interface SecTitleDescProps {
  desc?: string;
}


export function SecTitle ({title = "섹션제목"}: SecTitleProps) {
  return (
    <h2 className="sec_title">{title}</h2>
  );
}

export function SecTitleDesc ({desc = "We offer a variety of courses to help you advance in your career. Enrol now into a suitable course."}: SecTitleDescProps) {
  return (
    <p className="sec_title_desc">
      {desc}
    </p>
  );
}


export function BigBtn ({title = "View All Jobs"}: BigBtnTitleProps) {
  return (
    <div className="big_btn">
      <a href="#none" title="페이지이동">
        {title}&nbsp;&nbsp;
        <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
}

const Guide: React.FC = () => {
  // 가이드 모듈타이틀에 대한 스타일
  const commonStyle: React.CSSProperties = {
    fontWeight: '700',
    backgroundColor: 'lightblue',
    marginTop: '20px',
    marginBottom: '20px',
  }
  const fontSize30: React.CSSProperties = {
    fontSize: '30px',
    padding: '10px 0',
    textAlign: "center"
  }
  const fontSize20: React.CSSProperties = {
    fontSize: '20px',
    padding: '10px 0',
    backgroundColor: 'gold',
    textIndent: '30px',
  }
  const styelMargin = {
    marginTop: '80px'
  }
  
  // Latest List Item에 대한 변수
  const someJobData = {
    thumb: imgs.thumb_01,
    postedOn: "26 Aug 2023",
    jobTypes: [ "Part Time", "Full Time" ],
    title: "Fashion Retail Assistant (Part-Time)",
    company: "CENTRE FOR SENIORS",
    location: "Dakota - CC8",
    calendar: "5 Day Week",
    salary: "$3500",
    period: "per month"
  };
  
  const someCoursesData = {
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
  }
  
  return (
    <div style={styelMargin}>
      <div style={{...commonStyle, ...fontSize30}}>[ Guide Page ]</div>
      <div style={{...commonStyle, ...fontSize20}}>[Section Titile]</div>
      <SecTitle title="section title"/>
      <div style={{...commonStyle, ...fontSize20}}>[Section Title Desc]</div>
      <SecTitleDesc desc="section desc"/>
      
      <div style={{...commonStyle, ...fontSize20}}>[btn Big]</div>
      <BigBtn/>
      
      <div style={{...commonStyle, ...fontSize20}}>[Latest List Item]</div>
      <JobItem job={someJobData}/>
      <div style={{...commonStyle, ...fontSize20}}>[Available Courses List Item]</div>
      <CoursesItem courses={someCoursesData}/>
      <div style={{...commonStyle, ...fontSize20}}>[button component]</div>
      <Button label="라벨ㄹㄹㄹ" color="red"/>
    </div>
  );
};
export default Guide;
