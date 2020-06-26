import React from 'react';
import './style.css';

const Footer = () => {
  return (
    <div className="Footer">
      <p className="Footer__Paragraph">
        Developped by{' '}
        <a className="Footer__link" href="https://github.com/mxjoly">
          Maxime Joly
        </a>
      </p>
    </div>
  );
};

export default Footer;
