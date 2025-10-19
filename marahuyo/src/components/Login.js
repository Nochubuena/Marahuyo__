import { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation - for demo purposes, accept any non-empty credentials
    if (credentials.username.trim() && credentials.password.trim()) {
      // Simulate successful login
      onLogin(credentials.username);
      setError('');
    } else {
      setError('Please enter both username and password');
    }
  };

  return (
    <div className="login-page">
      {/* Header - Dark Blue Bar with Logo */}
      <div className="header">
        {/* Logo - Marahuyo icon image */}
        <button
          className="logo logo-button"
          aria-label="Home"
          type="button"
        >
          <img src="/images/marahuyo-logo.png" alt="Marahuyo" className="header-logo-img" />
        </button>
      </div>

      {/* Main Content */}
      <div className="login-content">
        {/* Crumpled Paper Background */}
        <div className="crumpled-paper-bg">
          <img src="/images/bnb-1-7.png" className="crumpled-texture" alt="crumpled paper" />
        </div>

        {/* Login Form */}
        <div className="login-form-container">
          <div className="login-form">
            <h1 className="login-title">Welcome to Marahuyo</h1>
            <p className="login-subtitle">Sign in to your account</p>
            
            <form onSubmit={handleSubmit} className="form">
              <div className="form-group">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your username"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleInputChange}
                  className="form-input"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              {error && <div className="error-message">{error}</div>}
              
              <button type="submit" className="login-button">
                Sign In
              </button>
            </form>
            
            <div className="login-footer">
              <p className="demo-note">
                Demo: Enter any username and password to continue
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

