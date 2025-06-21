import React from 'react';

// SignUpPage component
// Renders the sign-up screen and handles navigation callback.
export default function SignUpPage({ onSignUpSuccess }) {
  
  // Called when the Register button is clicked.
  // TODO: replace the dummy check with a real API request.
  const handleSignUp = async () => {
    // TODO: call your signup API here
    if (true) {
      // If registration succeeds, notify parent to navigate
      onSignUpSuccess();
    }
  };

  return (
    <div>
      {/* Screen title */}
      <h1>Sign Up</h1>

      {/* Trigger sign-up logic */}
      <button onClick={handleSignUp}>Register</button>
    </div>
  );
}
