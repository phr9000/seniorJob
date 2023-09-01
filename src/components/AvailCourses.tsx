/* eslint-disable */
import React from "react";

/* Import imgs */
import imgs from 'src/common/ImgDef';

/* Import SCSS */
import "src/assets/styles/layout/availCourses.scss";

/* Import Component */
import {BigBtn, SecTitle, SecTitleDesc} from "src/components/Guide";




const margin = {
  marginTop: '10rem',
};


const AvailCourses: React.FC = () => {
  return (
    <div className="section_inner" style={margin}>
      <SecTitle title="Latest Jobs"/>
      <SecTitleDesc/>
      
      <BigBtn title="View All Jobs"/>
    </div>
  );
};
export default AvailCourses;