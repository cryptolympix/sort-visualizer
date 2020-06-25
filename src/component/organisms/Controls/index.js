import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import {
  MdRefresh,
  MdPlayCircleFilled,
  MdPauseCircleFilled,
  MdSkipPrevious,
  MdSkipNext,
} from 'react-icons/md';
import './style.css';

const Controls = ({
  inProgress,
  onReset,
  onStart,
  onPause,
  onSkipPrevious,
  onSkipNext,
}) => {
  return (
    <div className="Controls">
      <IconContext.Provider value={{ className: 'Controls__Button-side' }}>
        <MdSkipPrevious onClick={onSkipPrevious} />
        <IconContext.Provider value={{ className: 'Controls__Button-center' }}>
          <MdRefresh onClick={onReset} />
          {inProgress ? (
            <MdPauseCircleFilled onClick={onPause} />
          ) : (
            <MdPlayCircleFilled onClick={onStart} />
          )}
        </IconContext.Provider>
        <MdSkipNext onClick={onSkipNext} />
      </IconContext.Provider>
    </div>
  );
};

Controls.propTypes = {
  onReset: PropTypes.func,
  onstart: PropTypes.func,
  onStop: PropTypes.func,
  onSkipPrevious: PropTypes.func,
  onSkipNext: PropTypes.func,
  inProgress: PropTypes.bool,
};

export default Controls;
