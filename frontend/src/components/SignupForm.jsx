// SignupForm.jsx
import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaMinus, FaCheck, FaXmark, FaRegCircleXmark } from "react-icons/fa6";
import {
  validateNickname,
  validateEmail,
  validatePassword,
  arePasswordsMatched,
  validatePhone
} from '../validation/signUpValidation';

// Todo. d

export default function SignupForm({ onSignUpSuccess }) {
  // 입력 상태
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);

  // 비밀번호 가시성 토글
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const togglePasswordCheckVisibility = () => setShowPasswordCheck(!showPasswordCheck);

  // Validation 검증 변수 정의
  const isNicknameValid = validateNickname(nickname);
  const isEmailValid = validateEmail(email);
  const isPasswordValid = validatePassword(password);
  const isPasswordMatched = arePasswordsMatched(password, passwordCheck);
  const isPhoneValid = validatePhone(phone);

  // 입력값 삭제
  const deleteNickname = () => setNickname("");
  const deleteEmail = () => setEmail("");
  const deletePassword = () => setPassword("");
  const deletePasswordCheck = () => setPasswordCheck("");
  const deletePhone = () => setPhone("");

  // 제출 함수 (검증 성공 시 부모 콜백 실행)
  const handleSubmit = () => {
    if (!isNicknameValid) {
      alert('닉네임은 2~8자 이내여야 합니다.');
      return;
    }
    if (!isEmailValid) {
      alert('유효한 이메일 주소를 입력해주세요.');
      return;
    }
    if (!isPasswordValid) {
      alert('비밀번호는 8~20자 이내이며, 문자, 숫자, 기호 중 2가지 이상을 포함해야 합니다.');
      return;
    }
    if (!isPasswordMatched) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    if (!isPhoneValid) {
      alert('전화번호는 01012345678 형식이어야 합니다.');
      return;
    }
    // 폼의 데이터({ nickname, email, password, phone })를 전달하여 회원가입 성공 처리
    onSignUpSuccess({ nickname, email, password, phone });
  };

  return (
    <>
      {/* Input nickname */}
      <div className="input-form-signup">
        <label htmlFor="nickname-input">Nickname</label>
        <input
          id="nickname-input"
          type="text"
          placeholder="닉네임"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
        />
        {/* Delete nickname */}
        <span
          onClick={deleteNickname}
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
        {/* Nickname validation */}
        <div className="password-requirements" style={{ fontSize: '0.9em' }}>
          {isNicknameValid ? (
            <span style={{ color: 'green' }}>
              <FaCheck /> Must be between 2 and 8 characters
            </span>
          ) : (
            <span style={{ color: 'gray' }}>
              <FaMinus /> Must be between 2 and 8 characters
            </span>
          )}
        </div>
      </div>

      {/* Input email */}
      <div className="input-form-signup">
        <label htmlFor="email-input">Email address</label>
        <input
          id="email-input"
          type="email"
          placeholder="sample@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
        {/* Email validation  */}
        <div className="password-requirements" style={{ fontSize: '0.9em' }}>
          {email && (
            isEmailValid ? (
              <span style={{ color: 'green' }}>
                <FaCheck /> Valid email address
              </span>
            ) : (
              <span style={{ color: 'red' }}>
                <FaXmark /> Invalid email address
              </span>
            )
          )}
        </div>
      </div>

      {/* Input password */}
      <div className="input-form-signup" style={{ position: 'relative' }}>
        <label htmlFor="password-input">Password</label>
        <input
          id="password-input"
          type={showPassword ? "text" : "password"}
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* Delete password */}
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
        {/* Password visibility toggle */}
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
        {/* Password validation */}
        <div className="password-requirements" style={{ fontSize: '0.9em' }}>
          <div className="requirement">
            {password.length >= 8 ? (
              <span style={{ color: 'green' }}>
                <FaCheck /> At least 8 characters
              </span>
            ) : (
              <span style={{ color: 'gray' }}>
                <FaMinus /> At least 8 characters
              </span>
            )}
          </div>
          <div className="requirement">
            {(password.length > 0 && password.length <= 20) ? (
              <span style={{ color: 'green' }}>
                <FaCheck /> No more than 20 characters
              </span>
            ) : (
              <span style={{ color: 'gray' }}>
                <FaMinus /> No more than 20 characters
              </span>
            )}
          </div>
          <div className="requirement">
            {(() => {
              let count = 0;
              if (/[A-Za-z]/.test(password)) count++;
              if (/[0-9]/.test(password)) count++;
              if (/[^A-Za-z0-9]/.test(password)) count++;
              return count >= 2;
            })() ? (
              <span style={{ color: 'green' }}>
                <FaCheck /> Must contain at least two of the following: <br />
                <span style={{ marginLeft: '1.2em' }}>
                  letters, numbers, and symbols
                </span>
              </span>
            ) : (
              <span style={{ color: 'gray' }}>
                <FaMinus /> Must contain at least two of the following: <br />
                <span style={{ marginLeft: '1.2em' }}>
                  letters, numbers, and symbols
                </span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Input password check */}
      <div className="input-form-signup" style={{ position: 'relative' }}>
        <label htmlFor="passwordCheck-input">Re-type Password</label>
        <input
          id="passwordCheck-input"
          type={showPasswordCheck ? "text" : "password"}
          placeholder="비밀번호 확인"
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
        />
        {/* Delete password check*/}
        <span
          onClick={deletePasswordCheck}
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
        {/* Password check visibility toggle */}
        <span
          onClick={togglePasswordCheckVisibility}
          style={{
            position: 'absolute',
            right: '22px',
            top: '42px',
            cursor: 'pointer',
            color: '#222'
          }}
        >
          {showPasswordCheck ? <FaEyeSlash /> : <FaEye />}
        </span>
        {/* Check passwords match */}
        <div className="password-requirements" style={{ fontSize: '0.9em' }}>
          {passwordCheck && (
            isPasswordMatched ? (
              <span style={{ color: 'green' }}>
                <FaCheck /> Passwords match
              </span>
            ) : (
              <span style={{ color: 'red' }}>
                <FaXmark /> Passwords do not match
              </span>
            )
          )}
        </div>
      </div>

      {/* Input phone number */}
      <div className="input-form-signup">
        <label htmlFor="phone-input">Phone</label>
        <input
          id="phone-input"
          type="text"
          placeholder="전화번호"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* Delete phone check*/}
        <span
          onClick={deletePhone}
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
        {/* Phone validation */}
        <div className="phone-requirements" style={{ fontSize: '0.9em' }}>
          {isPhoneValid ? (
            <span style={{ color: 'green' }}>
              <FaCheck /> Valid phone number
            </span>
          ) : (
            <span style={{ color: 'gray' }}>
              <FaMinus /> Please enter your phone number using numbers only
              <br />
              <span style={{ marginLeft: '1.2em' }}>(ex)01012345678</span>
            </span>
          )}
        </div>
      </div>

      {/* signup-button */}
      <button className="signup-button" onClick={handleSubmit}>
        Register
      </button>
    </>
  );
}