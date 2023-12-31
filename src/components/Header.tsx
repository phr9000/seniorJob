/* eslint-disable */
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import Button from "src/components/button/Button";
import ResumePopup from "src/components/popup/resumePopup";
import LoginSignupPopup from "src/components/popup/LoginSignupPopup";

const Header: React.FC = () => {
  // dropdown
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // NavLink 클릭 시 메뉴 닫기 이벤트
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  //시작 Resume Popup
  const [isResumePopupOpen, setIsResumePopupOpen] = useState(false);

  const ResumeOpenPopup = () => {
    setIsResumePopupOpen(true);
  };

  const closePopup = () => {
    setIsResumePopupOpen(false);
    setIsLoginPopupOpen(false);
  };
  //끝 Resume Popup

  //시작 Login Popup
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const LoginOpenPopup = () => {
    setIsLoginPopupOpen(true);
  };
  //끝 Login Popup

  return (
    <>
      <header>
        <div className="header-inner">
          <h1 className="logo">
            <NavLink to="/" onClick={closeMenu}>
              SILVERJOBS
            </NavLink>
          </h1>
          <div className={`dropdown-area ${isMenuOpen ? "active" : ""}`}>
            <ul className="flex items-center h-100">
              <li className="active h-100">
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jobs"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  Jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Courses"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/ContactUs"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  Contact Us
                </NavLink>
              </li>
              {/* <li>
              <NavLink
                  to="/mind"
                  className={({isActive}) => ( isActive ? "active" : "" )}
                  onClick={closeMenu}
                >
                  mind
                </NavLink>
              </li> */}
            </ul>
            <Button
              label="Resume Drop Off"
              color="red-line"
              additionalClass="ml-6"
              onClick={ResumeOpenPopup}
            />
            <Button label="Search Candidate" additionalClass="ml-8" />
            <Button
              label="Login / Sign Up"
              color="primary-fill"
              additionalClass="ml-8"
              onClick={LoginOpenPopup}
            />
            <Button label="KO/EN" color="red-fill" additionalClass="ml-8" />
          </div>
          <div className="menubar-icon" onClick={handleClick}>
            <i
              className={`fa-solid ${
                isMenuOpen ? "fa-close" : "fa-bars"
              } active`}
            ></i>
          </div>
        </div>
      </header>
      <ResumePopup isPopup={isResumePopupOpen} closePopup={closePopup} />
      <LoginSignupPopup isPopup={isLoginPopupOpen} closePopup={closePopup} />
    </>
  );
};

export default Header;
