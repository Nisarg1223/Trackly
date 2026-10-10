import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './home.scss';
import { 
  Play, 
  Pause, 
  ChevronRight, 
  ChevronLeft, 
  Sliders, 
  Code2, 
  Sparkles, 
  Layers, 
  Copy, 
  Check, 
  Maximize2, 
  Volume2, 
  Compass, 
  ExternalLink 
} from 'lucide-react';

// Brand logos for infinite marquee ticker
const BRAND_LOGOS = [
  { name: 'Airbnb', url: 'https://images.prismic.io/butter/SyXLRfyWIbAg-Dt3_Airbnb%402x.png?auto=format,compress&w=400' },
  { name: 'Netflix', url: 'https://images.prismic.io/butter/CQ-oI7WPeEVGXKHA_Netflix%402x.png?auto=format,compress&w=400' },
  { name: 'Canva', url: 'https://images.prismic.io/butter/fkfx5Io_hlXmXOOI_Canva%402x.png?auto=format,compress&w=400' },
  { name: 'Sony Music', url: 'https://images.prismic.io/butter/Sb944h83XoFOjaXO_SonyMusic%402x.png?auto=format,compress&w=400' },
  { name: 'AG1', url: 'https://images.prismic.io/butter/5MbhyYR47QuxSYyR_AG1%402x.png?auto=format,compress&w=400' },
  { name: 'Pinterest', url: 'https://images.prismic.io/butter/tHtvbGUijZYmCbzG_Pinterest%402x.png?auto=format,compress&w=400' },
  { name: 'Urban Outfitters', url: 'https://images.prismic.io/butter/wx2nv3tE_TKElZSa_UrbanOutfitters%402x.png?auto=format,compress&w=400' },
  { name: 'SpaceX', url: 'https://images.prismic.io/butter/3yZ3xKYD7ub5bmT9_SpaceX%402x.png?auto=format,compress&rect=0,0,2460,304&w=400&h=304' },
  { name: 'Lyft', url: 'https://images.prismic.io/butter/C6POX-EagSkSh97g_Lyft%402x.png?auto=format,compress&w=400' },
  { name: 'Crocs', url: 'https://images.prismic.io/butter/YJNLsuV8hw-gbuhN_crocs.png?auto=format,compress&w=400' },
  { name: 'Seed', url: 'https://images.prismic.io/butter/qHLba_9cNvNRohAS_seed.png?auto=format,compress&w=400' },
  { name: 'Mejuri', url: 'https://images.prismic.io/butter/xV5V9H1q9NDXh4WF_Mejuri%402x.png?auto=format,compress&w=400' },
  { name: 'DoorDash', url: 'https://images.prismic.io/butter/9zJV_7SalEe9gVlK_DoorDash%402x.png?auto=format,compress&w=400' },
  { name: 'Mercedes', url: 'https://images.prismic.io/butter/dafJmjMyqF3TPR9X_Mercedes%402x.png?auto=format,compress&w=400' },
  { name: 'Disney', url: 'https://images.prismic.io/butter/-ygmWmGmkixktt9k_Disney%402x.png?auto=format,compress&w=400' },
  { name: 'Eight Sleep', url: 'https://images.prismic.io/butter/DftE5O9-4yahkr8K_EightSleep%402x.png?auto=format,compress&rect=0,0,1871,754&w=400&h=754' },
  { name: 'The Atlantic', url: 'https://images.prismic.io/butter/jeOb4xnJBV-iwrn7_TheAtlantic%402x.png?auto=format,compress&w=400' },
  { name: 'Ritual', url: 'https://images.prismic.io/butter/_iFcPa4PtGRUyXuG_ritual.png?auto=format,compress&w=400' },
  { name: 'IDEO', url: 'https://images.prismic.io/butter/LNko39lJYK8PUaDr_ideo.png?auto=format,compress&w=400' },
  { name: 'Hims & Hers', url: 'https://images.prismic.io/butter/zTjuNiVxFIhx1mGM_HimsandHers%402x.png?auto=format,compress&w=400' },
  { name: 'Harrys', url: 'https://images.prismic.io/butter/aBXO6UdwA2OEEPC5_Harrys%402x.png?auto=format,compress&rect=0,0,4611,819&w=400&h=819' },
  { name: 'Gruns', url: 'https://images.prismic.io/butter/tdw589YKHmV1J-Ci_Gruns%402x.png?auto=format,compress&w=400' },
  { name: 'Olipop', url: 'https://images.prismic.io/butter/CBlDwN_6K9XXS5Ms_Olipop%402x.png?auto=format,compress&w=400' },
  { name: 'Olly', url: 'https://images.prismic.io/butter/txkl10AEL2avqgh1_Olly%402x.png?auto=format,compress&w=400' }
];

