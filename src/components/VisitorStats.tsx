import React, { useState, useEffect } from 'react';
import { Eye, Users, Calendar } from 'lucide-react';
import { getVisitorStats, updateVisitorStats, type VisitorStats as VisitorStatsType } from '../utils/visitorCounter';

const VisitorStats: React.FC = () => {
  const [stats, setStats] = useState<VisitorStatsType | null>(null);

  useEffect(() => {
    // Update visitor count on component mount
    const updatedStats = updateVisitorStats();
    setStats(updatedStats);

    // Refresh stats every minute
    const interval = setInterval(() => {
      const currentStats = getVisitorStats();
      setStats(currentStats);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!stats) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-800"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
      {/* Public Stats Display */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-primary-800 flex items-center">
            <Eye className="w-5 h-5 mr-2 text-gold-500" />
            Website Statistics
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-gold-50 rounded-xl">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-800 rounded-lg mx-auto mb-2">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-primary-800">{stats.totalVisitors.toLocaleString()}</div>
            <div className="text-xs text-gray-600">Total Visitors</div>
          </div>

          <div className="text-center p-4 bg-gradient-to-br from-gold-50 to-primary-50 rounded-xl">
            <div className="flex items-center justify-center w-10 h-10 bg-gold-500 rounded-lg mx-auto mb-2">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold text-primary-800">{stats.todayVisitors}</div>
            <div className="text-xs text-gray-600">Today's Visitors</div>
          </div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Last updated: {new Date(stats.lastVisit).toLocaleString()}
          </p>
        </div>
      </div>

    </div>
  );
};

export default VisitorStats;