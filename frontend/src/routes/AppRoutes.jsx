import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import SignInPage from '../pages/SignInPage'
import SignUpPage from '../pages/SignUpPage'
import CalendarPage from '../pages/CalendarPage'

export default function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      {/* // Root page - SignInPage */}
      <Route
        path="/" 
        element={
          <SignInPage            
            onSignInSuccess={() => navigate('/calendar')}
            onCreateAccount={() => navigate('/signup')} 
          /> // if success to signin, move to CalendarPage;
             // or clicks the createAccount button, move to SignUpPage
        }
      />
      {/* SignUpPage */}
      <Route 
        path="/signup"
        element={
          <SignUpPage 
            onSignUpSuccess={() => navigate('/calendar')} 
          /> // if success to signup, move to CalendarPage
        }
      />
      {/* CalendarPage   */}
      <Route 
        path="/calendar"
        element={<CalendarPage onLogout={() => navigate('/')}/>}
      />
      {/* DefaultPage */}
      <Route 
        path="*"
        element={<Navigate to="/" replace />}
      /> // if the path doesn't matched with any of paths in the router, redirect to SignInPage
    </Routes>
  );
}