// Gallery Templates
const GALLERY_TEMPLATES = [
  { id: '1', title: 'Fit for Any Forecast', tag: 'Apparel', image: 'https://images.prismic.io/butter/hnZK2qSvzWvAhhjc_fit-for-any-forecast-media.jpg?auto=format,compress' },
  { id: '2', title: 'Watermelon Rind', tag: 'Beauty', image: 'https://images.prismic.io/butter/D9dU7YNg7hYRDdI7_watermelon-rind-media.jpg?auto=format,compress' },
  { id: '3', title: "Soda's Back, but Better", tag: 'Beverage', image: 'https://images.prismic.io/butter/G_p3EqtwDFDdz9hx_sodas-back-but-better-media.jpg?auto=format,compress' },
  { id: '4', title: 'Gentle Exfoliant', tag: 'Beauty', image: 'https://images.prismic.io/butter/U4oibcgFTMkNn-oE_gentle-exfoliant-media.jpg?auto=format,compress' },
  { id: '5', title: 'Acne Care', tag: 'Beauty', image: 'https://images.prismic.io/butter/2A-_ysA6k6gHwphg_acne-care-media.jpg?auto=format,compress' },
  { id: '6', title: 'One Platform', tag: 'Software / Apps', image: 'https://images.prismic.io/butter/xSNKuiOimMBJ6mvY_one-platform-media.jpg?auto=format,compress' },
  { id: '7', title: 'Running Kit', tag: 'Apparel', image: 'https://images.prismic.io/butter/JtH9gy16tLxWhyX3_running-kit-media.jpg?auto=format,compress' },
  { id: '8', title: 'Mix & Match Flavors', tag: 'Food & Drink', image: 'https://images.prismic.io/butter/z55PlT6v9bPb8eEd_mix-match-flavors-media.jpg?auto=format,compress' }
];

// Creator Packs Data
const CREATORS = [
  {
    name: 'Justified Studio',
    subtitle: 'Branded kinetic packs with custom typographic shaders.',
    banner: 'https://images.prismic.io/butter/WOPQzKXReh1FTo5W_justified-justified-studio-media-1.jpg?auto=format,compress',
    thumbs: [
      'https://images.prismic.io/butter/CQxRrKkXTLLG22hz_justified-justified-studio-media-thumb-1.jpg?auto=format,compress',
      'https://images.prismic.io/butter/yJIsf4dnRnofb2fZ_justified-justified-studio-media-thumb-2.jpg?auto=format,compress',
      'https://images.prismic.io/butter/Hjf76XbvcckhE4BA_justified-justified-studio-media-thumb-3.jpg?auto=format,compress'
    ]
  },
  {
    name: 'Dedcool ilovecreatives',
    subtitle: 'Editorial campaign blocks built for bold digital identity.',
    banner: 'https://images.prismic.io/butter/dp6Q6--TKQusIsKV_dedcool-ilovecreatives-media-1.jpg?auto=format,compress',
    thumbs: [
      'https://images.prismic.io/butter/Bfd2RVJLtUn0GCMd_dedcool-ilovecreatives-media-thumb-1.jpg?auto=format,compress',
      'https://images.prismic.io/butter/NBRAvsc-gXZhijF1_dedcool-ilovecreatives-media-thumb-2.jpg?auto=format,compress',
      'https://images.prismic.io/butter/wYo_Blph_cPqae8w_dedcool-ilovecreatives-media-thumb-3.jpg?auto=format,compress'
    ]
  },
  {
    name: 'Sad Wild Thing Kiel Dangler',
    subtitle: 'Liquid 3D extrusions and reactive audio visualizers.',
    banner: 'https://images.prismic.io/butter/bZ9lNScmE93jIeHV_sad-wild-thing-kiel-dangler-media-1.jpg?auto=format,compress',
    thumbs: [
      'https://images.prismic.io/butter/U6QeHJKmW_GfLiP4_sad-wild-thing-kiel-dangler-media-thumb-1.jpg?auto=format,compress',
      'https://images.prismic.io/butter/wDJjV20bcXI6d5A9_sad-wild-thing-kiel-dangler-media-thumb-2.jpg?auto=format,compress',
      'https://images.prismic.io/butter/xsitg532VXB8SSJo_sad-wild-thing-kiel-dangler-media-thumb-3.jpg?auto=format,compress'
    ]
  }
];

