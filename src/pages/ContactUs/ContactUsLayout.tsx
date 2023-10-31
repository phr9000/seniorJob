/* eslint-disable */
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import imgs from "src/common/ImgDef";
import {SecTitle} from "src/components/Guide";




const ContactUsLayout: React.FC = () => {
  return (
    <main className="main-container contactus_layout_container">
      <div className="sub_nav_bar">
        <div className="nav_inner">
          <ul>
            <li className="nav_item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav_item">
              <span className="slash">/</span>
            </li>
            <li className="nav_item">
              <span>Contact Us</span>
            </li>
          </ul>
        </div>
      </div>
      <section className="contact_banner">
        <h3>Contact Us</h3>
      </section>
      <section className="container sub-page">
        <div className="section_inner">
          <div className="left_area">
            <SecTitle title="General Information"/>
          </div>
          <div className="right_area">
            <SecTitle title="Send Us a Message"/>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ContactUsLayout;
