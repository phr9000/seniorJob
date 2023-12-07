/* eslint-disable */
import React, { useEffect, useState } from "react";

const MindLayout: React.FC = () => {
  const [showStaticArea, setShowStaticArea] = useState(false);
  const [hideTypewriter, setHideTypewriter] = useState(false);

  useEffect(() => {
    const timerToShowStaticArea = setTimeout(() => {
      setShowStaticArea(true);
      setHideTypewriter(true);
    }, 6000); // 6초 후에 static area 나타나고 typewriter 사라짐

    // 타이머를 해제하는 부분
    return () => {
      clearTimeout(timerToShowStaticArea);
    };
  }, []); // useEffect를 한 번만 실행하도록 빈 배열을 전달합니다.

  return (
    <main className="mind-container">
      <div>
        <div className={`typewriter ${hideTypewriter ? 'hidden' : ''}`}>
          가끔은 누군가의 무한 응원이 필요할 때가 있다...
        </div>
      </div>
      {showStaticArea && (
        <div className="static-area">
          <p>난 널 응원해!</p>
        </div>
      )}
    </main>
  );
};

export default MindLayout;