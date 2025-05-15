import { AnalyticsData, QRCodeHistory } from '../../types';
import { QrCode } from 'lucide-react';
import ScanChart from './ScanChart';
import DeviceBreakdown from './DeviceBreakdown';
import LocationTable from './LocationTable';

interface AnalyticsDashboardProps {
  qrCode: QRCodeHistory;
  analytics: AnalyticsData;
}

const AnalyticsDashboard = ({ qrCode, analytics }: AnalyticsDashboardProps) => {
  return (
    <div className="space-y-6">
      {/* QR Code Header */}
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center mb-4 md:mb-0 md:mr-6">
            <div 
              className="h-16 w-16 flex-shrink-0 mr-4 border border-gray-200 rounded-md flex items-center justify-center p-2"
              style={{ backgroundColor: qrCode.bgColor }}
            >
              <QrCode 
                size={40}
                className="text-gray-800"
                style={{ color: qrCode.fgColor }}
              />
            </div>
            <div>
              <h2 className="text-lg font-semibold">{qrCode.value.length > 30 ? `${qrCode.value.substring(0, 30)}...` : qrCode.value}</h2>
              <p className="text-sm text-gray-500">Created on {new Date(qrCode.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-4">
            <StatCard label="Total Scans" value={analytics.totalScans} />
            <StatCard 
              label="Most Popular Device" 
              value={analytics.deviceBreakdown.sort((a, b) => b.value - a.value)[0].name} 
            />
            <StatCard 
              label="Top Location" 
              value={analytics.topLocations[0].country} 
            />
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="card h-full">
            <h3 className="text-lg font-semibold mb-4">Scan Activity</h3>
            <ScanChart data={analytics.scansByDate} />
          </div>
        </div>
        <div>
          <div className="card h-full">
            <h3 className="text-lg font-semibold mb-4">Device Breakdown</h3>
            <DeviceBreakdown data={analytics.deviceBreakdown} />
          </div>
        </div>
      </div>

      {/* Location Table */}
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Top Locations</h3>
        <LocationTable locations={analytics.topLocations} />
      </div>
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: string | number;
}

const StatCard = ({ label, value }: StatCardProps) => {
  return (
    <div className="bg-gray-50 rounded-lg p-3">
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-xl font-semibold">{value}</p>
    </div>
  );
};

export default AnalyticsDashboard;