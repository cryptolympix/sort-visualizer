import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Controls = ({ reset, start, stop }) => {
  return (
    <div className="Controls">
      <button className="Controls__Button" onClick={reset}>
        reset
      </button>
      <button className="Controls__Button" onClick={start}>
        start
      </button>
      <button className="Controls__Button" onClick={stop}>
        stop
      </button>
    </div>
  );
};

Controls.propTypes = {
  onReset: PropTypes.func,
  onstart: PropTypes.func,
  onStop: PropTypes.func,
};

export default Controls;
