import React from 'react';
import './Snackbar.css'

const Snackbar = ({ open, message, onClose }) => {
  return (
    <div className={`snackbar ${open ? 'open' : ''}`}>
      <span>{message}</span>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Snackbar;