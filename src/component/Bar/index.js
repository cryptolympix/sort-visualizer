import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Bar = ({ value, width, height, color }) => {
  let barStyle = { width: `${width}%`, height: `${height}%`, backgroundColor: color };
  return (
    <div className="Bar" style={barStyle}>
      <span className="Bar__Value">{value}</span>
    </div>
  );
};

Bar.propTypes = {
  value: PropTypes.number,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  color: PropTypes.string,
};

export default Bar;
