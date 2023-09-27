/* eslint-disable */
import React, { useEffect, useState } from "react";
import imgs from "src/common/ImgDef";
import Input from "src/components/input/TextInput";
import Button from "src/components/button/Button";

interface PopupLayoutProps {
    isPopup: boolean;
    closePopup: () => void;
}

const ResumePopup: React.FC<PopupLayoutProps> = ({isPopup, closePopup}) => {
    const [showPopup, setShowPopup] = useState(isPopup);

    const dimClick = () => {
        closePopup();
    };

    useEffect(()=>{
        setShowPopup(isPopup);
        
    },[isPopup]);
    return (
        <>
        {showPopup && (
          <div className="dim" onClick={dimClick}>
            {/* 딤(Dim) 배경 */}
          </div>
        )}
        {showPopup && (
          <div className="popup-container resume">
            {/* 팝업 header */}
            <div className="__header">
              <button onClick={closePopup} className="close-btn">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            {/* 팝업 body */}
            <div className="popup-inner">
              <div className="upload-img">
                <img src={imgs.resume_upload} alt="resume upload" />
              </div>
              <h3>
                Resume Drop Off
              </h3>
              <p className="title-desc">
                Not sure what to apply? Drop off your resume and we will match the best jobs with your skills and experience.
              </p>
              <div className="form-area">
                <Input placeholder="Full Name*"/>
              </div>
              <div className="form-area">
                <Input placeholder="Email Address*"/>
              </div>
              <div className="form-area flex items-center w100 mobile">
                <span className="mobile-addon">+65</span>
                <Input placeholder="Mobile No*"/>
              </div>
              <div className="form-area flex items-center password">
                <Input placeholder="Password (min. 8 characters, at least 1 uppercase & number)*" icon="fa-solid fa-eye" type="password"/>
              </div>
              <Button
                color="primary-line"
                size="full"
                label="&nbsp;&nbsp;Upload Resume"
                icon="fa-solid fa-upload"
              />
              <Button
                color="primary-fill"
                size="full"
                label="Create Account & Send Resume&nbsp;&nbsp;"
                icon="fa-solid fa-arrow-right"
                additionalClass="reverse j-mt-20"
              />
            </div>
          </div>
        )}
      </>
    );
  };
export default ResumePopup;