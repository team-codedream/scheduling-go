import React, { useState } from 'react';
import { FaCalendarCheck } from "react-icons/fa6";
import '../styles/SignInPage.css';
import signInPageVideo from '../assets/videos/signInPageVideo.mp4';
import SigninForm from '../components/SigninForm'

// SignInPage
// Renders the sign-in screen and handles navigation callbacks.
export default function SignInPage({ onSignInSuccess, onCreateAccount }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  //  Called when the Sign In button is clicked.
  const handleSignIn = async () => {

    // TODO: 더미 signIn을 API로 바꿀 것!!
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
    <div className="container-wrap-signin">
      
      {/* container */}
      <div className="container-signin">

        {/* Left container */}
        <div className="left-container-signin">

          {/* Header */}
          <header id="header-signin"> 
            <FaCalendarCheck /> SchedulingGo
          </header>

          {/* Aside */}
          <aside id="aside-signin">  
            <video src={signInPageVideo} autoPlay loop muted playsInline style={{ maxWidth: '100%', height: 'auto', display: 'block', border: 'none' }} />
          </aside>

        </div>
        {/* End of left container */}

        {/* Right container */}
        <div className="right-container-signin">

          {/* Main*/}
          <main id="main-signin">

            {/* Screen title */}
            <span class="greeting-signin">Welcome Back</span>
            <p>Please sign in to continue.</p>

            {/* Sign-in form */}
            <SigninForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              showPassword={showPassword}
              togglePasswordVisibility={togglePasswordVisibility}
              error={error}
              handleSignIn={handleSignIn}
            />  

            {/* Navigate to the sign-up screen */}
            <div className='create-account-textbox-signin'>
              <span>Don't have an account?</span><br/>
              <span className="link-style-signin" onClick={onCreateAccount}>Create Account</span>
            </div>
            <div className='reset-password-textbox-signin'>
              <span>Forgot your password?</span><br/>
              <span className="link-style-signin">Reset Password (미구현)</span>
            </div>
          </main>

          {/* Footer */}
          <footer id="footer-signin">
            <p>© 2025 Codedream</p>
          </footer>

        </div>
        {/* End of right container */}

      </div>
      {/* End of container */}

    </div>
  );
}

