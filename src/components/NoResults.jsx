import React from 'react';

function NoResults() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 text-center">
      <p className="text-gray-500 text-base md:text-lg">
        No companies found matching your criteria.
      </p>
    </div>
  );
}

export default NoResults;