const Home = () => {
  const navigate = useNavigate();

  // Navigation Dropdown State
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Hero Keychain Swing Physics State
  const [keychainAngle, setKeychainAngle] = useState(0);
  const [keychainVel, setKeychainVel] = useState(0);
  const [isDraggingKeychain, setIsDraggingKeychain] = useState(false);
  const lastMouseX = useRef(0);

  // Timeline Scrubber State
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrubberPos, setScrubberPos] = useState(38); // percentage

  // Story One - Active Text Effect
  const [activeEffect, setActiveEffect] = useState('inflate'); // 'glow', 'inflate', 'focus', 'halftone'

  // Story Two - Customizer Sliders
  const [sliderWarp, setSliderWarp] = useState(65);
  const [sliderExtrude, setSliderExtrude] = useState(42);
  const [sliderAberration, setSliderAberration] = useState(28);

  // Story Three - Toolkit Category Filter
  const [toolkitFilter, setToolkitFilter] = useState('all');

  // Features Highlight Tab
  const [highlightTab, setHighlightTab] = useState(0); // 0: Remix, 1: Describe, 2: Code

  // Selected Creator Pack
  const [selectedCreator, setSelectedCreator] = useState(0);
  const [selectedCreatorThumb, setSelectedCreatorThumb] = useState(0);

  // Gallery Carousel Ref for smooth scrolling
  const carouselTrackRef = useRef(null);

  // Canvas visualizer ref
  const canvasRef = useRef(null);

  // Cursor badge helper no-op
  const setCursorBadge = () => {};

  // Mouse Listener for Hero Keychain Physics
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate force on the hanging keychain charms
      const dx = e.clientX - lastMouseX.current;
      lastMouseX.current = e.clientX;

      // Add gentle swing momentum when moving mouse over hero area
      if (e.clientY < 650) {
        setKeychainVel((prev) => prev + dx * 0.045);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Keychain Pendulum Physics Simulation
  useEffect(() => {
    let animFrame;
    let angle = 0;
    let vel = 0;

    const tick = () => {
      // Harmonic spring force towards center + subtle natural ambient sway
      const ambientSway = Math.sin(Date.now() * 0.0018) * 0.45;
      const spring = -0.045 * angle;
      const damping = 0.94;

      vel = (vel + spring) * damping;
      angle += vel;

      setKeychainAngle(angle + ambientSway);
      animFrame = requestAnimationFrame(tick);
    };

    animFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrame);
  }, []);

  // Timeline Playhead Scrubber Auto-advance
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setScrubberPos((prev) => (prev >= 98 ? 2 : prev + 0.35));
    }, 40);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Procedural Canvas Animation for Story Two Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const render = () => {
      t += 0.03;
      const w = (canvas.width = 400);
      const h = (canvas.height = 240);

      ctx.fillStyle = '#0F0F0F';
      ctx.fillRect(0, 0, w, h);

      // Draw responsive visual waves based on slider parameters
      const numLines = 14;
      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        ctx.strokeStyle = i % 2 === 0 ? '#4DC5E5' : '#E9D352';
        ctx.lineWidth = 2.5;

        for (let x = 0; x < w; x += 6) {
          const freq = (sliderAberration / 100) * 0.03 + 0.01;
          const amp = (sliderExtrude / 100) * 45 + 10;
          const phase = i * 0.35 + t + (sliderWarp / 100) * 2;
          const y = h / 2 + Math.sin(x * freq + phase) * amp * Math.cos(t * 0.5 + i * 0.2);

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [sliderWarp, sliderExtrude, sliderAberration]);

  // Scroll Gallery Carousel
  const scrollGallery = (direction) => {
    if (!carouselTrackRef.current) return;
    const scrollAmount = direction === 'left' ? -380 : 380;
    carouselTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Format Timecode string
  const formatTimecode = (pct) => {
    const totalSeconds = (pct / 100) * 95;
    const mins = Math.floor(totalSeconds / 60);
    const secs = Math.floor(totalSeconds % 60);
    const frames = Math.floor((totalSeconds % 1) * 30);
    return `00:0${mins}:${secs < 10 ? '0' : ''}${secs}:${frames < 10 ? '0' : ''}${frames}`;
  };

  return (
    <div className="butter-page-wrapper">
      {/* Floating Header & Navigation */}
      <header className="butter-header">
        <div className="butter-container header-bar">
          {/* Left Pill Cluster */}
          <div className="header-left-cluster">
            <a 
              href="/" 
              className="logo-link"
              aria-label="Trackly home"
              onMouseEnter={() => setCursorBadge('Trackly')}
              onMouseLeave={() => setCursorBadge(null)}
            >
              <img 
                src="/marketing-assets/images/hero/Nav_trackly_logo.png" 
                alt="Trackly logo" 
                className="nav-trackly-logo" 
              />
            </a>

            {/* Menu links */}
            <ul className="header-nav-menu">
              <li className="nav-item"><a href="#features">Product</a></li>
              <li className="nav-item"><Link to="/contact">Contact</Link></li>
              <li className="nav-item"><a href="#templates">Templates</a></li>
              <li className="nav-item"><a href="#pricing">Pricing</a></li>
              <li className="nav-item"><a href="#blog">Blog</a></li>
            </ul>

            {/* Three Dots Toggle */}
            <button 
              className="menu-toggle-btn" 
              aria-label="Toggle menu"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              onMouseEnter={() => setCursorBadge(isDropdownOpen ? 'Close' : 'Menu')}
              onMouseLeave={() => setCursorBadge(null)}
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
                    <a href="#product" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Product</span>
                      <span className="item-hint">Explore features</span>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/contact" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Contact</span>
                      <span className="item-hint">Join newsletter & get in touch</span>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <a href="#templates" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Templates</span>
                      <span className="item-hint">Start with a template</span>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <a href="#pricing" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Pricing</span>
                      <span className="item-hint">Compare our plans</span>
                    </a>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/login" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Login</span>
                      <span className="item-hint">Sign in to your account</span>
                    </Link>
                  </li>
                </ul>

                <div className="dropdown-footer-socials">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
                  <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
                  <a href="#blog">Blog</a>
                </div>
              </div>
            )}
          </div>

          {/* Right Pill Cluster */}
          <div className="header-right-cluster">
            <Link 
              to="/login" 
              className="login-link"
              onMouseEnter={() => setCursorBadge('Login')}
              onMouseLeave={() => setCursorBadge(null)}
            >
              Login
            </Link>
            <button 
              className="butter-button small"
              onClick={() => navigate('/login')}
              onMouseEnter={() => setCursorBadge('✨ Free')}
              onMouseLeave={() => setCursorBadge(null)}
            >
              Try for free
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section">
        {/* Hanging Keychain Charms Rig */}
        <div 
          className="hero-keychain-container"
          onMouseDown={() => setIsDraggingKeychain(true)}
          onMouseUp={() => setIsDraggingKeychain(false)}
          onMouseEnter={() => setCursorBadge('Swing me')}
          onMouseLeave={() => {
            setIsDraggingKeychain(false);
            setCursorBadge(null);
          }}
        >
          {/* Fallback image with natural tilt */}
          <img 
            src="/marketing-assets/images/hero/hero_fallback_1.png" 
            alt="Keychain with Trackly branded charms"
            className="hero-fallback-img"
            style={{
              transform: `translateX(-50%) rotate(${keychainAngle}deg)`,
              transformOrigin: 'top center',
              transition: isDraggingKeychain ? 'none' : 'transform 0.15s ease-out'
            }}
          />
        </div>

        {/* Hero Central Content */}
        <div className="butter-container hero-content">
          <h1 className="heading-hero hero-title">
            Engineered for Creativity
          </h1>
          <div className="hero-subcontent">
            <p className="heading-3 hero-subtitle">
             Trackly, the analytics tool built for deeper insights
            </p>
            <button 
              className="butter-button"
              onClick={() => navigate('/login')}
              onMouseEnter={() => setCursorBadge('Start')}
              onMouseLeave={() => setCursorBadge(null)}
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* INFINITE BRANDS MARQUEE (TICKER) */}
      <section className="ticker-section">
        <p className="ticker-caption text-interface">
          Teams from top brands and agencies build with Butter
        </p>
        <div className="ticker-track-wrapper">
          <div className="ticker-track">
            {/* Duplicated for seamless 100% infinite loop */}
            {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, idx) => (
              <div key={idx} className="logo-item" title={brand.name}>
                <img src={brand.url} alt={brand.name} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATEMENT & INTERACTIVE TIMELINE */}
      <section className="statement-timeline-section" id="product">
        <div className="butter-container">
          <div className="statement-quote-box">
            <h2 className="heading-1 statement-h2">
              Butter is the first video editor
              <span className="squircle-badge">
                <img src="https://images.prismic.io/butter/akI1clbRV8_Qf9Rj_statement-1.png?auto=format,compress" alt="Block" />
              </span>
              where creatives can build and remix
              <span className="squircle-badge">
                <img src="https://images.prismic.io/butter/F5O_Azf0kq0eWk7m_statement-media-2.jpg?auto=format,compress" alt="Block" />
              </span>
              custom design tools right on timeline.
              <span className="squircle-badge">
                <img src="https://images.prismic.io/butter/yjCrPlOIq3k-M9oc_statement-media-4.jpg?auto=format,compress" alt="Block" />
              </span>
            </h2>
          </div>

          {/* Interactive Timeline Mockup */}
          <div className="timeline-mockup-wrapper">
            {/* Top Toolbar */}
            <div className="timeline-editor-header">
              <div className="header-title-group">
                <span className="status-dot"></span>
                <span className="project-name">Summer_Campaign_Hero_Cut_v04.butter</span>
              </div>
              <div className="header-controls">
                <button 
                  className="play-btn" 
                  onClick={() => setIsPlaying(!isPlaying)}
                  onMouseEnter={() => setCursorBadge(isPlaying ? 'Pause' : 'Play')}
                  onMouseLeave={() => setCursorBadge(null)}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>
                <span className="timecode">{formatTimecode(scrubberPos)}</span>
                <span>4K • 60 FPS</span>
              </div>
            </div>

            {/* Visual Timeline Tracks & Scrubber */}
            <div 
              className="timeline-visual-area"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const clickX = e.clientX - rect.left;
                const newPct = (clickX / rect.width) * 100;
                setScrubberPos(Math.max(0, Math.min(100, newPct)));
              }}
              onMouseEnter={() => setCursorBadge('Scrub')}
              onMouseLeave={() => setCursorBadge(null)}
            >
              <img 
                src="/marketing-assets/images/statement/timeline.png" 
                alt="Butter timeline tracks" 
                className="timeline-bg-img"
              />

              <div className="timeline-interactive-tracks">
                {/* Track 1: Typography Block */}
                <div className="track-row">
                  <div className="track-label">Typography</div>
                  <div className="track-blocks-lane">
                    <div className="block-pill yellow" style={{ width: '45%' }}>
                      <Sparkles size={14} /> Kinetic Kinetic 02
                    </div>
                    <div className="block-pill pink" style={{ width: '30%' }}>
                      Inflate 3D
                    </div>
                  </div>
                </div>

                {/* Track 2: 3D / Shaders */}
                <div className="track-row">
                  <div className="track-label">Shaders</div>
                  <div className="track-blocks-lane">
                    <div className="block-pill blue" style={{ width: '60%' }}>
                      <Layers size={14} /> Halftone Dot Shader
                    </div>
                  </div>
                </div>

                {/* Track 3: Audio Reactive */}
                <div className="track-row">
                  <div className="track-label">Audio</div>
                  <div className="track-blocks-lane">
                    <div className="block-pill green" style={{ width: '85%' }}>
                      <Volume2 size={14} /> Beat Sync Trigger [128 BPM]
                    </div>
                  </div>
                </div>
              </div>

              {/* Scrubber Playhead */}
              <div className="scrubber-playhead" style={{ left: `${scrubberPos}%` }}>
                <div className="scrubber-handle"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY ONE: "There's a block for that" (Text Effects) */}
      <section className="story-one-section" id="blocks">
        <div className="butter-container">
          <div className="story-one-grid">
            {/* Left Column: Dynamic Text Preview */}
            <div className="story-one-text-col">
              <div className="text-effects-headline-box">
                <h2 className="heading-1 headline-static">
                  There’s a block for 
                  <span className={`active-effect-word ${activeEffect}`}>
                    {activeEffect === 'glow' && (
                      <>
                        <span className="glow-underlay"></span>
                        glow
                      </>
                    )}
                    {activeEffect === 'inflate' && (
                      <span className="inflate-letters-row">
                        <img src="/marketing-assets/images/text-effects/inflate/b.png" alt="b" className="inflate-letter" />
                        <img src="/marketing-assets/images/text-effects/inflate/l.png" alt="l" className="inflate-letter" />
                        <img src="/marketing-assets/images/text-effects/inflate/o.png" alt="o" className="inflate-letter" />
                        <img src="/marketing-assets/images/text-effects/inflate/c.png" alt="c" className="inflate-letter" />
                        <img src="/marketing-assets/images/text-effects/inflate/k.png" alt="k" className="inflate-letter" />
                        <img src="/marketing-assets/images/text-effects/inflate/s.png" alt="s" className="inflate-letter" />
                      </span>
                    )}
                    {activeEffect === 'focus' && 'focus'}
                    {activeEffect === 'halftone' && 'halftone'}
                  </span>
                </h2>
              </div>
              <p className="text-body text-muted">
                Browse curated blocks for motion graphics, kinetic type, 3D, shader effects, and beyond. Every block is reactive, programmable, and drop-in ready.
              </p>
              <div>
                <button className="butter-button light">
                  Explore Block Library
                </button>
              </div>
            </div>

            {/* Right Column: Interactive Studio Widget */}
            <div className="story-one-widget-col">
              <div className="effects-studio-card">
                <div className="studio-header">
                  <span className="studio-title">Interactive Effect Selector</span>
                  <span className="studio-badge">Live Shader v2</span>
                </div>

                <div className="studio-effects-grid">
                  {/* Glow Button */}
                  <div 
                    className={`effect-button-item ${activeEffect === 'glow' ? 'active' : ''}`}
                    onClick={() => setActiveEffect('glow')}
                    onMouseEnter={() => setCursorBadge('Glow')}
                    onMouseLeave={() => setCursorBadge(null)}
                  >
                    <div className="item-icon-thumb">
                      <img src="/marketing-assets/images/text-effects/glow.png" alt="Glow" />
                    </div>
                    <span className="item-label">Glow</span>
                  </div>

                  {/* Inflate Button */}
                  <div 
                    className={`effect-button-item ${activeEffect === 'inflate' ? 'active' : ''}`}
                    onClick={() => setActiveEffect('inflate')}
                    onMouseEnter={() => setCursorBadge('Inflate')}
                    onMouseLeave={() => setCursorBadge(null)}
                  >
                    <div className="item-icon-thumb">
                      <img src="/marketing-assets/images/text-effects/inflate.png" alt="Inflate" />
                    </div>
                    <span className="item-label">Inflate</span>
                  </div>

                  {/* Focus Button */}
                  <div 
                    className={`effect-button-item ${activeEffect === 'focus' ? 'active' : ''}`}
                    onClick={() => setActiveEffect('focus')}
                    onMouseEnter={() => setCursorBadge('Focus')}
                    onMouseLeave={() => setCursorBadge(null)}
                  >
                    <div className="item-icon-thumb">
                      <img src="/marketing-assets/images/text-effects/focus.png" alt="Focus" />
                    </div>
                    <span className="item-label">Focus</span>
                  </div>

                  {/* Halftone Button */}
                  <div 
                    className={`effect-button-item ${activeEffect === 'halftone' ? 'active' : ''}`}
                    onClick={() => setActiveEffect('halftone')}
                    onMouseEnter={() => setCursorBadge('Halftone')}
                    onMouseLeave={() => setCursorBadge(null)}
                  >
                    <div className="item-icon-thumb">
                      <img src="/marketing-assets/images/text-effects/halftone.png" alt="Halftone" />
                    </div>
                    <span className="item-label">Halftone</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY TWO: "Infinitely customizable" */}
      <section className="story-two-section">
        <div className="butter-container">
          <div className="story-two-grid">
            {/* Left Column: Interactive Dials & Live Canvas */}
            <div className="story-two-media-col">
              <canvas ref={canvasRef} style={{ width: '100%', height: 'auto', display: 'block' }} />
              <div className="floating-inspect-pill">
                <div className="inspect-param">
                  <span>Dispersion</span>
                  <span>{sliderWarp}%</span>
                </div>
                <div className="inspect-param">
                  <span>Extrude</span>
                  <span>{sliderExtrude}px</span>
                </div>
                <div className="inspect-param">
                  <span>Chromatic</span>
                  <span>0.{sliderAberration}λ</span>
                </div>
              </div>
            </div>

            {/* Right Column: Title with Dial GIFs & Real Sliders */}
            <div className="story-two-text-col">
              <h2 className="heading-1">
                Make blocks your own with intuitive
                <span className="inline-gif-badge">
                  <img src="https://images.prismic.io/butter/rkyK71MqTbBBSqLU_dial.gif?auto=format,compress" alt="dial icon" />
                </span>
                dials,
                <span className="inline-gif-badge">
                  <img src="https://images.prismic.io/butter/jR4ymQxaYMnt7J4V_slider.gif?auto=format,compress" alt="slider icon" />
                </span>
                sliders, prompts, and even with code.
              </h2>
              <p className="text-body text-muted">
                Every parameter in Butter is exposed as an interactive control. Drag dials, tweak sliders, or open the built-in code editor to modify GLSL shader uniforms in real-time.
              </p>

              {/* Real-time parameter controls */}
              <div className="interactive-sliders-card">
                <div className="slider-row">
                  <div className="slider-top">
                    <span>Wave Frequency</span>
                    <span className="slider-val">{sliderAberration} Hz</span>
                  </div>
                  <input 
                    type="range" 
                    min="5" 
                    max="95" 
                    value={sliderAberration}
                    onChange={(e) => setSliderAberration(Number(e.target.value))}
                  />
                </div>

                <div className="slider-row">
                  <div className="slider-top">
                    <span>Extrusion Amplitude</span>
                    <span className="slider-val">{sliderExtrude} px</span>
                  </div>
                  <input 
                    type="range" 
                    min="10" 
                    max="100" 
                    value={sliderExtrude}
                    onChange={(e) => setSliderExtrude(Number(e.target.value))}
                  />
                </div>

                <div className="slider-row">
                  <div className="slider-top">
                    <span>Phase Distortion</span>
                    <span className="slider-val">{sliderWarp}°</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={sliderWarp}
                    onChange={(e) => setSliderWarp(Number(e.target.value))}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY THREE: "Your new creative toolkit" */}
      <section className="story-three-section">
        <div className="butter-container">
          <div className="story-three-header">
            <h2 className="heading-1">Your new creative toolkit</h2>
            <p className="text-body text-muted">
              Customize and save your favorite blocks so your team never starts from scratch again.
            </p>
          </div>

          <div className="toolkit-showcase-container">
            {/* Filter Bar */}
            <div className="toolkit-filter-bar">
              {['all', '3D', 'Shaders', 'Motion', 'Audio'].map((filter) => (
                <button
                  key={filter}
                  className={`filter-chip ${toolkitFilter === filter ? 'active' : ''}`}
                  onClick={() => setToolkitFilter(filter)}
                  onMouseEnter={() => setCursorBadge(filter)}
                  onMouseLeave={() => setCursorBadge(null)}
                >
                  {filter.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Blocks Card Deck */}
            <div className="toolkit-card-grid">
              {[
                { title: 'Liquid Distortion', category: 'Shaders', color: '#4DC5E5' },
                { title: 'Inflate Type 3D', category: '3D', color: '#F9ABFF' },
                { title: 'Chromatic Split', category: 'Motion', color: '#E9D352' },
                { title: 'Beat Pulse Reactor', category: 'Audio', color: '#63AD45' },
                { title: 'Halftone Raster', category: 'Shaders', color: '#FF3333' },
                { title: 'Kinetic Warp', category: 'Motion', color: '#4DC5E5' },
              ]
                .filter(b => toolkitFilter === 'all' || b.category.toLowerCase() === toolkitFilter.toLowerCase())
                .map((block, idx) => (
                  <div key={idx} className="toolkit-card">
                    <div className="card-badge-row">
                      <span className="category-tag">{block.category}</span>
                      <span className="version-tag">v2.4</span>
                    </div>

                    <div className="card-art-preview">
                      <div 
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '16px',
                          background: block.color,
                          boxShadow: `0 0 30px ${block.color}`,
                          filter: 'blur(1px)'
                        }}
                      />
                    </div>

                    <h3 className="card-title">{block.title}</h3>

                    <div className="card-action-row">
                      <span className="text-muted" style={{ fontSize: '1.2rem' }}>Remix ready</span>
                      <button className="action-btn">Save to Team</button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE CARDS: "Explore features" */}
      <section className="feature-cards-section">
        <div className="butter-container">
          <div className="features-header-row">
            <div>
              <p className="text-cap text-muted" style={{ marginBottom: '1rem' }}>Explore features</p>
              <h2 className="heading-1">Your new all-in-one video editor.</h2>
            </div>
            <button className="butter-button light">
              View All Features
            </button>
          </div>

          <div className="feature-cards-grid">
            {/* Card 1: Import */}
            <div className="feature-card">
              <div className="feature-card-media">
                <img 
                  src="https://images.prismic.io/butter/p5SruxZOCU4DwBbv_home-feature-cards-media-1.jpg?auto=format,compress" 
                  alt="Import media"
                />
              </div>
              <div className="feature-card-copy">
                <h3 className="feature-title">Import</h3>
                <p className="feature-desc">
                  Drop in photos, videos, audio, and 3D assets from anywhere, instantly. Cloud sync keeps your files ready.
                </p>
              </div>
            </div>

            {/* Card 2: Edit */}
            <div className="feature-card">
              <div className="feature-card-media">
                <img 
                  src="https://images.prismic.io/butter/0WNNkkhILGsOpBUW_home-features-edit-1-.jpg?auto=format,compress" 
                  alt="Edit timeline"
                />
              </div>
              <div className="feature-card-copy">
                <h3 className="feature-title">Edit</h3>
                <p className="feature-desc">
                  Lightning-fast timeline with multi-track sequencing, magnetic snapping, ripple edits, and non-destructive cutting.
                </p>
              </div>
            </div>

            {/* Card 3: Enhance */}
            <div className="feature-card">
              <div className="feature-card-media">
                <img 
                  src="https://images.prismic.io/butter/vUiREZ54JrqHgkMt_enhance-1-.jpg?auto=format,compress" 
                  alt="Enhance video"
                />
              </div>
              <div className="feature-card-copy">
                <h3 className="feature-title">Enhance</h3>
                <p className="feature-desc">
                  Real-time color grading, AI generative fills, smart background removal, and audio sync with automated level matching.
                </p>
              </div>
            </div>

            {/* Card 4: Ship */}
            <div className="feature-card">
              <div className="feature-card-media">
                <img 
                  src="https://images.prismic.io/butter/it6UwH2L33bJ8Jfa_home-feature-cards-media-4.jpg?auto=format,compress" 
                  alt="Ship formats"
                />
              </div>
              <div className="feature-card-copy">
                <h3 className="feature-title">Ship</h3>
                <p className="feature-desc">
                  One-click export to 9:16 vertical reels, 16:9 YouTube, 1:1 Instagram feeds, ProRes, MP4, and WebM with parallel rendering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES HIGHLIGHT: "Create in 3 ways" (Remix, Describe, Code) */}
      <section className="features-highlight-section">
        <div className="butter-container">
          <div className="highlight-grid">
            {/* Accordion Tabs Column */}
            <div className="highlight-accordions-col">
              <p className="text-cap text-muted">Workflow Freedom</p>

              {/* Tab 1: Remix */}
              <div className={`accordion-item ${highlightTab === 0 ? 'active' : ''}`}>
                <button 
                  className="accordion-trigger" 
                  onClick={() => setHighlightTab(0)}
                  onMouseEnter={() => setCursorBadge('Remix')}
                  onMouseLeave={() => setCursorBadge(null)}
                >
                  <span className="trigger-title">Remix</span>
                  <span className="trigger-arrow">→</span>
                </button>
                <div className="accordion-content">
                  <p>
                    Start from pre-built blocks and design templates battle-tested on real brand campaigns. Tweak parameters, swap assets, and make it your own in seconds.
                  </p>
                </div>
              </div>

              {/* Tab 2: Describe */}
              <div className={`accordion-item ${highlightTab === 1 ? 'active' : ''}`}>
                <button 
                  className="accordion-trigger" 
                  onClick={() => setHighlightTab(1)}
                  onMouseEnter={() => setCursorBadge('Prompt')}
                  onMouseLeave={() => setCursorBadge(null)}
                >
                  <span className="trigger-title">Describe</span>
                  <span className="trigger-arrow">→</span>
                </button>
                <div className="accordion-content">
                  <p>
                    Prompt generative AI models right on your timeline. Generate kinetic text animations, video motion graphics, and background textures in plain English.
                  </p>
                </div>
              </div>

              {/* Tab 3: Code */}
              <div className={`accordion-item ${highlightTab === 2 ? 'active' : ''}`}>
                <button 
                  className="accordion-trigger" 
                  onClick={() => setHighlightTab(2)}
                  onMouseEnter={() => setCursorBadge('GLSL')}
                  onMouseLeave={() => setCursorBadge(null)}
                >
                  <span className="trigger-title">Code</span>
                  <span className="trigger-arrow">→</span>
                </button>
                <div className="accordion-content">
                  <p>
                    Build completely custom video effects with React, Three.js, and GLSL shaders. Full code-level control with zero compilation wait time.
                  </p>
                </div>
              </div>
            </div>

            {/* Media Preview Column */}
            <div className="highlight-media-col">
              <div className={`highlight-media-item ${highlightTab === 0 ? 'active' : ''}`}>
                <img 
                  src="https://images.prismic.io/butter/P8K5Uwru4pdZwAgz_remix-2-.jpg?auto=format,compress" 
                  alt="Remix mode" 
                />
              </div>
              <div className={`highlight-media-item ${highlightTab === 1 ? 'active' : ''}`}>
                <img 
                  src="https://images.prismic.io/butter/hDrohuQJDf2bxDhq_home-features-highlight-2.jpg?auto=format,compress" 
                  alt="Describe mode" 
                />
              </div>
              <div className={`highlight-media-item ${highlightTab === 2 ? 'active' : ''}`}>
                <img 
                  src="https://images.prismic.io/butter/0JUbdPAYldT9Ehje_home-features-highlight-3.jpg?auto=format,compress" 
                  alt="Code mode" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY CAROUSEL: "Templates inspired by leading brands" */}
      <section className="gallery-carousel-section" id="templates">
        <div className="butter-container">
          <div className="gallery-header">
            <p className="text-cap text-muted">Templates inspired by leading brands</p>
            <h2 className="heading-1">The best stories are built block by block.</h2>
          </div>

          <div className="carousel-container-outer">
            {/* Nav Arrows */}
            <div className="carousel-nav-arrows">
              <button 
                className="nav-btn" 
                onClick={() => scrollGallery('left')}
                aria-label="Previous template"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                className="nav-btn" 
                onClick={() => scrollGallery('right')}
                aria-label="Next template"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Draggable Scroll Track */}
            <div className="carousel-scroll-track" ref={carouselTrackRef}>
              {GALLERY_TEMPLATES.map((tmpl) => (
                <div 
                  key={tmpl.id} 
                  className="carousel-card-item"
                  onMouseEnter={() => setCursorBadge('Use')}
                  onMouseLeave={() => setCursorBadge(null)}
                >
                  <div className="card-media-img">
                    <img src={tmpl.image} alt={tmpl.title} loading="lazy" />
                  </div>
                  <div className="card-details">
                    <h3 className="template-title">{tmpl.title}</h3>
                    <span className="template-tag">{tmpl.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DOUBLE BLOCK: "Turn anything into everything" & "High performance" */}
      <section className="double-block-section">
        <div className="butter-container">
          <div className="double-block-grid">
            {/* Card 1 */}
            <div className="double-card">
              <h3 className="card-top-title">Turn anything into everything.</h3>
              <div className="card-center-art">
                <img 
                  src="https://images.prismic.io/butter/ai_Er41P9HI4UgL7_turn-anything.png?auto=format,compress" 
                  alt="Turn anything into everything" 
                />
              </div>
              <p className="card-bottom-copy">
                Butter makes it simple to level up your text, logos, product shots, and even audio with the latest cutting-edge effects and generative code.
              </p>
            </div>

            {/* Card 2 */}
            <div className="double-card">
              <h3 className="card-top-title">High performance. Totally programmable.</h3>
              <div className="card-center-art">
                <img 
                  src="https://images.prismic.io/butter/ai_E3Y1P9HI4UgMC_high-performance.png?auto=format,compress" 
                  alt="High performance programmable" 
                />
              </div>
              <p className="card-bottom-copy">
                Engineered on modern WebGL & WebGPU graphics pipelines. Instant playback, hardware acceleration, and seamless responsiveness at any resolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CREATOR SHOWCASE: "Get the look" */}
      <section className="block-highlight-section">
        <div className="butter-container">
          <p className="text-cap text-muted" style={{ marginBottom: '2rem' }}>Get the look</p>
          <div className="highlight-content-wrap">
            {/* Left: Creator Selector */}
            <div className="creators-tabs-col">
              {CREATORS.map((c, idx) => (
                <button
                  key={c.name}
                  className={`creator-tab-btn ${selectedCreator === idx ? 'active' : ''}`}
                  onClick={() => {
                    setSelectedCreator(idx);
                    setSelectedCreatorThumb(0);
                  }}
                  onMouseEnter={() => setCursorBadge(c.name)}
                  onMouseLeave={() => setCursorBadge(null)}
                >
                  {c.name}
                </button>
              ))}
            </div>

            {/* Right: Creator Preview Banner and Thumbs */}
            <div className="creator-preview-col">
              <div className="creator-banner-img">
                <img 
                  src={CREATORS[selectedCreator].banner} 
                  alt={CREATORS[selectedCreator].name} 
                />
              </div>

              <p className="text-body text-muted">
                {CREATORS[selectedCreator].subtitle}
              </p>

              <div className="creator-block-thumbs">
                {CREATORS[selectedCreator].thumbs.map((thumb, tIdx) => (
                  <div
                    key={tIdx}
                    className={`thumb-item ${selectedCreatorThumb === tIdx ? 'active' : ''}`}
                    onClick={() => setSelectedCreatorThumb(tIdx)}
                  >
                    <img src={thumb} alt="Pack thumbnail" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="butter-footer" id="pricing">
        <div className="butter-container">
          {/* Top navigation grid */}
          <div className="footer-grid-top">
            <div className="footer-column">
              <span className="col-title">Explore</span>
              <ul className="col-links">
                <li><a href="#product">Product</a></li>
                <li><a href="#blocks">Blocks</a></li>
                <li><a href="#templates">Templates</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
            </div>

            <div className="footer-column">
              <span className="col-title">Resources</span>
              <ul className="col-links">
                <li><a href="#figma">Figma Plugin</a></li>
                <li><a href="#docs">Developer Docs</a></li>
                <li><a href="#tutorials">Tutorials</a></li>
                <li><a href="#changelog">Changelog</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <span className="col-title">Socials</span>
              <ul className="col-links">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
                <li><a href="https://x.com" target="_blank" rel="noreferrer">X (Twitter)</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <span className="col-title">Legal</span>
              <ul className="col-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#cookie">Cookie Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Giant Illuminated Trackly SVG Wordmark */}
          <div className="footer-giant-logo-wrap">
            <img 
              src="/marketing-assets/images/footer-logo.svg" 
              alt="Trackly logo graphic" 
              className="footer-logo-svg"
            />
          </div>

          {/* Bottom Legal / Copyright Bar */}
          <div className="footer-legal-bar">
            <span>Copyright © 2026 Trackly Inc. All rights reserved.</span>
            <span>Designed for creatives. It's a whole new timeline.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;