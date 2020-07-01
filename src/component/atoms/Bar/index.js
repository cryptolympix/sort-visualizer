import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const category = {
  DEFAULT: 0,
  SORTED: 1,
  GROUP_A: 2,
  GROUP_B: 3,
  GROUP_C: 4,
};

const classes = {
  ROOT: 'Bar',
  VALUE: 'Bar__Value',
  DEFAULT: 'Bar_default',
  SORTED: 'Bar_sorted',
  GROUP_A: 'Bar_groupA',
  GROUP_B: 'Bar_groupB',
  GROUP_C: 'Bar_groupC',
};

const Bar = ({ value, width, height, category: barCategory }) => {
  let classNames = classes.ROOT;
  switch (barCategory) {
    case category.SORTED:
      classNames += ` ${classes.SORTED}`;
      break;
    case category.GROUP_A:
      classNames += ` ${classes.GROUP_A}`;
      break;
    case category.GROUP_B:
      classNames += ` ${classes.GROUP_B}`;
      break;
    case category.GROUP_C:
      classNames += ` ${classes.GROUP_C}`;
      break;
    case classes.DEFAULT:
    default:
      classNames += ` ${classes.DEFAULT}`;
  }

  let barStyle = { width: `${width}%`, height: `${height}%` };
  return (
    <div className={classNames} style={barStyle}>
      {width >= 10 && <span className={classes.VALUE}>{value}</span>}
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
