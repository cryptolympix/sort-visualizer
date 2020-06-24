import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const category = {
  DEFAULT: 0,
  UNSORTED: 1,
  SORTED: 2,
  COMPARED: 3,
};

const classes = {
  ROOT: 'Bar',
  VALUE: 'Bar__Value',
  DEFAULT: 'Bar_default',
  SORTED: 'Bar_sorted',
  COMPARED: 'Bar_compared',
};

const Bar = ({ value, width, height, category: barCategory }) => {
  let classNames = classes.ROOT;
  switch (barCategory) {
    case category.SORTED:
      classNames += ` ${classes.SORTED}`;
      break;
    case category.COMPARED:
      classNames += ` ${classes.COMPARED}`;
      break;
    case classes.DEFAULT:
    default:
      classNames += ` ${classes.DEFAULT}`;
  }

  let barStyle = { width: `${width}%`, height: `${height}%` };
  return (
    <div className={classNames} style={barStyle}>
      <span className={classes.VALUE}>{value}</span>
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
