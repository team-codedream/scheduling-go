import React from 'react';

// SignInPage
// Renders the sign-in screen and handles navigation callbacks.
export default function SignInPage({ onSignInSuccess, onCreateAccount }) {

  //  Called when the Sign In button is clicked.
  //  TODO: replace the dummy check with a real API request.
  const handleSignIn = async () => {
    // TODO: call your login API here
    if (true) {
      // If authentication succeeds, notify parent to navigate
      onSignInSuccess();
    }
  };

  return (
     <div>
      {/* Screen title */}
      <h1>Sign In</h1>

      {/* Trigger sign-in logic */}
      <button onClick={handleSignIn}>Sign In</button>

      {/* Navigate to the sign-up screen */}
      <button onClick={onCreateAccount}>Create Account</button>
    </div>
  );
}

