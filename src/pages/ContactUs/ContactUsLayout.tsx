/* eslint-disable */
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

import imgs from "src/common/ImgDef";
import {SecTitle} from "src/components/Guide";




const ContactUsLayout: React.FC = () => {
  // @ts-ignore
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
      <section className="container sub-page pd_t30">
        <div className="section_inner">
          <div className="left_area">
            <SecTitle title="General Information"/>
            <h3 className="headline">Centre for Seniors</h3>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              &nbsp;&nbsp;9 Bishan Place, Junction 8 Office Tower<br/>
              <span className="indented">#10-02, Singapore 579837</span>
            </p>
            <p>
              <i className="fas fa-phone"></i>
              &nbsp;&nbsp;+65 6478 5015
            </p>
            <p>
              <i className="fas fa-window-restore"></i>
              &nbsp;&nbsp;
              <a href="#none">https://cfs.org.sg</a>
            </p>
            <p>
              <i className="fas fa-clock"></i>
              &nbsp;&nbsp;Mondays - Fridays, 9am - 6pm
            </p>
            <p>
              <i className="fas fa-wrench"></i>
              &nbsp;&nbsp;
              For Technical assistance (issues related to login, sign up etc..)<br/>
              <span className="indented_tech">
                Reach us at: 
                <a href="#none">customercare@fastjobs.sg</a>
              </span>
            </p>
            <br/>
            <h3 className="headline">Directions</h3>
            <h4>
              <i className="fas fa-train"></i>
              &nbsp;&nbsp;By MRT
            </h4>
            <p>Alight at Bishan MRT Station</p>
            <br/>
            <h4>
              <i className="fas fa-train"></i>
              &nbsp;&nbsp;By Bus
            </h4>
            <p>Buses: 52,53,54,55,56,57,58,59, 410W/G. Alight at Bishan Bus<br/>
              Interchange
            </p>
            <br/>
            <h4>
              <i className="fas fa-train"></i>
              &nbsp;&nbsp;By Car
            </h4>
            <p>Parking is available at the URA Carpark next to the Bishan Bus<br/>
              Interchange at Blk 513, Bishan St 13.
            </p>
          </div>
          <div className="right_area">
            <SecTitle title="Send Us a Message"/>
            <p>
              Do you have any questions that needs to be answered? Fill in the form and we will get back to you as soon
              as we can.
            </p>
            <div className="form_group">
              <input className="form_control" type="text" name="name" placeholder="Name*" required/>
            </div>
            <div className="form_group">
              <input className="form_control" type="email" name="email" placeholder="Email" required/>
            </div>
            <div className="form_group">
              <input className="form_control" type="text" name="phone" placeholder="Phone Number" required/>
            </div>
            <div className="form_group">
              <input className="form_control" type="text" name="subject" placeholder="Subject*" required/>
            </div>
            <div className="form_group">
              <textarea name="message" className="form_control" placeholder="Message" rows={5}></textarea>
            </div>
            <div className="form_check">
              <div className="control control__checkbox">
                <label htmlFor="">
                  <div className="control__indicator">
                  
                  </div>
                  <input type="checkbox" id="chk_contact_terms" name="pdqa" value="1"/>
                  By contacting us, you agree to our
                  <a href="#none" target="_blank">
                    Terms & Conditions
                  </a>
                  and for CFS to contact you for future openings
                </label>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ContactUsLayout;
