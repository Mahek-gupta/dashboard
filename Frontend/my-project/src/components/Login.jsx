import React, { useState } from 'react';
import { toast } from 'react-toastify';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLogin = () => {
    if (!email || !password) {
      toast.error('Please fill in both Email and Password.');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Invalid email format.');
      return;
    }
    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);

    // Simulate async login
    setTimeout(() => {
      setLoading(false);
      toast.success('Login Successful! 🎉');

      // Wait for toast to show before navigating
      setTimeout(() => {
        onLogin();
      }, 1000);
    }, 1500);
  };

  return (
    <div className="max-w-sm mx-auto mt-24 p-6 bg-white rounded shadow">
      <h2 className="text-2xl mb-4 font-bold text-center text-blue-700">Intern Portal Login</h2>

      <input
        type="email"
        placeholder="Email"
        className="border p-2 mb-3 w-full rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <div className="relative mb-3">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Password"
          className="border p-2 w-full rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2.5 cursor-pointer text-sm text-gray-500 hover:text-blue-500"
        >
          {showPassword ? 'Hide' : 'Show'}
        </span>
      </div>

      <button
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </div>
  );
}

export default Login;
