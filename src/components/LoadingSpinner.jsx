import React from 'react';

function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-sm md:text-base text-gray-600">Loading companies...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;