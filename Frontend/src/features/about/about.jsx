import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './about.css';

const About = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="about-canvas-wrapper">
      {/* Subtle Ambient Twinkling Stars Overlay */}
      <div className="starlight-overlay" aria-hidden="true">
        <span className="star-sparkle star-1" />
        <span className="star-sparkle star-2" />
        <span className="star-sparkle star-3" />
        <span className="star-sparkle star-4" />
        <span className="star-sparkle star-5" />
        <span className="star-sparkle star-6" />
        <span className="star-sparkle star-7" />
        <span className="star-sparkle star-8" />
      </div>

      {/* Top Header / Navigation Bar */}
      <header className="about-header">
        <div className="about-nav-container">
          {/* Brand Logo */}
          <Link to="/" className="about-brand-logo" aria-label="Lunora Home">
            <span className="brand-name">Trackly</span>
            <sup className="brand-reg">®</sup>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="about-nav-menu" aria-label="Main Navigation">
            <Link to="/" className="nav-item">Home</Link>
            <a href="/#features" className="nav-item">Product</a>
            <Link to="/about" className="nav-item active" aria-current="page">About</Link>
            <a href="/#blog" className="nav-item">Blog</a>
            <Link to="/contact" className="nav-item">Contact</Link>
          </nav>

          {/* Top Right Action Button */}
          <div className="about-nav-action">
            <button
              type="button"
              className="about-pill-btn nav-btn"
              onClick={() => navigate('/login')}
              id="about-nav-cta"
            >
              Start Creating
            </button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              className="about-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={mobileMenuOpen}
            >
              <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
              <span className={`hamburger-bar ${mobileMenuOpen ? 'open' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="about-mobile-menu">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <a href="/#features" onClick={() => setMobileMenuOpen(false)}>Product</a>
            <Link to="/about" className="active" onClick={() => setMobileMenuOpen(false)}>About</Link>
            <a href="/#blog" onClick={() => setMobileMenuOpen(false)}>Blog</a>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <button
              type="button"
              className="about-pill-btn mobile-cta-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                navigate('/login');
              }}
            >
              Start Creating
            </button>
          </div>
        )}
      </header>

      {/* Main Hero Section */}
      <main className="about-hero-stage">
        <div className="about-hero-box">
          {/* Main Editorial Headline */}
          <h1 className="about-hero-headline">
            Where ideas bloom under starlight.
          </h1>

          {/* Subtitle Copy */}
          <p className="about-hero-subtext">
            We're building tools for thinkers, dreamers, and makers. In a world of noise, we design digital space for deep focus and meaningful creation.
          </p>

          {/* Center Call to Action Pill Button */}
          <div className="about-hero-action">
            <button
              type="button"
              className="about-pill-btn hero-cta-btn"
              onClick={() => navigate('/login')}
              id="about-hero-cta"
            >
              Start Creating
            </button>
          </div>
        </div>
      </main>

      {/* Spacer to preserve balance above bottom artwork */}
      <div className="about-bottom-anchor" aria-hidden="true" />
    </div>
  );
};

export default About;