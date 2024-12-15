import { useState } from 'react';
import './App.css';
import Landing from './components/landing/landing';
import RegistrationForm from './components/register/register';
import SignInUpForm from './components/signin/sign';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/start" />} />
      <Route path="/start" element={<Landing />} />
      <Route path="/sign" element={<SignInUpForm />} />
      <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
