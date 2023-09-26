/* eslint-disable */
import React, { useEffect, useState } from "react";

interface PopupLayoutProps {
    isPopup: boolean;
    closePopup: () => void;
}

const PopupLayout: React.FC<PopupLayoutProps> = ({isPopup, closePopup}) => {
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
          <div className="popup-container">
            {/* 팝업 컨테이너 내용 */}
            poup
            <button onClick={closePopup}>닫기</button>
          </div>
        )}
      </>
    );
  };
export default PopupLayout;