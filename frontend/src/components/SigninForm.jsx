import React from 'react';
import { FaEye, FaEyeSlash, FaRegCircleXmark } from 'react-icons/fa6';

// 필요한 모든 props를 구조 분해 할당
export default function SigninForm({
  email,
  setEmail,
  password,
  setPassword,
  showPassword,
  togglePasswordVisibility,
  error,
  handleSignIn
}) {
  
  // 입력값 삭제
  const deleteEmail = () => setEmail("");
  const deletePassword = () => setPassword("");
  
  return (
    <>
      {/* Input Email */}
      <div className="input-form-signin" style={{ position: 'relative' }}>
        <label htmlFor="email-input">Email address</label>
        <input
          id="email-input"
          type="email"
          placeholder="sample@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Delete nickname */}
        <span
          onClick={deleteEmail}
          style={{
            position: 'absolute',
            right: '0px',
            top: '42px',
            cursor: 'pointer',
            color: '#222'
          }}
        >
          <FaRegCircleXmark/>
        </span>
      </div>
      
      {/* Input Password */}
      <div className="input-form-signin" style={{ position: 'relative' }}>
        <label htmlFor="password-input">Password</label>
        <input
          id="password-input"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Delete nickname */}
        <span
          onClick={deletePassword}
          style={{
            position: 'absolute',
            right: '0px',
            top: '42px',
            cursor: 'pointer',
            color: '#222'
          }}
        >
          <FaRegCircleXmark/>
        </span>
        <span
          onClick={togglePasswordVisibility}
          style={{
            position: 'absolute',
            right: '22px',
            top: '42px',
            cursor: 'pointer',
            color: '#222'
          }}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
      
      {/* 에러 메시지 출력 */}
      {error && (
        <span style={{ color: 'red', whiteSpace: 'pre-line' }}>{error}</span>
      )}
      
      {/* Trigger sign-in logic */}
      <button className="signin-button" onClick={handleSignIn}>
        Sign In
      </button>
    </>
  );
}