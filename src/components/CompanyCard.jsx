import React from 'react';

function CompanyCard({ company }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-gray-900 text-lg">{company.name}</h3>
        {/* <span className="text-xs text-gray-500">#{company.id}</span> */}
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Location:</span>
          <span className="font-medium text-gray-900">{company.location}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Industry:</span>
          <span className="font-medium text-gray-900 text-right">{company.industry}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Employees:</span>
          <span className="font-medium text-gray-900">{company.employees}</span>
        </div>
        
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Revenue:</span>
          <span className="font-medium text-green-600">${company.revenue}M</span>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;