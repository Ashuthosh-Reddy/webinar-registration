import React from 'react';
import logo from './logo.svg';
import './App.css';
import RegistrationForm from './components/registration';
import FAQs from './components/FAQ';
import KeyTakeaways from './components/keytakeways';
import WebinarDetails from './components/speaker';

function App() {
  return (
    <>
      <RegistrationForm></RegistrationForm>
      <KeyTakeaways></KeyTakeaways>
      <WebinarDetails></WebinarDetails>
      <FAQs></FAQs>
    </>
  );
}

export default App;
