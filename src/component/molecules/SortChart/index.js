import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import Bar, { category } from '../../atoms/Bar';

const SortChart = ({ numbers, state }) => {
  return (
    <div className="SortChart">
      {numbers.map((num, i) => {
        let barW = 100 / numbers.length;
        let barH = (num * 100) / Math.max(...numbers);

        let barCategory = category.DEFAULT;
        if (state) {
          if (state.sorted) barCategory = category.SORTED;
          if (state.comparing.includes(i)) barCategory = category.COMPARED;
          if (state.swapping.includes(i)) barCategory = category.SWAPPED;
        }

        return (
          <Bar key={i} value={num} width={barW} height={barH} category={barCategory} />
        );
      })}
    </div>
  );
};

SortChart.propTypes = {
  numbers: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default SortChart;
