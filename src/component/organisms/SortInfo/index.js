import React, { Fragment } from 'react';
import './style.css';

const Legend = ({ label, color }) => {
  return (
    <div className="Legend">
      <span className="Legend__Color" style={{ backgroundColor: color }}></span>
      <span className="Legend__Label">{label}</span>
    </div>
  );
};

const SortInfo = ({ keys, pseudocode }) => {
  return (
    <Fragment>
      <div className="SortInfo">
        <Legend label="Unsorted" color="var(--bar-default-color)" />
        <Legend label="Sorted" color="var(--bar-sorted-color)" />
        {keys.groupA && <Legend label={keys.groupA} color="var(--bar-group-a-color)" />}
        {keys.groupB && <Legend label={keys.groupB} color="var(--bar-group-b-color)" />}
        {keys.groupC && <Legend label={keys.groupC} color="var(--bar-group-c-color)" />}
      </div>
      <div className="SortInfo__Description">
        <h4>Algorithm</h4>
        <pre className="SortInfo__Pseudocode">{pseudocode}</pre>
      </div>
    </Fragment>
  );
};

export default SortInfo;
