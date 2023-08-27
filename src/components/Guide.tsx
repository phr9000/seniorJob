/* eslint-disable */
import {Link} from "react-router-dom";
import React from "react";

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


export function SecTitle({title = "섹션제목"}: SecTitleProps) {
  return (
    <h2 className="sec_title">{title}</h2>
  );
}

export function BigBtn({title = " View All Jobs"}: BigBtnTitleProps) {
  return (
    <div className="big_btn">
      <a href="#none">
        {title}&nbsp;&nbsp;
        <i className="fas fa-arrow-right"></i>
      </a>
    </div>
  );
}

const Guide: React.FC = () => {
  const commonStyle = {
    fontWeight: '700',
    backgroundColor: 'yellow',
    marginTop: '20px',
    marginBottom: '20px',
  }
  const fontSize30 = {
    fontSize: '30px',
    textIndent: '30px',
  }
  const fontSize20 = {
    fontSize: '20px',
    backgroundColor: 'lightPink',
    textIndent: '60px',
  }

  return (
    <>
      <div style={{...commonStyle, ...fontSize30}}>[Guide Page]</div>
      <div style={{...commonStyle, ...fontSize20}}>[Section Titile]</div>
      <SecTitle/>

      <div style={{...commonStyle, ...fontSize20}}>[btn Big]</div>
      <BigBtn/>

    </>
  );
};
export default Guide;
