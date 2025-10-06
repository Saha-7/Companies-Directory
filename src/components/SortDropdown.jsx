import React from 'react';

function SortDropdown({ sortBy, setSortBy }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Sort By
      </label>
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
      >
        <option value="">Default</option>
        <option value="name-asc">Name (A-Z)</option>
        <option value="name-desc">Name (Z-A)</option>
        
        {/* Removed extra sort options for now */}
        {/* <option value="employees-asc">Employees (Low to High)</option>
        <option value="employees-desc">Employees (High to Low)</option> */}
      </select>
    </div>
  );
}

export default SortDropdown;