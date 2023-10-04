/* eslint-disable */
import React, { useEffect, useState, useRef } from "react";
import Input from "src/components/input/TextInput";
import Button from "src/components/button/Button";
/* Import imgs */
import imgs from 'src/common/ImgDef';

interface PopupLayoutProps {
    isPopup: boolean;
    closePopup: () => void;
}

const LoginSignPopup: React.FC<PopupLayoutProps> = ({isPopup, closePopup}) => {
    const [showPopup, setShowPopup] = useState(isPopup);
    const loginTabRef = useRef<HTMLAnchorElement | null>(null);
    const signUpTabRef = useRef<HTMLAnchorElement | null>(null);

    const dimClick = () => {
        closePopup();
    };

    useEffect(()=>{
        setShowPopup(isPopup);
        
    },[isPopup]);
    const toggleTab = (tabId: string) => {
        // 현재 활성 탭의 li 요소와 클릭한 li 요소가져오기
        const currentTabLi = document.querySelector('.login-tab li.active');
        const clickedTabLi = document.querySelector(`[data-tab="${tabId}"]`)?.parentElement;
        

        // tab 활성화
        if(currentTabLi) {
            currentTabLi.classList.remove('active');
        }
        if(clickedTabLi) {
            clickedTabLi.classList.add('active'); // 변경된 부분
        }

        if (tabId === 'login' && loginTabRef.current) {
            loginTabRef.current.setAttribute('aria-expanded', 'true');
            signUpTabRef.current?.setAttribute('aria-expanded', 'false');
            
            document.querySelectorAll('.tab-content').forEach((content) => {
                if (content instanceof HTMLDivElement) {
                    content.style.display = 'none';
                }
            });
    
            const selectedTabContent = document.getElementById(tabId) as HTMLDivElement;
            if (selectedTabContent) {
                selectedTabContent.style.display = 'block';
            }
        } else if (tabId === 'signUp' && signUpTabRef.current) {
            loginTabRef.current?.setAttribute('aria-expanded', 'false');
            signUpTabRef.current.setAttribute('aria-expanded', 'true');
            
            document.querySelectorAll('.tab-content').forEach((content) => {
                if (content instanceof HTMLDivElement) {
                    content.style.display = 'none';
                }
            });
    
            const selectedTabContent = document.getElementById(tabId) as HTMLDivElement;
            if (selectedTabContent) {
                selectedTabContent.style.display = 'block';
            }
        }
    };
    return (
        <>
        {showPopup && (
          <div className="dim" onClick={dimClick}>
            {/* 딤(Dim) 배경 */}
          </div>
        )}
        {showPopup && (
          <div className="popup-container login">
            {/* 팝업 header */}
            <div className="__header">
              <button onClick={closePopup} className="close-btn">
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            {/* 팝업 body */}
            <div className="popup-inner">
              <ul className="login-tab">
                <li className="active">
                    <a 
                        href="#login" 
                        data-toggle="tab" 
                        aria-expanded="true"
                        ref={loginTabRef}
                        data-tab="login"
                        onClick={()=>{toggleTab('login')}}
                    >
                        Login
                    </a>
                </li>
                <li>
                    <a 
                        href="#signup" 
                        data-toggle="tab" 
                        aria-expanded="false"
                        ref={signUpTabRef}
                        data-tab="signUp"
                        onClick={()=>{toggleTab('signUp')}}
                    >
                        Sign up
                    </a>
                </li>
              </ul>
              <div className="sponsor-area">
                <h3>In Partnership with</h3>
                <div className="flex items-center justify-center">
                    <div className="left">
                        <figure>
                            <img src={imgs.life_work} alt="life_work_logo"/>
                        </figure>
                    </div>
                    <div className="right">
                        <figure>
                            <img src={imgs.logo_fastjobs} alt="logo_fastjobs_logo"/>
                        </figure>
                    </div>
                </div>
              </div>
              <div className="body-content">
                {/* login */}
                <div id="login" className="tab-content" style={{ display: 'block' }}>
                    <p>login contents</p>
                    {/* check terms */}
                    <div className="checkbox-area j-mt-10">
                        <input type="checkbox" id="rememberMe"/>
                        <label htmlFor="rememberMe">
                        <span className="checkbox"></span>
                        <span className="txt">Remember Me</span>
                        </label>
                    </div>
                    <Button
                        color="primary-fill"
                        size="full"
                        label="Login"
                        additionalClass="j-mt-20"
                    />
                </div>
                {/* sign up */}
                <div id="signUp" className="tab-content" style={{ display: 'none' }}>
                    <p>sign up contents</p>
                    {/* check terms */}
                    <div className="checkbox-area j-mt-10">
                        <input type="checkbox" id="agree"/>
                        <label htmlFor="agree">
                        <span className="checkbox"></span>
                        <span className="txt">By signing up, you agree to our <a href="#none" className="blue-color font-black">Terms & Conditions</a> and for CFS to contact you for future opportunities</span>
                        </label>
                    </div>
                    <Button
                        color="primary-fill"
                        size="full"
                        label="Sign Up"
                        additionalClass="j-mt-20"
                    />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
export default LoginSignPopup;