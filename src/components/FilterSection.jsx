import React from 'react';
import SearchBar from './SearchBar';
import LocationFilter from './LocationFilter';
import SortDropdown from './SortDropdown';

function FilterSection({
  searchTerm,
  setSearchTerm,
  selectedLocation,
  setSelectedLocation,
  sortBy,
  setSortBy,
  locations,
  currentCount,
  totalCount
}) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <SearchBar 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />
        
        <LocationFilter
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          locations={locations}
        />
        
        <SortDropdown
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div className="mt-4 text-xs md:text-sm text-gray-600">
        Showing <span className="font-medium">{currentCount}</span> of{' '}
        <span className="font-medium">{totalCount}</span> companies
      </div>
    </div>
  );
}

export default FilterSection;