/* eslint-disable */
import {Link} from "react-router-dom";
import React from "react";

/* Import imgs */
import imgs from "src/common/ImgDef";




const SelectBoxBasic: React.FC = () => {
  const margin = {
    marginTop: '10rem',
  };
  
  return (
    <div className="select_chk">
      <div className="dropdown_area select_basic" style={margin}>
        <button type="button" className="dropdown_label">
          <span className="_label">Employment Type</span>
          <span className="_arrow_icon"></span>
        </button>
        <div className="dropdown_menu">
          <ul>
            <li className="_item">
              <label>
                <input type="checkbox" className="hiddenCheckbox"/>
                <div className="__custom_chk"></div>
                <span className="__txt">All</span>
              </label>
            </li>
            <li className="_item">
              <label>
                <input type="checkbox" className="hiddenCheckbox"/>
                <div className="__custom_chk"></div>
                <span className="__txt">Part Time</span>
              </label>
            </li>
            <li className="_item">
              <label>
                <input type="checkbox" className="hiddenCheckbox"/>
                <div className="__custom_chk"></div>
                <span className="__txt">Full Time</span>
              </label>
            </li>
            <li className="_item">
              <label>
                <input type="checkbox" className="hiddenCheckbox"/>
                <div className="__custom_chk"></div>
                <span className="__txt">Contract</span>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default SelectBoxBasic;