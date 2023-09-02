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