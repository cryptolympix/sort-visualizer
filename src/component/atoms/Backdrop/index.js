import React from 'react';
import './style.css';

const Backdrop = ({ onClick, show }) => {
  return show && <div class="Backdrop" onClick={onClick}></div>;
};

export default Backdrop;
