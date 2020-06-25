import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { MdRefresh, MdPlayCircleFilled, MdPauseCircleFilled } from 'react-icons/md';
import './style.css';

const Controls = ({ inProgress, onReset, onStart, onPause }) => {
  return (
    <div className="Controls">
      <IconContext.Provider value={{ className: 'Controls__Button' }}>
        <MdRefresh onClick={onReset} />
        {inProgress ? (
          <MdPauseCircleFilled onClick={onPause} />
        ) : (
          <MdPlayCircleFilled onClick={onStart} />
        )}
      </IconContext.Provider>
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
