// 정규식 정의
const nicknameRegex = /^[a-zA-Z0-9가-힣_]{2,8}$/; // 2~8자, 영문/숫자/언더스코어만 허용
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 일반적인 이메일 형식
const phoneRegex = /^010\d{4}\d{4}$/; // 01012345678 형식

// 닉네임 검증 함수
export function validateNickname(nickname) {
  return nicknameRegex.test(nickname);
}

// 이메일 검증 함수
export function validateEmail(email) {
  return emailRegex.test(email);
}

// 비밀번호 검증 함수 (8~20자, 문자, 숫자, 기호 중 2가지 이상 포함)
export function validatePassword(password) {
  const isAtLeast8 = password.length >= 8;
  const isNoMoreThan20 = password.length > 0 && password.length <= 20;
  let count = 0;
  if (/[A-Za-z]/.test(password)) count++;
  if (/[0-9]/.test(password)) count++;
  if (/[^A-Za-z0-9]/.test(password)) count++;
  const containsTwoTypes = count >= 2;
  return isAtLeast8 && isNoMoreThan20 && containsTwoTypes;
}

// 비밀번호 일치 여부 확인 함수
export function arePasswordsMatched(password, passwordCheck) {
  return password === passwordCheck;
}

// 전화번호 검증 함수
export function validatePhone(phone) {
  return phoneRegex.test(phone);
}
