import React, { useState, useEffect } from 'react';
import { Eye, Users, Calendar, TrendingUp, BarChart3, RefreshCw } from 'lucide-react';
import { getVisitorStats, updateVisitorStats, resetVisitorStats, getWeeklyStats, type VisitorStats as VisitorStatsType } from '../utils/visitorCounter';

const VisitorStats: React.FC = () => {
  const [stats, setStats] = useState<VisitorStatsType | null>(null);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [weeklyData, setWeeklyData] = useState<{ date: string; visitors: number }[]>([]);

  // Simple admin password (in production, use proper authentication)
  const ADMIN_PASSWORD = 'mkb2025admin';

  useEffect(() => {
    // Update visitor count on component mount
    const updatedStats = updateVisitorStats();
    setStats(updatedStats);
    setWeeklyData(getWeeklyStats());

    // Refresh stats every minute
    const interval = setInterval(() => {
      const currentStats = getVisitorStats();
      setStats(currentStats);
      setWeeklyData(getWeeklyStats());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAdminPassword('');
    } else {
      alert('Incorrect password');
      setAdminPassword('');
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all visitor statistics? This action cannot be undone.')) {
      resetVisitorStats();
      const newStats = getVisitorStats();
      setStats(newStats);
      setWeeklyData(getWeeklyStats());
    }
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

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
          </h3>
          <button
            onClick={() => setShowAdmin(!showAdmin)}
            className="text-xs text-gray-500 hover:text-primary-800 transition-colors"
          >
            Admin
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

      {/* Admin Panel */}
      {showAdmin && (
        <div className="border-t border-gray-200 bg-gray-50 p-6">
          {!isAuthenticated ? (
            <form onSubmit={handleAdminLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 text-sm"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-800 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-primary-900 transition-colors"
              >
                Login
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-primary-800 flex items-center">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Admin Dashboard
                </h4>
                <button
                  onClick={() => setIsAuthenticated(false)}
                  className="text-xs text-gray-500 hover:text-primary-800"
                >
                  Logout
                </button>
              </div>

              {/* Detailed Stats */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-lg p-4 border">
                  <h5 className="font-medium text-gray-800 mb-3 flex items-center">
                    <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                    Last 7 Days
                  </h5>
                  <div className="space-y-2">
                    {weeklyData.map((day, index) => (
                      <div key={day.date} className="flex justify-between items-center text-sm">
                        <span className="text-gray-600">{formatDate(day.date)}</span>
                        <div className="flex items-center">
                          <div 
                            className="bg-primary-200 h-2 rounded mr-2" 
                            style={{ width: `${Math.max(day.visitors * 10, 10)}px` }}
                          ></div>
                          <span className="font-medium text-primary-800 w-8 text-right">
                            {day.visitors}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 border">
                  <h5 className="font-medium text-gray-800 mb-3">Quick Stats</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average daily visitors:</span>
                      <span className="font-medium">
                        {Math.round(weeklyData.reduce((sum, day) => sum + day.visitors, 0) / 7)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Peak day this week:</span>
                      <span className="font-medium">
                        {Math.max(...weeklyData.map(d => d.visitors))} visitors
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reset Button */}
              <div className="pt-4 border-t border-gray-200">
                <button
                  onClick={handleReset}
                  className="flex items-center space-x-2 text-red-600 hover:text-red-700 text-sm font-medium transition-colors"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Reset All Statistics</span>
                </button>
                <p className="text-xs text-gray-500 mt-1">
                  This will permanently delete all visitor data
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default VisitorStats;