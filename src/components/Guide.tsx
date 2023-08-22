/* eslint-disable */
import {Link} from "react-router-dom";
import React from "react";


export function SecTitle() {
  return (
    <h2 className="sec_title">Latest Jobs</h2>
  );
}

const Guide: React.FC = () => {
  const commonStyle = {
    backgroundColor: 'yellow',
    marginTop: '20px',
    marginBottom: '20px',
  }
  const fontSize30 = {
    fontSize: '30px',
    textIndent: '30px'
  }
  const fontSize20 = {
    fontSize: '20px',
    backgroundColor: 'lightPink',
    textIndent: '60px'
  }

  return (
    <>
      <div style={{...commonStyle, ...fontSize30}}>Guide Page</div>
      <div style={{...commonStyle, ...fontSize20}}>Section Titile</div>
      <SecTitle/>


    </>
  );
};
export default Guide;
