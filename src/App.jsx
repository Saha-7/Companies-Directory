




// import React, { useState, useEffect } from 'react';
// import { Search } from 'lucide-react';

// // Mock data
// const MOCK_DATA = [
//   {"id":1,"name":"Aimbo","location":"Vietnam","industry":"Electronic Components","employees":50,"revenue":8},
//   {"id":2,"name":"Tagcat","location":"Japan","industry":"Construction/Ag Equipment/Trucks","employees":62,"revenue":23},
//   {"id":3,"name":"Gevee","location":"China","industry":"Telecommunications Equipment","employees":45,"revenue":15},
//   {"id":4,"name":"Buzzdog","location":"Indonesia","industry":"Steel/Iron Ore","employees":78,"revenue":31},
//   {"id":5,"name":"Yombu","location":"Philippines","industry":"Investment Bankers/Brokers","employees":92,"revenue":42},
//   {"id":6,"name":"Camido","location":"Thailand","industry":"Auto Manufacturing","employees":120,"revenue":67},
//   {"id":7,"name":"Realblab","location":"Brazil","industry":"Biotechnology","employees":55,"revenue":28},
//   {"id":8,"name":"Zoomdog","location":"Vietnam","industry":"Computer Software","employees":88,"revenue":19},
//   {"id":9,"name":"Pixope","location":"Japan","industry":"Medical Equipment","employees":101,"revenue":54},
//   {"id":10,"name":"Trudeo","location":"China","industry":"Telecommunications","employees":73,"revenue":36}
// ];

// function Header() {
//   return (
//     <div className="mb-6 md:mb-8">
//       <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Company Directory</h1>
//       <p className="text-sm md:text-base text-gray-600">Browse and filter company information</p>
//     </div>
//   );
// }

// function SearchBar({ searchTerm, setSearchTerm }) {
//   return (
//     <div className="relative">
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Search by Company Name
//       </label>
//       <div className="relative">
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//         <input
//           type="text"
//           placeholder="Search companies..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
//         />
//       </div>
//     </div>
//   );
// }

// function LocationFilter({ selectedLocation, setSelectedLocation, locations }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Filter by Location
//       </label>
//       <select
//         value={selectedLocation}
//         onChange={(e) => setSelectedLocation(e.target.value)}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
//       >
//         <option value="">All Locations</option>
//         {locations.map(location => (
//           <option key={location} value={location}>{location}</option>
//         ))}
//       </select>
//     </div>
//   );
// }

// function SortDropdown({ sortBy, setSortBy }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium text-gray-700 mb-2">
//         Sort By
//       </label>
//       <select
//         value={sortBy}
//         onChange={(e) => setSortBy(e.target.value)}
//         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm md:text-base"
//       >
//         <option value="">Default</option>
//         <option value="name-asc">Name (A-Z)</option>
//         <option value="name-desc">Name (Z-A)</option>
//         <option value="employees-asc">Employees (Low to High)</option>
//         <option value="employees-desc">Employees (High to Low)</option>
//       </select>
//     </div>
//   );
// }

// function FilterSection({
//   searchTerm,
//   setSearchTerm,
//   selectedLocation,
//   setSelectedLocation,
//   sortBy,
//   setSortBy,
//   locations,
//   currentCount,
//   totalCount
// }) {
//   return (
//     <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 mb-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         <SearchBar 
//           searchTerm={searchTerm}
//           setSearchTerm={setSearchTerm}
//         />
        
//         <LocationFilter
//           selectedLocation={selectedLocation}
//           setSelectedLocation={setSelectedLocation}
//           locations={locations}
//         />
        
//         <SortDropdown
//           sortBy={sortBy}
//           setSortBy={setSortBy}
//         />
//       </div>

//       <div className="mt-4 text-xs md:text-sm text-gray-600">
//         Showing <span className="font-medium">{currentCount}</span> of <span className="font-medium">{totalCount}</span> companies
//       </div>
//     </div>
//   );
// }

// function CompanyCard({ company }) {
//   return (
//     <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
//       <div className="flex items-start justify-between mb-3">
//         <h3 className="font-semibold text-gray-900 text-lg">{company.name}</h3>
//         <span className="text-xs text-gray-500">#{company.id}</span>
//       </div>
      
//       <div className="space-y-2">
//         <div className="flex items-center justify-between text-sm">
//           <span className="text-gray-600">Location:</span>
//           <span className="font-medium text-gray-900">{company.location}</span>
//         </div>
        
//         <div className="flex items-center justify-between text-sm">
//           <span className="text-gray-600">Industry:</span>
//           <span className="font-medium text-gray-900 text-right">{company.industry}</span>
//         </div>
        
//         <div className="flex items-center justify-between text-sm">
//           <span className="text-gray-600">Employees:</span>
//           <span className="font-medium text-gray-900">{company.employees}</span>
//         </div>
        
//         <div className="flex items-center justify-between text-sm">
//           <span className="text-gray-600">Revenue:</span>
//           <span className="font-medium text-green-600">${company.revenue}M</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// function CompanyTableRow({ company }) {
//   return (
//     <tr className="hover:bg-gray-50 transition-colors">
//       <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
//         {company.id}
//       </td>
//       <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
//         {company.name}
//       </td>
//       <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-600">
//         {company.location}
//       </td>
//       <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-600">
//         {company.industry}
//       </td>
//       <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-600">
//         {company.employees}
//       </td>
//       <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-600">
//         ${company.revenue}M
//       </td>
//     </tr>
//   );
// }

