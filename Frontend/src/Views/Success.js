import React from 'react'
import styles from './Success.css'
import artboard from "../Assets/artboard.png"



const Success = () => {
  return (
    <div className="app-body">
    <img className="art-image" src={artboard} alt="Art"></img>
    <h3 className="heading">Welcome to AdmitKard</h3>
    <p className="description">
      In order to provide you with<br></br> a custom experience,<br></br>
      <span>we need to ask you a few questions.</span>
    </p>
    <button className="submit-button">Get Started</button>
    <p className="submit-info">*This will only take 5 min.</p>
  </div>
  )
}

export default Success
