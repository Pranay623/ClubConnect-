import { useState } from 'react';
import * as Component from '../signin/component.jsx';
import { useNavigate } from 'react-router-dom';
import bac from './assets/eic.png'
function SignInUpForm() {
  const [signin, toggle] = useState(true); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signinEmail, setSigninEmail] = useState('');
  const [signinPassword, setSigninPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://aqua-mitra-backend-1.onrender.com/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });
      
      const data = await response.json();
      if (response.ok) {
        console.log("Signup successful:", data);
        toggle(true);
        setErrorMessage('');
      } else {
        console.error("Signup failed:", data.message);
        setErrorMessage(data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://aqua-mitra-backend-1.onrender.com/user/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: signinEmail, password: signinPassword }),
      });
      
      const data = await response.json();
      if (response.ok && data.userID) {
        console.log("Sign-in successful:", data);
        const setItem = localStorage.setItem("userID",JSON.stringify(data.userID))
        console.log(setItem)
        navigate('/start');
        setErrorMessage(''); 
      } else {
        console.error("Sign-in failed:", data.message);
        setErrorMessage(data.message || "Sign-in failed. Please check your credentials."); 
      }
    } catch (error) {
      console.error("Error signing in:", error);
      setErrorMessage("An error occurred. Please try again later.");
    }
  };


  return (
    <div className='body w-full h-screen'
    style={{
                  backgroundImage: `url(${bac})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
      <Component.Container className='container'>
        <Component.SignUpContainer signinIn={signin}>
          <Component.Form onSubmit={handleSignUp}>
            <Component.Title>Admin Sign in</Component.Title>
            {/* <Component.Input type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /> */}
            <Component.Input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <Component.Input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <Component.Button type="submit">Sign in</Component.Button>
            {errorMessage && !signin && <p className="error-message">{errorMessage}</p>}
          </Component.Form>
        </Component.SignUpContainer>

        <Component.SignInContainer signinIn={signin}>
          <Component.Form onSubmit={handleSignIn}>
            <Component.Title>User Sign in</Component.Title>
            <Component.Input type='email' placeholder='Email' value={signinEmail} onChange={(e) => setSigninEmail(e.target.value)} />
            <Component.Input type='password' placeholder='Password' value={signinPassword} onChange={(e) => setSigninPassword(e.target.value)} />
            <Component.Button type="submit" className='signin'>Sign In</Component.Button>
            {errorMessage && signin && <p className="error-message">{errorMessage}</p>}
          </Component.Form>
        </Component.SignInContainer>

        <Component.OverlayContainer signinIn={signin}>
          <Component.Overlay signinIn={signin}>
            <Component.LeftOverlayPanel signinIn={signin}>
              <Component.Title>Welcome Back Admin!</Component.Title>
              <Component.Paragraph>
                To keep connected with us please login with your personal info
              </Component.Paragraph>
              <Component.GhostButton onClick={() => toggle(true)}>
                User Sign In
              </Component.GhostButton>
            </Component.LeftOverlayPanel>

            <Component.RightOverlayPanel signinIn={signin}>
              <Component.Title>Hello, User!</Component.Title>
              <Component.Paragraph>
                Enter Your personal details and start your journey with us
              </Component.Paragraph>
              <Component.GhostButton onClick={() => toggle(false)}>
                Admin Sign In
              </Component.GhostButton> 
            </Component.RightOverlayPanel>
          </Component.Overlay>
        </Component.OverlayContainer>
      </Component.Container>
    </div>
  );
}

export default SignInUpForm;