/* eslint-disable */
import { Link } from "react-router-dom";
import React, { useState } from "react";

/* Import imgs */
import imgs from "src/common/ImgDef";

/* Import Component */
import { JobItem } from "src/components/LatestList";
import { CoursesItem } from "src/components/AvailCourses";
import SubBanner from "src/components/banner/SubBanner";
import Button from "src/components/button/Button";
import SponsorBanner from "src/components/banner/SponsorBanner";
import SelectBoxChk from "src/components/select/SelectBoxChk";
import SelectBoxBasic from "src/components/select/SelectBoxBasic";
import Input from "./input/TextInput";

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

export function SecTitle({ title = "섹션제목" }: SecTitleProps) {
  return <h2 className="sec_title">{title}</h2>;
}

export function SecTitleDesc({
  desc = "We offer a variety of courses to help you advance in your career. Enrol now into a suitable course.",
}: SecTitleDescProps) {
  return <p className="sec_title_desc">{desc}</p>;
}

export function BigBtn({ title = "View All Jobs" }: BigBtnTitleProps) {
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
  // 첫 번째 SelectBoxChk 컴포넌트에 대한 상태와 콜백 함수
  const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
  const [selectedItems1, setSelectedItems1] = useState<string[]>([]);

  // 가이드 모듈타이틀에 대한 스타일
  const commonStyle: React.CSSProperties = {
    fontWeight: "700",
    backgroundColor: "lightblue",
    marginTop: "20px",
    marginBottom: "20px",
  };

  const fontSize30: React.CSSProperties = {
    fontSize: "30px",
    fontWeight: "900",
    padding: "10px 0",
    textAlign: "center",
  };
  const fontSize20: React.CSSProperties = {
    fontSize: "20px",
    fontWeight: "800",
    padding: "10px 0",
    backgroundColor: "gold",
    textIndent: "30px",
  };

  const styelMargin = {
    marginTop: "80px",
  };

  // Latest List Item에 대한 변수
  const someJobData = {
    thumb: imgs.thumb_01,
    postedOn: "26 Aug 2023",
    jobTypes: ["Part Time", "Full Time"],
    title: "Fashion Retail Assistant (Part-Time)",
    company: "CENTRE FOR SENIORS",
    location: "Dakota - CC8",
    calendar: "5 Day Week",
    salary: "$3500",
    period: "per month",
  };

  const someCoursesData = {
    postedOn: "",
    timeTypes: [
      { type: "Basic", icon: "fas fa-certificate" },
      { type: "Full Time", icon: "fas fa-hourglass-half" },
    ],
    title: "Fashion Retail Assistant (Part-Time)",
    day: "2 Days",
    location: "Grant/Subsidies: SkillsFuture Credit,NSA Subsidy",
    calendar: "From to",
    salary: "$450",
    salary2: "$40",
    fullFee: "FULL FEE",
    nettlFee: "NETT FEE",
  };

  return (
    <div style={styelMargin}>
      <div style={{ ...commonStyle, ...fontSize30 }}>[ Guide Page ]</div>

      {/* 00.Section Titile */}
      <div style={{ ...commonStyle, ...fontSize20 }}>[ 00.Section Titile ]</div>
      <SecTitle title="section title" />

      {/* 01.Section Title Desc */}
      <div style={{ ...commonStyle, ...fontSize20 }}>
        [ 01.Section Title Desc ]
      </div>
      <SecTitleDesc desc="section desc" />

      {/* 02.btn Big*/}
      <div style={{ ...commonStyle, ...fontSize20 }}>[ 02.btn Big ]</div>
      <BigBtn />

      {/* 03.Latest List Item */}
      <div style={{ ...commonStyle, ...fontSize20 }}>
        [ 03.Latest List Item ]
      </div>
      {/* <JobItem job={someJobData} /> */}

      {/* 04.Available Courses List Item */}
      <div style={{ ...commonStyle, ...fontSize20 }}>
        [ 04.Available Courses List Item ]
      </div>
      <CoursesItem courses={someCoursesData} />

      {/* 05.button component */}
      <div style={{ ...commonStyle, ...fontSize20 }}>
        [ 05.button component ]
      </div>
      <Button label="라벨ㄹㄹㄹ" color="red-line" />

      {/* 06.Sub Banner */}
      <div style={{ ...commonStyle, ...fontSize20 }}>[ 06.Sub Banner ]</div>
      <section className="SubBannerComp">
        <SubBanner />
      </section>

      {/* 07.Sponsor Banner */}
      <div style={{ ...commonStyle, ...fontSize20 }}>[ 07.Sponsor Banner ]</div>
      <section className="SponsorBannerComp">
        <SponsorBanner />
      </section>

      {/* 08.Select Box Check Style */}
      <div style={{ ...commonStyle, ...fontSize20 }}>[ 08.SelectBoxChk ]</div>
      <SelectBoxChk
        isOpen={isDropdownOpen1}
        toggleDropdown={() => setIsDropdownOpen1(!isDropdownOpen1)}
        selectedItems={selectedItems1}
        items={["All", "Option1", "Option2"]} // 적절한 아이템 배열 전달
        defaultLabel="Select Label"
      />

      {/* 08.Select Box Basic Style */}
      <div style={{ ...commonStyle, ...fontSize20 }}>[ 09.SelectBoxBasic ]</div>
      <SelectBoxBasic />

      {/* 09.Input Basic Style */}
      <div style={{ ...commonStyle, ...fontSize20 }}>[ 10.InputBasic ]</div>
      <Input placeholder="test" />
    </div>
  );
};
export default Guide;
