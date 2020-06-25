import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import List from '../../molecules/List';

const AppBar = ({
  arraySize,
  algorithm,
  algorithmLabels,
  onArraySizeChange,
  onAlgorithmChange,
}) => {
  return (
    <div className="AppBar">
      <h1 className="AppBar__Title">Sort Visualizer</h1>
      <div className="AppBar__Controls">
        <div className="AppBar__Menu">
          <span className="AppBar__Label">Size</span>
          <List
            defaultItem={arraySize}
            items={[5, 10, 20, 50]}
            onSelect={onArraySizeChange}
          />
        </div>
        <div className="AppBar__Menu">
          <span className="AppBar__Label">Algorithm</span>
          <List
            defaultItem={algorithm}
            items={algorithmLabels}
            onSelect={onAlgorithmChange}
          />
        </div>
      </div>
    </div>
  );
};

AppBar.propTypes = {
  algorithm: PropTypes.string,
  arraySize: PropTypes.number,
  algorithmLabels: PropTypes.arrayOf(PropTypes.string),
  onArraySizeChange: PropTypes.func,
  onAlgorithmChange: PropTypes.func,
};

export default AppBar;
