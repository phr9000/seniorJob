/* eslint-disable */
import React, {useState} from "react";

import imgs from "src/common/ImgDef";
import SearchBox from "src/pages/Main/searchbox/SearchBox";




const ContactUsLayout: React.FC = () => {
  return (
    <main className="main-container contactus_layout_container">
      <section className="search-box-container active">
        <SearchBox/>
      </section>
      <section className="container sub-page">
      
      </section>
    </main>
  );
};
export default ContactUsLayout;
