import React, { useState, useEffect } from 'react';
import realImage1 from '../../assets/real_image_1.png';
import realImage2 from '../../assets/real_image_2.png';
import realImage3 from '../../assets/real_image_3.png';
import useAuth from '../hooks/useAuth.js';
import './login.scss';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('mark.johnson@gmail.com');
  const [password, setPassword] = useState('password123');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [authSuccess, setAuthSuccess] = useState('');
  // heroStage: 0 = Emblem (0-3s), 1 = real_image_1 (3-6s), 2 = real_image_2 (6-9s), 3 = real_image_3 (9-12s)
  const [heroStage, setHeroStage] = useState(0);

  const { handleLogin, handleRegister, user, loading, error, clearError } = useAuth();

  useEffect(() => {
    // Cycles every 3 seconds:
    // 0: First thing (initial emblem & loading style) (3s)
    // 1: 1st image (real_image_1) (3s)
    // 2: 2nd image (real_image_2) (3s)
    // 3: 3rd image (real_image_3) (3s)
    // -> Continues smoothly with 3s difference between each stage
    const interval = setInterval(() => {
      setHeroStage((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    setAuthSuccess('');

    if (isSignUp) {
      const data = await handleRegister({
        email,
        password,
        username,
      });
      if (data) {
        setAuthSuccess(`Account created successfully! Welcome, ${data.user?.username || username}!`);
      }
    } else {
      const data = await handleLogin({
        email,
        password,
      });
      if (data) {
        setAuthSuccess(`Welcome back, ${data.user?.username || email}!`);
      }
    }
  };

  const handleToggleMode = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
    setAuthSuccess('');
    clearError?.();
    if (!isSignUp && !username) {
      setUsername('mark_johnson');
    }
  };

  return (
    <div className="trackly-auth-page">
      {/* Left Pane: Brand & Geometric Emblem / Transitioned Hero Image */}
      <section className="left-pane" aria-label="Brand Information">
        {/* Dynamic Hero Image 1 (appears at 3s) */}
        <div className={`hero-image-layer image-1 ${heroStage >= 1 ? 'visible' : ''}`}>
          <img
            src={realImage1}
            alt="Trackly Website Analysis Visual 1"
            className="hero-image"
          />
          <div className="hero-image-overlay" />
        </div>

        {/* Dynamic Hero Image 2 (appears at 6s, 3s after real_image_1) */}
        <div className={`hero-image-layer image-2 ${heroStage >= 2 ? 'visible' : ''}`}>
          <img
            src={realImage2}
            alt="Trackly Website Analysis Visual 2"
            className="hero-image"
          />
          <div className="hero-image-overlay" />
        </div>

        {/* Dynamic Hero Image 3 (appears at 9s, 3s after real_image_2) */}
        <div className={`hero-image-layer image-3 ${heroStage >= 3 ? 'visible' : ''}`}>
          <img
            src={realImage3}
            alt="Trackly Website Analysis Visual 3"
            className="hero-image"
          />
          <div className="hero-image-overlay" />
        </div>

        <header className="brand-header">
          <div className="brand-title">
            Trackly<span className="brand-registered">®</span>
          </div>
        </header>

        {/* Central Compass Guideline & Starburst Emblem (fades out when image arrives) */}
        <div
          className={`emblem-container ${heroStage >= 1 ? 'fade-out' : ''}`}
          aria-hidden="true"
        >
          <svg
            className="emblem-svg"
            viewBox="0 0 800 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Fine Hairline Guidelines */}
            <line className="guide-line" x1="0" y1="400" x2="800" y2="400" />
            <line className="guide-line" x1="400" y1="0" x2="400" y2="800" />
            <line className="guide-line" x1="0" y1="0" x2="800" y2="800" />
            <line className="guide-line" x1="0" y1="800" x2="800" y2="0" />

            {/* 8-Point Compass Star Rays */}
            <line className="star-ray" x1="400" y1="378" x2="400" y2="305" />
            <line className="star-ray" x1="400" y1="422" x2="400" y2="495" />
            <line className="star-ray" x1="378" y1="400" x2="305" y2="400" />
            <line className="star-ray" x1="422" y1="400" x2="495" y2="400" />

            <line className="star-ray" x1="423" y1="377" x2="466" y2="334" />
            <line className="star-ray" x1="423" y1="423" x2="466" y2="466" />
            <line className="star-ray" x1="377" y1="423" x2="334" y2="466" />
            <line className="star-ray" x1="377" y1="377" x2="334" y2="334" />

            {/* Central Angled Slash */}
            <line className="center-slash" x1="389" y1="411" x2="411" y2="389" />
          </svg>
        </div>

        <footer className="brand-footer">
          <span className="copyright-text">
            © Trackly 2026. All rights reserved.
          </span>
        </footer>
      </section>

      {/* Right Pane: Auth Card */}
      <section className="right-pane" aria-label="Authentication Panel">
        <div className="login-card">
          {/* Top navigation link */}
          <div className="card-top">
            <button
              type="button"
              className="create-account-link"
              onClick={handleToggleMode}
              id="auth-toggle-mode-btn"
            >
              {isSignUp ? 'Have an account? Sign in' : 'Create an account'}
            </button>
          </div>

          {/* Main Card Content */}
          <div className="card-body">
            <h1 className="login-heading">
              {isSignUp ? 'Create Account' : 'Login'}
            </h1>

            {/* Error Banner */}
            {error && (
              <div className="auth-alert auth-error" role="alert">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            {/* Success Banner */}
            {authSuccess && (
              <div className="auth-alert auth-success" role="status">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>{authSuccess}</span>
              </div>
            )}

            {/* Already Authenticated Info */}
            {user && !authSuccess && !error && (
              <div className="auth-alert auth-success" role="status">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Logged in as {user.username || user.email}</span>
              </div>
            )}

            <form className="login-form" id="auth-form" onSubmit={handleSubmit}>
              <div className={`form-grid ${isSignUp ? 'is-signup' : ''}`}>
                {/* When in Sign Up Mode: Username field is shown */}
                {isSignUp && (
                  <div className="field-group">
                    <label className="field-label" htmlFor="username-input">
                      Username
                    </label>
                    <div className="input-underline-wrapper">
                      <input
                        id="username-input"
                        type="text"
                        className="clean-input"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="mark_johnson"
                        required
                        autoComplete="username"
                        autoFocus
                      />
                    </div>
                  </div>
                )}

                {/* Email Column */}
                <div className="field-group">
                  <label className="field-label" htmlFor="email-input">
                    Email
                  </label>
                  <div className="input-underline-wrapper">
                    <input
                      id="email-input"
                      type="email"
                      className="clean-input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="mark.johnson@gmail.com"
                      required
                      autoComplete="email"
                    />
                  </div>
                  {/* Remember me (shown in Login mode) */}
                  {!isSignUp && (
                    <div className="field-sub-action">
                      <button
                        type="button"
                        className="remember-me-toggle"
                        onClick={() => setRememberMe(!rememberMe)}
                        aria-pressed={rememberMe}
                      >
                        <span className={`custom-checkbox ${rememberMe ? 'checked' : ''}`}>
                          <svg viewBox="0 0 12 12">
                            <polyline points="2.5 6 4.8 8.5 9.5 3.5" />
                          </svg>
                        </span>
                        <span className="remember-label">Remember me</span>
                      </button>
                    </div>
                  )}
                </div>

                {/* Password Column */}
                <div className={`field-group ${isSignUp ? 'span-full' : ''}`}>
                  <label className="field-label" htmlFor="password-input">
                    Password
                  </label>
                  <div className="input-underline-wrapper">
                    <input
                      id="password-input"
                      type={showPassword ? 'text' : 'password'}
                      className="clean-input password-input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••"
                      required
                      autoComplete={isSignUp ? 'new-password' : 'current-password'}
                    />
                    <button
                      type="button"
                      className="input-action-btn"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="3.5" />
                          <path d="M12 5C7 5 2.73 8.11 1 12.5c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5C21.27 8.11 17 5 12 5z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {/* Forgot link (shown in Login mode) */}
                  {!isSignUp && (
                    <div className="field-sub-action">
                      <a
                        href="#forgot"
                        className="forgot-password-link"
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Password reset link has been sent to your email.');
                        }}
                      >
                        Forgot?
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>

          {/* Bottom Card Action: Sign In / Sign Up Button */}
          <div className="card-bottom">
            <button
              type="submit"
              form="auth-form"
              className={`sign-in-btn ${loading ? 'loading' : ''}`}
              onClick={handleSubmit}
              disabled={loading}
              id="sign-in-submit-btn"
            >
              {loading ? '...' : isSignUp ? 'SIGN UP' : 'SIGN IN'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
