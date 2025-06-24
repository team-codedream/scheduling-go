import React from 'react';
import { FaRegCircleLeft, FaCalendarCheck } from "react-icons/fa6";
import SignupForm from "../components/SignupForm";
import '../styles/SignUpPage.css';
import SignupSwiper from '../components/SignupSwiper';

// TODO: signUp의 API를 적절히 추가할 것!!
export default function SignUpPage({ onSignUpSuccess }) {
  return (
    <div className="container-wrap-signup">
      
      {/* container */}
      <div className="container-signup">

        {/* Left container */}
        <div className="left-container-signup">
          
          {/* Main */}
          <main id="main-signup">
            <div className="go-back-sign-in" style={{width:'90%', fontSize:'1.2em'}}>
              <FaRegCircleLeft />
            </div>
            <span className='title-signup'>Sign Up</span>
            <SignupForm onSignUpSuccess={onSignUpSuccess} />
          </main>

        </div>
        {/* End of left container */}

        {/* Right container */}
        <div className="right-container-signup">
          
          {/* Header */}
          <header id="header-signup"> 
            <FaCalendarCheck /> SchedulingGo
          </header>

          {/* Aside */}
          <aside id="aside-signup">
            <span className="description-textbox-signup">Try out our powerful scheduling features</span>
            <SignupSwiper />
          </aside>
        
        </div>
        {/* End of right container */}
      
      </div>
      {/* End of container */}

    </div>
  );
}