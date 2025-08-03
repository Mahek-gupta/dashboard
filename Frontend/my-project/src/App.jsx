import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Leaderboard from './components/Leaderboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [page, setPage] = useState('dashboard'); // 'dashboard' or 'leaderboard'

  if (!loggedIn) {
    return (
      <>
        <Login onLogin={() => setLoggedIn(true)} />
        <ToastContainer position="top-center" />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setPage('dashboard')}
          className={`px-4 py-2 rounded ${
            page === 'dashboard' ? 'bg-blue-500 text-white' : 'bg-white border'
          }`}
        >
          Dashboard
        </button>
        <button
          onClick={() => setPage('leaderboard')}
          className={`px-4 py-2 rounded ${
            page === 'leaderboard' ? 'bg-blue-500 text-white' : 'bg-white border'
          }`}
        >
          Leaderboard
        </button>
      </div>

      {page === 'dashboard' && <Dashboard />}
      {page === 'leaderboard' && <Leaderboard />}

      {/* Toast container here too for post-login toasts */}
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
