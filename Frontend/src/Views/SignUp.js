import React from 'react'
import styles from './SignUp.css'
import applogo from "../Assets/AK_logo.png"
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import api from '../Api/Api'
import { useState } from 'react';
import Snackbar from './Snackbar';

const SignUp = ({number, setNumber, navigate}) => {

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const handleClick=async()=>{
    try{
      const obj = {
        countryCode: "+91",
        phoneNumber: number.substring(number.length-10)
      }
      const data = await api.post('/api/signin', obj)
    
      setSnackbarMessage(data.data.data.otp);
      setSnackbarOpen(true);

      setTimeout(() => {
        navigate('/otp');
      }, 3000);
    }
    catch(err){
      console.log(`Error: ${err.message}`);
    }
  }

  const closeSnackbar = () => {
    setSnackbarOpen(false);
    setSnackbarMessage('');
  };

  
  return (
    
    <div className="app-body">  
      <img className="app-logo" src={applogo} alt="AdmitKard Logo"></img>
      <h4 className="heading">Welcome Back</h4>
      <p className="description">Please sign in to your account</p>
      <div className="phone-input-container">
        <PhoneInput
          countryCodeEditable={false}
          specialLabel="Enter Contact Number"
          placeholder="Phone Number"
          country={"in"}
          inputStyle={styles.inputStyle}
          containerStyle={styles.containerStyle}
          containerClass="phone-input-container"
          inputClass="phone-input"
          value={number}
          onChange={setNumber}
          // onEnterKeyPress={console.log({number})}
        />
      </div>
      <p className="extra-info">
        We will send you a one time SMS message. Charges may apply.
      </p>


      <button className="submit-button" onClick={()=>{
        handleClick();
        
        }}>
        Sign In with OTP
      </button>

      {snackbarOpen && (
        <Snackbar
          open={snackbarOpen}
          message={snackbarMessage}
          onClose={closeSnackbar}
        />
      )}
    </div>
  )
}

export default SignUp
