import React, { useState } from 'react';
import { FaCalendarCheck } from "react-icons/fa6";
import '../styles/SignInPage.css';
import signInPageVideo from '../assets/videos/signInPageVideo.mp4';
import SigninForm from '../components/SigninForm';
import { signin } from '../api/api';

// SignInPage
// Renders the sign-in screen and handles navigation callbacks.
export default function SignInPage({ onSignInSuccess, onCreateAccount }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  //  Called when the Sign In button is clicked.
  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const user = await signin({ email, pw: password });
      console.log(user);
      onSignInSuccess();
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
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
            <span className="greeting-signin">Welcome Back</span>
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
              <span className="link-style-signin">Reset Password</span>
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

