/* eslint-disable */
import React from "react";

/* Import imgs */
import imgs from 'src/common/ImgDef';

/* Import Component */
import {BigBtn} from "src/components/Guide";




const SubBanner: React.FC = () => {
  return (
    <div className="section_inner">
      <h2>Don’t have an account? Sign up now.</h2>
      <p>
        Apply and save jobs easily with an account.
      </p>
      <div>
        <BigBtn title="Register"/>
      </div>
    </div>
  );
}
export default SubBanner;