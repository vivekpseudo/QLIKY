import { Globe } from 'lucide-react';
import { LocationData } from '../../types';

interface LocationTableProps {
  locations: LocationData[];
}

const LocationTable = ({ locations }: LocationTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="py-3 px-4 text-left font-medium text-gray-500">Country</th>
            <th className="py-3 px-4 text-right font-medium text-gray-500">Scans</th>
            <th className="py-3 px-4 text-right font-medium text-gray-500">Percentage</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr 
              key={location.country} 
              className={`${index !== locations.length - 1 ? 'border-b border-gray-100' : ''} hover:bg-gray-50`}
            >
              <td className="py-3 px-4 whitespace-nowrap">
                <div className="flex items-center">
                  <Globe className="h-4 w-4 text-gray-400 mr-2" />
                  <span>{location.country}</span>
                </div>
              </td>
              <td className="py-3 px-4 text-right whitespace-nowrap font-medium">
                {location.count}
              </td>
              <td className="py-3 px-4 text-right whitespace-nowrap">
                <div className="flex items-center justify-end">
                  <span className="mr-2">{location.percentage}%</span>
                  <div className="w-20 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary-500 h-2 rounded-full" 
                      style={{ width: `${location.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LocationTable;