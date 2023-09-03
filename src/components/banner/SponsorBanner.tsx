/* eslint-disable */
import React from "react";

/* Import imgs */
import imgs from 'src/common/ImgDef';




const SponsorBanner: React.FC = () => {
  return (
    <div className="section_inner sponsor_banner">
      <p>Powered By</p>
      <figure>
        <img src={imgs.logo_fastjobs} alt="logo_fastjobs_logo"/>
      </figure>
    </div>
  );
}
export default SponsorBanner;