/* eslint-disable */
import {Link} from "react-router-dom";
import React, {useState} from "react"

/* Import imgs */
import imgs from 'src/common/ImgDef';

/* Import SCSS */


const Footer: React.FC = () => {
  return (
    <footer>
      <div className="ft_inner">
        <div className="copy_area">
          &copy; 2020, Centre for Seniors. All Rights Reserved.
        </div>
        <ul className="ft_links">
          <li>
            <a href="#none">About Us</a>
          </li>
          <li>
            <a href="#none">Disclaimer</a>
          </li>
          <li>
            <a href="#none">Privacy Policy</a>
          </li>
          <li>
            <a href="#none">Terms & Condition</a>
          </li>
          <li>
            <a href="#none">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;