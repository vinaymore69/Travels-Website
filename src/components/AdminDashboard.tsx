import React, { useState, useEffect } from 'react';
import { Eye, Users, Calendar, TrendingUp, BarChart3, RefreshCw, Shield, ArrowLeft, Activity, Globe } from 'lucide-react';
import { getVisitorStats, updateVisitorStats, resetVisitorStats, getWeeklyStats, type VisitorStats as VisitorStatsType } from '../utils/visitorCounter';

const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState<VisitorStatsType | null>(null);
  const [adminPassword, setAdminPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [weeklyData, setWeeklyData] = useState<{ date: string; visitors: number }[]>([]);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  // Secure admin password
  const ADMIN_PASSWORD = 'MKB2025@SecureAdmin!';
  const MAX_ATTEMPTS = 3;
  const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes

  useEffect(() => {
    // Check if admin is locked out
    const lockoutEnd = localStorage.getItem('admin_lockout');
    if (lockoutEnd && Date.now() < parseInt(lockoutEnd)) {
      setIsLocked(true);
      const timeLeft = parseInt(lockoutEnd) - Date.now();
      setTimeout(() => {
        setIsLocked(false);
        localStorage.removeItem('admin_lockout');
        setLoginAttempts(0);
      }, timeLeft);
    }

    // Load visitor stats
    const currentStats = getVisitorStats();
    setStats(currentStats);
    setWeeklyData(getWeeklyStats());

    // Auto-refresh stats every 30 seconds
    const interval = setInterval(() => {
      const updatedStats = getVisitorStats();
      setStats(updatedStats);
      setWeeklyData(getWeeklyStats());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isLocked) {
      alert('Admin access is temporarily locked due to multiple failed attempts. Please try again later.');
      return;
    }

    if (adminPassword === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAdminPassword('');
      setLoginAttempts(0);
      localStorage.removeItem('admin_lockout');
    } else {
      const newAttempts = loginAttempts + 1;
      setLoginAttempts(newAttempts);
      setAdminPassword('');
      
      if (newAttempts >= MAX_ATTEMPTS) {
        setIsLocked(true);
        const lockoutEnd = Date.now() + LOCKOUT_TIME;
        localStorage.setItem('admin_lockout', lockoutEnd.toString());
        alert(`Too many failed attempts. Admin access locked for 15 minutes.`);
        
        setTimeout(() => {
          setIsLocked(false);
          localStorage.removeItem('admin_lockout');
          setLoginAttempts(0);
        }, LOCKOUT_TIME);
      } else {
        alert(`Incorrect password. ${MAX_ATTEMPTS - newAttempts} attempts remaining.`);
      }
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all visitor statistics? This action cannot be undone.')) {
      resetVisitorStats();
      const newStats = getVisitorStats();
      setStats(newStats);
      setWeeklyData(getWeeklyStats());
      alert('Statistics have been reset successfully.');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminPassword('');
  };

  const goToMainSite = () => {
    window.location.href = '/';
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const calculateGrowth = () => {
    if (weeklyData.length < 2) return 0;
    const today = weeklyData[weeklyData.length - 1].visitors;
    const yesterday = weeklyData[weeklyData.length - 2].visitors;
    if (yesterday === 0) return today > 0 ? 100 : 0;
    return Math.round(((today - yesterday) / yesterday) * 100);
  };

  if (!stats) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-800"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-800 to-gold-600 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-primary-800 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-primary-800 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">MKB Tours & Travel</p>
          </div>

          {isLocked ? (
            <div className="text-center p-6 bg-red-50 rounded-lg border border-red-200">
              <div className="text-red-600 mb-2">🔒 Access Locked</div>
              <p className="text-sm text-red-700">
                Too many failed login attempts. Please try again in 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleAdminLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setAdminPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Enter secure admin password"
                  required
                  disabled={isLocked}
                />
                {loginAttempts > 0 && (
                  <p className="text-sm text-red-600 mt-1">
                    {MAX_ATTEMPTS - loginAttempts} attempts remaining
                  </p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isLocked}
                className="w-full bg-gradient-to-r from-primary-800 to-gold-500 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLocked ? 'Access Locked' : 'Access Dashboard'}
              </button>
            </form>
          )}

          <div className="mt-6 text-center">
            <button
              onClick={goToMainSite}
              className="text-primary-800 hover:text-gold-600 text-sm font-medium flex items-center justify-center space-x-1 mx-auto"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Main Site</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-800 to-gold-500 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-primary-800">Admin Dashboard</h1>
                <p className="text-sm text-gray-600">MKB Tours & Travel</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={goToMainSite}
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-800 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>View Site</span>
              </button>
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Visitors</p>
                <p className="text-3xl font-bold text-primary-800">{stats.totalVisitors.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-primary-800" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Visitors</p>
                <p className="text-3xl font-bold text-primary-800">{stats.todayVisitors}</p>
              </div>
              <div className="w-12 h-12 bg-gold-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-gold-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Weekly Average</p>
                <p className="text-3xl font-bold text-primary-800">
                  {Math.round(weeklyData.reduce((sum, day) => sum + day.visitors, 0) / 7)}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Growth Rate</p>
                <p className={`text-3xl font-bold ${calculateGrowth() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {calculateGrowth() >= 0 ? '+' : ''}{calculateGrowth()}%
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Activity className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Charts and Detailed Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Weekly Trend */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-primary-800 mb-6 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2" />
              Last 7 Days Trend
            </h3>
            <div className="space-y-4">
              {weeklyData.map((day, index) => {
                const maxVisitors = Math.max(...weeklyData.map(d => d.visitors));
                const percentage = maxVisitors > 0 ? (day.visitors / maxVisitors) * 100 : 0;
                
                return (
                  <div key={day.date} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-sm font-medium text-gray-600 w-16">
                        {formatDate(day.date)}
                      </span>
                      <div className="flex-1 bg-gray-200 rounded-full h-2 w-32">
                        <div 
                          className="bg-gradient-to-r from-primary-800 to-gold-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-sm font-bold text-primary-800 w-8 text-right">
                      {day.visitors}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* System Info */}
          <div className="bg-white rounded-xl p-6 shadow-sm border">
            <h3 className="text-lg font-semibold text-primary-800 mb-6 flex items-center">
              <Eye className="w-5 h-5 mr-2" />
              System Information
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Last Updated:</span>
                <span className="font-medium text-primary-800">
                  {new Date(stats.lastVisit).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Peak Day (This Week):</span>
                <span className="font-medium text-primary-800">
                  {Math.max(...weeklyData.map(d => d.visitors))} visitors
                </span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Data Retention:</span>
                <span className="font-medium text-primary-800">30 days</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Storage Type:</span>
                <span className="font-medium text-primary-800">Local Browser</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={handleReset}
                className="flex items-center space-x-2 text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Reset All Statistics</span>
              </button>
              <p className="text-xs text-gray-500 mt-1">
                This will permanently delete all visitor data
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;