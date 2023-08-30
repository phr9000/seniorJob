/* eslint-disable */
import React from "react";

/* Import imgs */
import imgs from 'src/common/ImgDef';

/* Import SCSS */
import "src/assets/styles/layout/availCourses.scss";

/* Import Component */
import {BigBtn, SecTitle} from "src/components/Guide";




const AvailCourses: React.FC = () => {
  return (
    <div className="section_inner">
      <SecTitle title="Latest Jobs"/>
      
      <BigBtn title="View All Jobs"/>
    </div>
  );
};
export default AvailCourses;