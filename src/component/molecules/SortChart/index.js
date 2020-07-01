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
          if (state.sorted.includes(i)) barCategory = category.SORTED;
          if (state.groupA.includes(i)) barCategory = category.GROUP_A;
          if (state.groupB.includes(i)) barCategory = category.GROUP_B;
          if (state.groupC.includes(i)) barCategory = category.GROUP_C;
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
