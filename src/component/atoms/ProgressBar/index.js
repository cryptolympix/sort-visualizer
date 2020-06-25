import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ProgressBar = ({ value, maxValue }) => {
  let percentage = 0;
  if (maxValue > 0 && value > 0) {
    percentage = Math.floor((value * 100) / maxValue);
  }

  return (
    <div className="ProgressBar">
      <span className="ProgressBar__Label">{`${percentage}%`}</span>
      <span className="ProgressBar__Progress" style={{ width: `${percentage}%` }}></span>
    </div>
  );
};

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  maxValue: PropTypes.number,
};

ProgressBar.defaultProps = {
  maxValue: 100,
};

export default ProgressBar;
