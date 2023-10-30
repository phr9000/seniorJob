/* eslint-disable */
import React, {useState} from "react";

import imgs from "src/common/ImgDef";
import SearchBox from "src/pages/Main/searchbox/SearchBox";
import {SecTitle} from "src/components/Guide";




const ContactUsLayout: React.FC = () => {
  return (
    <main className="main-container contactus_layout_container">
      <section className="search-box-container active">
        <SearchBox/>
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
