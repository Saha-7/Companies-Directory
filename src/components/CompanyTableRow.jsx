import React from 'react';

function CompanyTableRow({ company }) {
  return (
    <tr className="hover:bg-gray-50 transition-colors">
      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-900">
        {company.id}
      </td>
      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
        {company.name}
      </td>
      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-600">
        {company.location}
      </td>
      <td className="px-4 md:px-6 py-3 md:py-4 text-xs md:text-sm text-gray-600">
        {company.industry}
      </td>
      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-600">
        {company.employees}
      </td>
      <td className="px-4 md:px-6 py-3 md:py-4 whitespace-nowrap text-xs md:text-sm text-gray-600">
        ${company.revenue}M
      </td>
    </tr>
  );
}

export default CompanyTableRow;