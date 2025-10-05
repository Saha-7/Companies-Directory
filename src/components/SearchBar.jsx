import React, { useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-2">
        Search by Company Name
      </label>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search companies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  )
}

export default SearchBar
