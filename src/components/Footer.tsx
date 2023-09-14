/* eslint-disable */
import {Link} from "react-router-dom";
import React, {useState} from "react"

/* Import imgs */
import imgs from 'src/common/ImgDef';

interface FooterProps {
  style?: React.CSSProperties; // style 속성을 받아들일 수 있도록 추가
}



const Footer: React.FC<FooterProps> = ({style}) => {
  return (
    <footer style={style}>
      <div className="ft_inner">
        <div className="copy_area">
          &copy; 2020, Centre for Seniors. All Rights Reserved.
        </div>
        <ul className="ft_links">
          <li>
            <a href="#none" title="About Us">About Us</a>
          </li>
          <li>
            <a href="#none" title="Disclaimer">Disclaimer</a>
          </li>
          <li>
            <a href="#none" title="Privacy Policy">Privacy Policy</a>
          </li>
          <li>
            <a href="#none" title="Terms & Condition">Terms & Condition</a>
          </li>
          <li>
            <a href="#none" title="face book">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;