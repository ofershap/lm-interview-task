import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [stats, setStats] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statsLoading, setStatsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('');
  const [updateMessage, setUpdateMessage] = useState('');

  useEffect(() => {
    fetchStats();
    fetchUsers();
  }, [currentPage, statusFilter]);

  const fetchStats = async () => {
    setStatsLoading(true);
    try {
      const response = await fetch('/api/user-stats');
      const data = await response.json();
      setStats(data);
    } catch (error) {
      console.error('Failed to fetch stats:', error);
    } finally {
      setStatsLoading(false);
    }
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        page: currentPage,
        limit: 10
      });
      
      if (statusFilter) {
        params.append('status', statusFilter);
      }

      const response = await fetch(`/api/user-data?${params}`);
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      console.error('Failed to fetch users:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateUserStatus = async (userId, newStatus) => {
    try {
      const response = await fetch('/api/update-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, status: newStatus }),
      });

      if (response.ok) {
        const result = await response.json();
        setUpdateMessage(result.message);
        fetchUsers();
        setTimeout(() => setUpdateMessage(''), 3000);
      } else {
        const error = await response.json();
        setUpdateMessage(`Error: ${error.error}`);
        setTimeout(() => setUpdateMessage(''), 3000);
      }
    } catch (error) {
      console.error('Failed to update user:', error);
      setUpdateMessage('Failed to update user status');
      setTimeout(() => setUpdateMessage(''), 3000);
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🎯 CX Team Operations Dashboard</h1>
        <p>Customer Experience Team - Technical Operations Interface</p>
      </header>

      <div className="main-content">
        <div className="left-section">
          <div className="api-section">
            <h2>🔧 API Operations Panel</h2>
            
            {statsLoading ? (
              <div className="loading">Loading stats...</div>
            ) : stats && (
              <div className="stats-summary">
                <h3>Current Stats</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-value">{stats.totalUsers}</span>
                    <span className="stat-label">Total Users</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{stats.activeUsers}</span>
                    <span className="stat-label">Active Users</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{stats.newUsers}</span>
                    <span className="stat-label">New Users</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-value">{stats.revenue}</span>
                    <span className="stat-label">Revenue</span>
                  </div>
                </div>
              </div>
            )}

            <div className="user-management">
              <h3>User Management</h3>
              
              <div className="filters">
                <label>
                  Filter by Status:
                  <select 
                    value={statusFilter} 
                    onChange={(e) => {
                      setStatusFilter(e.target.value);
                      setCurrentPage(1);
                    }}
                  >
                    <option value="">All Users</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                    <option value="pending">Pending</option>
                  </select>
                </label>
              </div>

              {updateMessage && (
                <div className={`message ${updateMessage.includes('Error') ? 'error' : 'success'}`}>
                  {updateMessage}
                </div>
              )}

              {loading ? (
                <div className="loading">Loading users...</div>
              ) : (
                <div className="users-table">
                  <table>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Department</th>
                        <th>Join Date</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user) => (
                        <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>
                            <span className={`status status-${user.status}`}>
                              {user.status}
                            </span>
                          </td>
                          <td>{user.profile.department}</td>
                          <td>{user.joinDate}</td>
                          <td>
                            <div className="action-buttons">
                              {user.status !== 'active' && (
                                <button 
                                  onClick={() => updateUserStatus(user.id, 'active')}
                                  className="btn btn-small btn-success"
                                >
                                  Activate
                                </button>
                              )}
                              {user.status !== 'inactive' && (
                                <button 
                                  onClick={() => updateUserStatus(user.id, 'inactive')}
                                  className="btn btn-small btn-danger"
                                >
                                  Deactivate
                                </button>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              <div className="api-info">
                <h4>🐛 Backend Issues to Fix:</h4>
                <ul>
                  <li><strong>Performance:</strong> API responses are slower than expected</li>
                  <li><strong>Error Handling:</strong> Improve validation and error responses</li>
                  <li><strong>Data Structure:</strong> Review and optimize the user data format</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="widget-container">
            <h2>📊 Analytics Widget</h2>
            <p>This widget shows real-time user analytics and system metrics.</p>
            <div className="widget-info">
              <p><strong>Issue:</strong> The user list in the widget appears to have formatting problems. Names and emails are being cut off.</p>
              <p><strong>Task:</strong> Fix the CSS styling so all user information is properly visible.</p>
            </div>
            <div className="iframe-wrapper">
              <iframe
                title="User Analytics Widget"
                src="http://localhost:4000/iframe"
                className="analytics-iframe"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;