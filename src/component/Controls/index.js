import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import List from '../List';

const Controls = ({
  inProgress,
  onReset,
  onStart,
  onPause,
  algorithms,
  onAlgorithmChange,
  arraySize,
  onArraySizeChange,
}) => {
  return (
    <div className="Controls">
      <button className="Controls__Button" onClick={onReset}>
        Reset
      </button>
      <button className="Controls__Button" onClick={inProgress ? onPause : onStart}>
        {inProgress ? 'Pause' : 'Start'}
      </button>
      <List
        defaultItem={arraySize}
        items={[5, 10, 20, 50]}
        onSelect={onArraySizeChange}
      />
      <List placeholder="Sort algo" items={algorithms} onSelect={onAlgorithmChange} />
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
