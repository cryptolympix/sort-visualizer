import React from 'react';
import PropTypes from 'prop-types';
import { MdRefresh, MdPlayCircleOutline, MdPauseCircleOutline } from 'react-icons/md';
import './style.css';
import List from '../../atoms/List';

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
        <MdRefresh />
      </button>
      <button className="Controls__Button" onClick={inProgress ? onPause : onStart}>
        {inProgress ? <MdPauseCircleOutline /> : <MdPlayCircleOutline />}
      </button>
      <List
        defaultItem={arraySize}
        items={[5, 10, 20, 50]}
        onSelect={onArraySizeChange}
      />
      <List
        placeholder="Sort algorithm"
        items={algorithms}
        onSelect={onAlgorithmChange}
      />
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
