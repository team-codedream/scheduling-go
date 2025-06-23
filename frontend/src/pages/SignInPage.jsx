import React, { useState } from 'react';
import { FaCalendarCheck } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../styles/SignInPage.css';
import signInPageVideo from '../assets/videos/signInPageVideo.mp4';
import signInPageImage from '../assets/images/signInPageImage.jpg';

// SignInPage
// Renders the sign-in screen and handles navigation callbacks.
export default function SignInPage({ onSignInSuccess, onCreateAccount }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  //  Called when the Sign In button is clicked.
  //  TODO: replace the dummy check with a real API request.
  const handleSignIn = async () => {

    // dummy check for successful authentication
     if (true) { // Check if the response status is OK
        // If authentication succeeds, notify parent to navigate
        onSignInSuccess();
      }

    // real API request example

    // try {
    //   const response = await fetch('http://localhost:8080', {
    //     method: 'POST',         // HTTP POST 요청
    //     mode: 'cors',           // 백엔드가 CORS를 지원하는 경우
    //     cache: 'no-store',      // 민감한 데이터는 캐시하지 않음
    //     credentials: 'include', // 인증 쿠키 전송 필요 시(다른 출처의 경우)
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ email, password }),
    //   });
    //   const data = await response.json();
      
    //   if (response.ok) {
    //     // If authentication succeeds, notify parent to navigate
    //     onSignInSuccess();
    //   } else {
    //     // If authentication fails, display the error message
    //     setError(data.message || 'Wrong password.\nTry again or click Forgot password to reset it.');
    //   }

    // } catch (error) {
    //   setError('Unable to connect to the server.\nPlease try again later.');
    // }
  };

  return (
    <div  className="container-sign-in">
      {/* Left container */}
      <div className="left-container-sign-in">
        {/* Header */}
        <header id="header-sign-in"> 
          <FaCalendarCheck /> SchedulingGo
        </header>

        {/* Aside */}
        <aside id="aside-sign-in">  
          {/* <img src={signInPageImage} alt="메인 이미지" style={{ maxWidth: '100%', height: 'auto', display: 'block' }}/> */}
          <video src={signInPageVideo} autoPlay loop muted playsInline style={{ maxWidth: '100%', height: 'auto', display: 'block', border: 'none' }} />
        </aside>
      </div>
      {/* End of left container */}

      {/* Right container */}
      <div className="right-container-sign-in">

        {/* Main*/}
        <main id="main-sign-in">
          {/* Screen title */}
          <span class="greeting">Welcome Back</span>
          <p>Please sign in to continue.</p>

          {/* Email Input with Label */}
          <div className="input-form">
            <label htmlFor="email-input"> Email address</label>
            <input
              id="email-input"
              type="email"
              placeholder="sample@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input with Label */}
          <div className="input-form" style={{position: 'relative'}}>
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              type={showPassword ? "text" : "password"} // Toggle between text and password input
              placeholder="비밀번호"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={togglePasswordVisibility}
            style={{
              position: 'absolute',
              right: '0px',
              top: '78%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#222'
            }}>{showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* 에러 메시지 출력 */}
          {error && <span style={{ color: 'red', whiteSpace: 'pre-line' }}>{error}</span>}

          {/* Trigger sign-in logic */}
          <button className="sign-in-button" onClick={handleSignIn}>Sign In</button>

          {/* Navigate to the sign-up screen */}
          <div className='create-account-textbox'>
            <span>Don't have an account?</span><br/>
            <span className="link-style" onClick={onCreateAccount}>Create Account</span>
          </div>
          <div className='reset-password-textbox'>
            <span>Forgot your password?</span><br/>
            <span className="link-style">Reset Password</span>
          </div>
        </main>

        {/* Footer */}
        <footer id="footer-sign-in">
          <p>© 2025 Codedream</p>
        </footer>
      </div>
      {/* End of right container */}
    </div>
  );
}

