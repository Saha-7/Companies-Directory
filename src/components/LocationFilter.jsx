import React from 'react';

function LocationFilter({ selectedLocation, setSelectedLocation, locations }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Filter by Location
      </label>
      <select
        value={selectedLocation}
        onChange={(e) => setSelectedLocation(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
      >
        <option value="">All Locations</option>
        {locations.map(location => (
          <option key={location} value={location}>{location}</option>
        ))}
      </select>
    </div>
  );
}

export default LocationFilter;