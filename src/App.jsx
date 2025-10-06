


import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterSection from './components/FilterSection';
import CompanyTable from './components/CompanyTable';
import Pagination from './components/Pagination';
import LoadingSpinner from './components/LoadingSpinner';
import NoResults from './components/NoResults';

function App() {
  const [companies, setCompanies] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 50;

  useEffect(() => {
    fetch('/data/mockData.json')
    .then(res => res.json())
    .then(data => {
      setCompanies(data);
      setFilteredCompanies(data);
      setLoading(false);
    });
  }, []);

  const locations = [...new Set(companies.map(company => company.location))].sort();

  useEffect(() => {
    let result = [...companies];

    if (searchTerm) {
      result = result.filter(company =>
        company.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedLocation) {
      result = result.filter(company => company.location === selectedLocation);
    }

    if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sortBy === 'employees-asc') {
      result.sort((a, b) => a.employees - b.employees);
    } else if (sortBy === 'employees-desc') {
      result.sort((a, b) => b.employees - a.employees);
    }

    setFilteredCompanies(result);
    setCurrentPage(1);
  }, [searchTerm, selectedLocation, sortBy, companies]);

  const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCompanies = filteredCompanies.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <Header />
        
        <FilterSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          sortBy={sortBy}
          setSortBy={setSortBy}
          locations={locations}
          currentCount={currentCompanies.length}
          totalCount={filteredCompanies.length}
        />

        {filteredCompanies.length === 0 ? (
          <NoResults />
        ) : (
          <>
            <CompanyTable companies={currentCompanies} />
            
            {totalPages > 1 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;