// function CompanyTable({ companies }) {
//   return (
//     <>
//       {/* Mobile Card View */}
//       <div className="block md:hidden space-y-4">
//         {companies.map((company) => (
//           <CompanyCard key={company.id} company={company} />
//         ))}
//       </div>

//       {/* Desktop Table View */}
//       <div className="hidden md:block bg-white rounded-lg shadow-sm overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50 border-b border-gray-200">
//               <tr>
//                 <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   ID
//                 </th>
//                 <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Company Name
//                 </th>
//                 <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Location
//                 </th>
//                 <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Industry
//                 </th>
//                 <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Employees
//                 </th>
//                 <th className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
//                   Revenue (M)
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {companies.map((company) => (
//                 <CompanyTableRow key={company.id} company={company} />
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// }

// function Pagination({ currentPage, totalPages, onPageChange }) {
//   const getPageNumbers = () => {
//     const pages = [];
//     const showPages = window.innerWidth < 640 ? 3 : 5;
//     const halfShow = Math.floor(showPages / 2);
    
//     let start = Math.max(1, currentPage - halfShow);
//     let end = Math.min(totalPages, start + showPages - 1);
    
//     if (end - start < showPages - 1) {
//       start = Math.max(1, end - showPages + 1);
//     }
    
//     for (let i = start; i <= end; i++) {
//       pages.push(i);
//     }
    
//     return pages;
//   };

//   return (
//     <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
//       <div className="text-xs md:text-sm text-gray-600 order-2 sm:order-1">
//         Page {currentPage} of {totalPages}
//       </div>
      
//       <div className="flex items-center gap-1 md:gap-2 order-1 sm:order-2 flex-wrap justify-center">
//         <button
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           <span className="hidden sm:inline">Previous</span>
//           <span className="sm:hidden">Prev</span>
//         </button>
        
//         {currentPage > 2 && (
//           <>
//             <button
//               onClick={() => onPageChange(1)}
//               className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               1
//             </button>
//             {currentPage > 3 && <span className="px-2 py-2 text-gray-500">...</span>}
//           </>
//         )}
        
//         {getPageNumbers().map(page => (
//           <button
//             key={page}
//             onClick={() => onPageChange(page)}
//             className={`px-3 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium ${
//               currentPage === page
//                 ? 'bg-blue-600 text-white'
//                 : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
//             }`}
//           >
//             {page}
//           </button>
//         ))}
        
//         {currentPage < totalPages - 1 && (
//           <>
//             {currentPage < totalPages - 2 && <span className="px-2 py-2 text-gray-500">...</span>}
//             <button
//               onClick={() => onPageChange(totalPages)}
//               className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50"
//             >
//               {totalPages}
//             </button>
//           </>
//         )}

//         <button
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 md:px-4 py-2 border border-gray-300 rounded-lg text-xs md:text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// function LoadingSpinner() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
//       <div className="text-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
//         <p className="mt-4 text-sm md:text-base text-gray-600">Loading companies...</p>
//       </div>
//     </div>
//   );
// }

// function NoResults() {
//   return (
//     <div className="bg-white rounded-lg shadow-sm p-8 md:p-12 text-center">
//       <p className="text-gray-500 text-base md:text-lg">No companies found matching your criteria.</p>
//     </div>
//   );
// }

// function App() {
//   const [companies, setCompanies] = useState([]);
//   const [filteredCompanies, setFilteredCompanies] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedLocation, setSelectedLocation] = useState('');
//   const [sortBy, setSortBy] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const itemsPerPage = 50;

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setCompanies(MOCK_DATA);
//       setFilteredCompanies(MOCK_DATA);
//       setLoading(false);
//     }, 500);
//   }, []);

//   const locations = [...new Set(companies.map(company => company.location))].sort();

//   useEffect(() => {
//     let result = [...companies];

//     if (searchTerm) {
//       result = result.filter(company =>
//         company.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     if (selectedLocation) {
//       result = result.filter(company => company.location === selectedLocation);
//     }

//     if (sortBy === 'name-asc') {
//       result.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sortBy === 'name-desc') {
//       result.sort((a, b) => b.name.localeCompare(a.name));
//     } else if (sortBy === 'employees-asc') {
//       result.sort((a, b) => a.employees - b.employees);
//     } else if (sortBy === 'employees-desc') {
//       result.sort((a, b) => b.employees - a.employees);
//     }

//     setFilteredCompanies(result);
//     setCurrentPage(1);
//   }, [searchTerm, selectedLocation, sortBy, companies]);

//   const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;
//   const currentCompanies = filteredCompanies.slice(startIndex, endIndex);

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-6 md:py-8 px-4">
//       <div className="max-w-7xl mx-auto">
//         <Header />
        
//         <FilterSection
//           searchTerm={searchTerm}
//           setSearchTerm={setSearchTerm}
//           selectedLocation={selectedLocation}
//           setSelectedLocation={setSelectedLocation}
//           sortBy={sortBy}
//           setSortBy={setSortBy}
//           locations={locations}
//           currentCount={currentCompanies.length}
//           totalCount={filteredCompanies.length}
//         />

//         {filteredCompanies.length === 0 ? (
//           <NoResults />
//         ) : (
//           <>
//             <CompanyTable companies={currentCompanies.slice(startIndex, endIndex)} />
            
//             {totalPages > 1 && (
//               <Pagination
//                 currentPage={currentPage}
//                 totalPages={totalPages}
//                 onPageChange={handlePageChange}
//               />
//             )}
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;












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