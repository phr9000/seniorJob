/* eslint-disable */
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Button from "src/components/button/Button";

const Header: React.FC = () => {
  // dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="header-inner">
        <h1 className="logo">
          <Link to="/">SILVERJOBS</Link>
        </h1>
        <div className={`dropdown-area ${isMenuOpen ? "active" : ""}`}>
          <ul className="flex items-center h-100">
            <li className="active h-100">
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#none">Jobs</a>
            </li>
            <li>
              <a href="#none">Courses</a>
            </li>
            <li>
              <a href="#none">Contact Us</a>
            </li>
          </ul>
          <Button label="Resume Drop Off" color="red" additionalClass="ml-6" />
          <Button label="Search Candidate" additionalClass="ml-8" />
          <Button
            label="Login / Sign Up"
            color="primary"
            additionalClass="ml-8"
          />
        </div>
        <div className="menubar-icon" onClick={handleClick}>
          <i
            className={`fa-solid ${isMenuOpen ? "fa-close" : "fa-bars"} active`}
          ></i>
        </div>
      </div>
    </header>
  );
};
export default Header;
