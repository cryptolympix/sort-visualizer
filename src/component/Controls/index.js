import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Controls = ({ onReset, onStart, onPause, inProgress }) => {
  return (
    <div className="Controls">
      <button className="Controls__Button" onClick={onReset}>
        reset
      </button>
      <button className="Controls__Button" onClick={inProgress ? onPause : onStart}>
        {inProgress ? 'pause' : 'start'}
      </button>
    </div>
  );
};

Controls.propTypes = {
  onReset: PropTypes.func,
  onstart: PropTypes.func,
  onStop: PropTypes.func,
  inProgress: PropTypes.bool,
};

export default Controls;
