import React from "react";

const FilterSort = ({ onToggleGreased, onSortChange }) => (
  <div className="filterSortWrapper">
    <button onClick={onToggleGreased}>Toggle Greased Hogs</button>
    <select onChange={(e) => onSortChange(e.target.value)}>
      <option value="">Sort by</option>
      <option value="name">Name</option>
      <option value="weight">Weight</option>
    </select>
  </div>
);

export default FilterSort;
