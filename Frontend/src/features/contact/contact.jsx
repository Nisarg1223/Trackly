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
              aria-label="Butter home"
            >
              <svg viewBox="0 0 107 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  fillRule="evenodd" 
                  clipRule="evenodd" 
                  d="M63.2158 7.51925e-05C65.3404 0.212499 63.8375 3.47067 64.5237 4.62318C64.9084 5.32163 66.0044 5.30841 66.5406 5.83476C67.2713 6.55228 66.1514 7.74219 65.2672 8.27327C64.24 8.94919 63.0054 9.19812 62.1694 10.0519C61.2868 10.9309 60.4173 13.3363 61.662 13.6399C63.0663 13.7903 65.849 11.3321 67.2192 10.2987C69.362 8.57641 71.3527 7.39183 73.4511 6.99319C79.4866 6.10051 82.9032 9.70808 76.3181 14.3047C75.356 15.0993 75.7827 15.3857 76.6783 15.1626C77.5283 14.9571 78.3966 14.4523 79.116 13.9913C81.0801 12.7727 83.2159 10.7481 84.3089 8.80524C84.9126 7.83816 85.4348 6.84572 86.3712 6.09433C87.4499 5.14133 89.3205 4.78194 90.2293 5.57522C91.2566 6.30049 91.8055 7.54958 93.0072 8.08234C93.9642 8.56209 95.4298 8.60913 95.7079 9.51104C96.0948 10.4674 94.8104 12.2969 96.03 12.7443C97.4937 13.0179 98.9853 11.1698 100.512 10.7505L100.514 10.7585C101.937 10.3034 102.466 11.5089 101.528 12.7366C99.5965 15.5974 90.1735 22.1973 87.3515 19.4401C86.1588 18.4294 86.8672 16.105 86.2449 15.125C84.4394 12.9913 80.1742 18.4526 75.768 19.7756C72.9537 20.7335 70.223 21.1684 67.6184 20.7713C66.6666 20.5884 65.8293 20.1361 65.1837 19.5192C64.2008 18.5958 64.0908 17.4903 63.4269 17.4275C62.8386 17.4176 62.1019 17.9797 61.5014 18.3264C59.8235 19.3815 58.0222 20.3984 56.5443 20.901C51.9116 22.3587 55.1178 17.6209 52.8907 17.4294C52.0423 17.473 51.1128 18.2098 50.3127 18.7021C47.8476 20.2281 43.4098 22.8967 42.8473 20.5489C42.6246 19.6125 43.212 17.7394 41.8304 17.7205C40.9199 17.7693 39.9889 18.6242 39.1856 19.1858C37.2265 20.575 34.7788 22.0206 32.717 21.6279C31.7875 21.409 31.4993 20.2072 30.396 20.2814C29.8332 20.3159 29.2149 20.6193 28.6529 20.8805C26.9115 21.7399 24.9903 22.3479 23.4532 21.7692C22.5622 21.465 21.8741 20.7527 21.5335 19.9437C21.2109 19.3043 21.0677 18.5373 20.2156 18.5056C19.051 18.5363 17.6958 19.4866 16.517 19.9534C11.2367 22.2749 5.87614 22.606 0.869861 22.3387C-0.71396 22.0634 0.230931 20.2002 0.846992 19.0028C2.80866 15.0227 5.44293 9.97319 7.33292 6.41705C7.96484 5.15206 8.85681 3.9186 10.2336 3.21312C12.8593 1.86389 15.5894 1.92344 18.1361 1.92971C22.2476 2.00813 26.1868 3.55691 24.0525 7.52367C23.5309 8.5754 22.5961 9.50473 22.0263 10.5094C21.4485 11.4538 21.4778 12.8458 22.8136 11.9062C24.1483 10.8479 25.6236 9.15752 27.2297 8.95128C28.373 8.77888 29.0924 9.63424 29.0079 10.6748C29.0584 11.7628 27.7974 13.5925 28.715 14.2915C30.7895 14.9614 33.4702 10.778 35.3143 9.55496C37.6094 7.69664 40.0245 8.73002 39.1112 11.3285C38.7689 12.4871 37.1801 14.993 38.6673 14.9655C39.5761 14.8031 40.4347 14.0165 41.2193 13.4398C42.6025 12.3204 44.5172 10.7685 43.9911 9.28776C43.7788 8.77514 43.1505 8.4179 42.9038 7.9346C42.4345 7.13046 43.5021 6.24822 44.3728 5.91383C45.7617 5.32061 47.2065 5.21826 48.1527 3.9401C48.7881 3.13404 49.2211 2.15905 49.9395 1.40944C50.7613 0.461208 52.3962 -0.0891787 53.0438 0.703186C53.536 1.29634 53.4265 2.352 53.3526 3.21871C53.2903 3.94774 53.2886 4.68423 53.7074 5.22719C55.0464 6.95881 57.9077 5.12315 58.9202 3.95347C59.4851 3.35003 59.8292 2.62178 60.2856 1.96134C60.9145 0.976757 62.1255 -0.0117321 63.1748 0.000105883L63.2158 7.51925e-05Z" 
                />
              </svg>
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