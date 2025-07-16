// Visitor counter utility functions
export interface VisitorStats {
  totalVisitors: number;
  todayVisitors: number;
  lastVisit: string;
  dailyStats: { [date: string]: number };
}

const STORAGE_KEY = 'mkb_visitor_stats';
const SESSION_KEY = 'mkb_current_session';

export const getVisitorStats = (): VisitorStats => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading visitor stats:', error);
  }
  
  return {
    totalVisitors: 0,
    todayVisitors: 0,
    lastVisit: new Date().toISOString(),
    dailyStats: {}
  };
};

export const updateVisitorStats = (): VisitorStats => {
  const today = new Date().toISOString().split('T')[0];
  const currentSession = sessionStorage.getItem(SESSION_KEY);
  
  // If this is a new session, count as a new visitor
  if (!currentSession) {
    sessionStorage.setItem(SESSION_KEY, 'active');
    
    const stats = getVisitorStats();
    const updatedStats: VisitorStats = {
      totalVisitors: stats.totalVisitors + 1,
      todayVisitors: (stats.dailyStats[today] || 0) + 1,
      lastVisit: new Date().toISOString(),
      dailyStats: {
        ...stats.dailyStats,
        [today]: (stats.dailyStats[today] || 0) + 1
      }
    };
    
    // Keep only last 30 days of daily stats
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    Object.keys(updatedStats.dailyStats).forEach(date => {
      if (new Date(date) < thirtyDaysAgo) {
        delete updatedStats.dailyStats[date];
      }
    });
    
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedStats));
    } catch (error) {
      console.error('Error saving visitor stats:', error);
    }
    
    return updatedStats;
  }
  
  return getVisitorStats();
};

export const resetVisitorStats = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    sessionStorage.removeItem(SESSION_KEY);
  } catch (error) {
    console.error('Error resetting visitor stats:', error);
  }
};

export const getWeeklyStats = (): { date: string; visitors: number }[] => {
  const stats = getVisitorStats();
  const result = [];
  
  for (let i = 6; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toISOString().split('T')[0];
    
    result.push({
      date: dateStr,
      visitors: stats.dailyStats[dateStr] || 0
    });
  }
  
  return result;
};