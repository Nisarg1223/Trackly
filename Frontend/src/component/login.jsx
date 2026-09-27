import React, { useState } from 'react';
import './login.scss';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('mark.johnson@gmail.com');
  const [password, setPassword] = useState('password123');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      if (isSignUp) {
        alert(`Account created successfully!\nUsername: ${username || 'N/A'}\nEmail: ${email}`);
      } else {
        alert(`Logged in as: ${email}`);
      }
    }, 600);
  };

  const handleToggleMode = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
    // Clear or prepare fields gracefully
    if (!isSignUp && !username) {
      setUsername('mark_johnson');
    }
  };

  return (
    <div className="trackly-auth-page">
      {/* Left Pane: Brand & Geometric Emblem */}
      <section className="left-pane" aria-label="Brand Information">
        <header className="brand-header">
          <div className="brand-title">
            Trackly<span className="brand-registered">®</span>
          </div>
        </header>

        {/* Central Compass Guideline & Starburst Emblem */}
        <div className="emblem-container" aria-hidden="true">
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
            {/* Top vertical ray */}
            <line className="star-ray" x1="400" y1="378" x2="400" y2="305" />
            {/* Bottom vertical ray */}
            <line className="star-ray" x1="400" y1="422" x2="400" y2="495" />
            {/* Left horizontal ray */}
            <line className="star-ray" x1="378" y1="400" x2="305" y2="400" />
            {/* Right horizontal ray */}
            <line className="star-ray" x1="422" y1="400" x2="495" y2="400" />

            {/* Diagonal rays at 45 degrees */}
            {/* Top-Right ray */}
            <line className="star-ray" x1="423" y1="377" x2="466" y2="334" />
            {/* Bottom-Right ray */}
            <line className="star-ray" x1="423" y1="423" x2="466" y2="466" />
            {/* Bottom-Left ray */}
            <line className="star-ray" x1="377" y1="423" x2="334" y2="466" />
            {/* Top-Left ray */}
            <line className="star-ray" x1="377" y1="377" x2="334" y2="334" />

            {/* Central Angled Slash - Signature Brand Element */}
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

            <form className="login-form" onSubmit={handleSubmit}>
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
                        /* Eye Open Icon */
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
                        /* Masked / Eye Icon as seen in design */
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
              type="button"
              className={`sign-in-btn ${isSubmitting ? 'loading' : ''}`}
              onClick={handleSubmit}
              id="sign-in-submit-btn"
            >
              {isSubmitting ? '...' : isSignUp ? 'SIGN UP' : 'SIGN IN'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
