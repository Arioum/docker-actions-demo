import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const handleFetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user");
      setUsers(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching users:', error);
      setError('Failed to fetch users. Please try again later.');
    }
  };

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div className="container">
      <h1>Users</h1>
      <button onClick={handleFetchUsers}>Fetch Users</button>
      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Username: {user.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
}