import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './contact.scss';
import { RotateCcw, Check } from 'lucide-react';

const Envelope = ({ side = 'left' }) => {
  const gradIdPrefix = side === 'left' ? 'env-left' : side === 'right' ? 'env-right' : 'env-center';

  return (
    <div className={`envelope-wrapper envelope-${side}`}>
      <svg 
        viewBox="0 0 540 370" 
        className="envelope-svg"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main envelope base gradient */}
          <linearGradient id={`${gradIdPrefix}-base`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#FAF8FF" />
            <stop offset="100%" stopColor="#EFEBFE" />
          </linearGradient>

          {/* Left fold gradient */}
          <linearGradient id={`${gradIdPrefix}-leftFold`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F1EDFD" />
          </linearGradient>

          {/* Right fold gradient */}
          <linearGradient id={`${gradIdPrefix}-rightFold`} x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#ECE7FC" />
          </linearGradient>

          {/* Bottom fold gradient with soft ambient violet reflection */}
          <linearGradient id={`${gradIdPrefix}-bottomFold`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="70%" stopColor="#F5F2FF" />
            <stop offset="100%" stopColor="#E7E1FC" />
          </linearGradient>

          {/* Flap gradient */}
          <linearGradient id={`${gradIdPrefix}-flap`} x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="85%" stopColor="#F9F7FF" />
            <stop offset="100%" stopColor="#F1EDFE" />
          </linearGradient>

          {/* Realistic Flap Drop Shadow */}
          <filter id={`${gradIdPrefix}-flapShadow`} x="-15%" y="-15%" width="130%" height="150%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#3B15A3" floodOpacity="0.22" />
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1B065E" floodOpacity="0.10" />
          </filter>

          {/* Bottom Fold Shadow */}
          <filter id={`${gradIdPrefix}-bottomShadow`} x="-10%" y="-20%" width="120%" height="140%">
            <feDropShadow dx="0" dy="-4" stdDeviation="7" floodColor="#3B15A3" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* Envelope Base Body */}
        <rect 
          x="12" 
          y="12" 
          width="516" 
          height="346" 
          rx="18" 
          ry="18" 
          fill={`url(#${gradIdPrefix}-base)`} 
        />

        {/* Inner pocket liner subtle shadow */}
        <polygon 
          points="22,22 518,22 270,210" 
          fill="#DDD4FA" 
          opacity="0.35" 
        />

        {/* Left folded side */}
        <polygon 
          points="12,12 12,358 270,195" 
          fill={`url(#${gradIdPrefix}-leftFold)`} 
        />

        {/* Right folded side */}
        <polygon 
          points="528,12 528,358 270,195" 
          fill={`url(#${gradIdPrefix}-rightFold)`} 
        />

        {/* Bottom fold */}
        <polygon 
          points="12,358 528,358 270,172" 
          fill={`url(#${gradIdPrefix}-bottomFold)`} 
          filter={`url(#${gradIdPrefix}-bottomShadow)`} 
        />

        {/* Fold crease highlight lines */}
        <line x1="12" y1="358" x2="270" y2="172" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
        <line x1="528" y1="358" x2="270" y2="172" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />

        {/* Top triangular flap pointing downward */}
        <path 
          d="M 12 12 L 528 12 L 278 226 Q 270 232 262 226 Z" 
          fill={`url(#${gradIdPrefix}-flap)`} 
          filter={`url(#${gradIdPrefix}-flapShadow)`} 
        />

        {/* Flap top border subtle specular highlight */}
        <line x1="20" y1="12" x2="520" y2="12" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.9" />
      </svg>
    </div>
  );
};

const Contact = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);
  const [email, setEmail] = useState('');
  const [showInput, setShowInput] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Trigger animation replay
  const handleReplay = () => {
    setAnimationKey((prev) => prev + 1);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <div className="contact-page-wrapper">
      {/* Floating Butter Header */}
      <header className="butter-header">
        <div className="butter-container header-bar">
          {/* Left Pill Cluster */}
          <div className="header-left-cluster">
            <Link 
              to="/" 
              className="logo-link"
              aria-label="Trackly home"
            >
              <img 
                src="/marketing-assets/images/hero/Nav_trackly_logo.png" 
                alt="Trackly logo" 
                className="nav-trackly-logo" 
              />
            </Link>

            {/* Menu links - Contact is active */}
            <ul className="header-nav-menu">
              <li className="nav-item"><Link to="/#features">Product</Link></li>
              <li className="nav-item active"><Link to="/contact">Contact</Link></li>
              <li className="nav-item"><Link to="/#templates">Templates</Link></li>
              <li className="nav-item"><Link to="/#pricing">Pricing</Link></li>
              <li className="nav-item"><Link to="/#blog">Blog</Link></li>
            </ul>

            {/* Three Dots Toggle */}
            <button 
              className="menu-toggle-btn" 
              aria-label="Toggle menu"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <svg width="3" height="11" viewBox="0 0 3 11" fill="none">
                <circle cx="1.5" cy="1.5" r="1.5" />
                <circle cx="1.5" cy="9.5" r="1.5" />
              </svg>
            </button>

            {/* Dropdown Panel */}
            {isDropdownOpen && (
              <div className="header-dropdown-panel">
                <ul className="dropdown-menu-list">
                  <li className="dropdown-item">
                    <Link to="/#product" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Product</span>
                      <span className="item-hint">Explore features</span>
                    </Link>
                  </li>
                  <li className="dropdown-item active">
                    <Link to="/contact" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Contact</span>
                      <span className="item-hint">Join newsletter & stay updated</span>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/#templates" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Templates</span>
                      <span className="item-hint">Start with a template</span>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/#pricing" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Pricing</span>
                      <span className="item-hint">Compare our plans</span>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/login" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Login</span>
                      <span className="item-hint">Sign in to your account</span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Right Pill Cluster */}
          <div className="header-right-cluster">
            <Link to="/login" className="login-link">
              Login
            </Link>
            <button 
              className="butter-button small"
              onClick={() => navigate('/login')}
            >
              Try for free
            </button>
          </div>
        </div>
      </header>

      {/* Main Newsletter Hero Canvas */}
      <main className="contact-main">
        <section 
          key={animationKey}
          className="newsletter-card-canvas"
          aria-label="Join our newsletter"
        >
          {/* Ambient Lighting & Glow Orbs */}
          <div className="ambient-glow glow-top" />
          <div className="ambient-glow glow-top-left" />
          <div className="ambient-glow glow-top-right" />
          <div className="ambient-glow glow-bottom" />

          {/* Replay Animation Control */}
          <button 
            className="replay-anim-btn"
            onClick={handleReplay}
            title="Replay appearing animation"
            aria-label="Replay appearing animation"
          >
            <RotateCcw size={16} />
            <span>Replay Animation</span>
          </button>

          {/* Left Envelope (Desktop) */}
          <Envelope side="left" />

          {/* Right Envelope (Desktop) */}
          <Envelope side="right" />

          {/* Center Single Envelope (Mobile / Responsive) */}
          <Envelope side="center" />

          {/* Central Hero Content */}
          <div className="newsletter-content-box">
            {/* Animated Headline */}
            <h1 className="newsletter-title anim-title">
              <span className="title-row row-1">
                <span className="title-word">Join</span>{' '}
                <span className="title-word">Our</span>{' '}
                <span className="title-word">Newsletter</span>
              </span>
              <span className="title-row row-2">
                <span className="title-word">and</span>{' '}
                <span className="title-word font-stay">Stay</span>{' '}
                <span className="title-word">Updated</span>
              </span>
            </h1>

            {/* Animated Subtitle */}
            <p className="newsletter-subtitle anim-subtitle">
              Get the latest insights, updates, and strategies delivered to your inbox.
            </p>

            {/* Interactive Call to Action */}
            <div className="newsletter-cta-zone anim-cta">
              {!isSubscribed ? (
                <div className="cta-container">
                  {!showInput ? (
                    <button 
                      type="button" 
                      className="join-newsletter-btn"
                      onClick={() => setShowInput(true)}
                    >
                      <span className="btn-text">Join Newsletter</span>
                      <span className="btn-arrow" aria-hidden="true">↗</span>
                    </button>
                  ) : (
                    <form className="email-expand-form" onSubmit={handleSubscribe}>
                      <input 
                        type="email" 
                        className="email-input-field"
                        placeholder="Enter your email address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoFocus
                        required
                      />
                      <button type="submit" className="email-submit-pill">
                        <span>Subscribe</span>
                        <span className="btn-arrow">↗</span>
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                <div className="subscribed-success-pill">
                  <div className="check-badge">
                    <Check size={16} />
                  </div>
                  <span>You're subscribed! We'll keep you updated.</span>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;