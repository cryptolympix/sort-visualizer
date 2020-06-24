import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Bar from '../Bar';

const SortChart = ({ numbers, comparing, sorted }) => {
  return (
    <div className="SortChart">
      {numbers.map((num, i) => {
        let barW = 100 / numbers.length;
        let barH = (num * 100) / Math.max(...numbers);
        let barColor;
        if (sorted) {
          barColor = 'green';
        } else if (comparing.includes(i)) {
          barColor = 'red';
        } else {
          barColor = 'lightseagreen';
        }
        return (
          <Bar key={i} value={num} width={barW} height={barH} color={barColor}></Bar>
        );
      })}
    </div>
  );
};

SortChart.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default SortChart;
