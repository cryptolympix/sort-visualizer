import React from 'react';
import './style.css';

const Legend = ({ label, color }) => {
  return (
    <div className="Legend">
      <span className="Legend__Color" style={{ backgroundColor: color }}></span>
      <span className="Legend__Label">{label}</span>
    </div>
  );
};

const SortInfo = () => {
  return (
    <div className="SortInfo">
      <Legend label="Unsorted" color="var(--bar-default-color)" />
      <Legend label="Sorted" color="var(--bar-sorted-color)" />
      <Legend label="Comparing" color="var(--bar-compared-color)" />
      <Legend label="Swapping" color="var(--bar-swapped-color)" />
    </div>
  );
};

export default SortInfo;
