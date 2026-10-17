import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../home/home.scss';
import './product.css';
import {
  Play,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  Compass,
  Layers,
  Plus,
  Box,
  X,
  Scissors,
  PenTool,
  Lightbulb,
  Gem,
  CircleDot,
  Wand2,
  ShoppingBag
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Brand Logos for "Trusted by the best"
const TRUSTED_BRANDS = [
  { name: 'MERCURY', label: 'MERCURY' },
  { name: 'Remote', label: 'Remote' },
  { name: 'miro', label: 'miro' },
  { name: 'B|B', label: 'B | B' },
  { name: 'Databricks', label: 'databricks' },
  { name: 'Linear', label: 'Linear' },
  { name: 'CIRCUS', label: 'CIRCUS' },
  { name: 'Figma', label: 'Figma' },
  { name: 'Stripe', label: 'stripe' },
  { name: 'Notion', label: 'Notion' }
];

// Artworks for Fan Deck & Showcase
const FAN_CARDS = [
  {
    id: 'f1',
    title: 'Where Art Meets Market',
    subtitle: 'Allowing artists to showcase their work and buyers to find unique, inspiring pieces.',
    artist: '@caplin',
    badgeColor: '#2B47FC',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80',
    type: 'curated'
  },
  {
    id: 'f2',
    title: 'STAFF Edition',
    subtitle: 'Vibrant streetwear character concept with custom 3D outerwear.',
    artist: '@howard',
    badgeColor: '#111111',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=800&q=80',
    tag: 'STAFF'
  },
  {
    id: 'f3',
    title: 'LE FLEUR*',
    subtitle: 'High-contrast botanical photography with neo-retro tinting.',
    artist: '@andree',
    badgeColor: '#25855A',
    image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=800&q=80',
    tag: 'LE FLEUR'
  },
  {
    id: 'f4',
    title: 'THE GREEN KNIGHT',
    subtitle: 'Golden hour cinematic poster series with minimalist typography.',
    artist: '@jackson',
    badgeColor: '#E2522C',
    image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=800&q=80',
    tag: 'KNIGHT'
  },
  {
    id: 'f5',
    title: 'SUMMER ARCHIVE',
    subtitle: 'Editorial youth series capturing sun-bleached moments in motion.',
    artist: '@robin',
    badgeColor: '#111111',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    tag: 'SUMMER'
  },
  {
    id: 'f6',
    title: 'FLUFFY YOUTH',
    subtitle: '3D iridescent tactile cloud sculpture rendered with soft volume shaders.',
    artist: '@alician',
    badgeColor: '#2B47FC',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    tag: 'FLUFFY'
  }
];

// Grid Artworks for "Our vision for any art technology"
const VISION_WORKS = {
  personal: [
    {
      id: 'v1',
      title: 'STAFF Puffer Concept',
      artist: 'Kiel Dangler',
      tag: 'STAFF',
      likes: '1.4k',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'v2',
      title: 'Le Fleur Botanic Studies',
      artist: 'Tyler Monet',
      tag: 'LE FLEUR',
      likes: '980',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'v3',
      title: 'The Green Knight Key Art',
      artist: 'David Lowery',
      tag: 'CINEMA',
      likes: '2.1k',
      image: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'v4',
      title: 'All Good Things Vol. 2',
      artist: 'Mimi Scholer',
      tag: 'PACKAGING',
      likes: '840',
      image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'v5',
      title: 'Golden Summer Portraiture',
      artist: 'Sofia Alvarez',
      tag: 'EDITORIAL',
      likes: '3.2k',
      image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'v6',
      title: 'Fluffy Dynamic Cloud 3D',
      artist: 'Roman Bratschi',
      tag: '3D ART',
      likes: '4.7k',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80'
    }
  ],
  business: [
    {
      id: 'b1',
      title: 'Commercial Brand Kinetic Set',
      artist: 'Studio Awsmd',
      tag: 'CAMPAIGN',
      likes: '5.1k',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'b2',
      title: 'Monolithic Type Sculpture',
      artist: 'Hyperhaus',
      tag: 'IDENTITY',
      likes: '2.9k',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'b3',
      title: 'Artisan Glassware Showcase',
      artist: 'Atelier V',
      tag: 'COMMERCE',
      likes: '1.8k',
      image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'b4',
      title: 'Architectural Shadow Studies',
      artist: 'Kora Bureau',
      tag: 'SPACE',
      likes: '3.6k',
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'b5',
      title: 'Tactile Textile Synthetics',
      artist: 'Nora Lund',
      tag: 'MATERIAL',
      likes: '2.2k',
      image: 'https://images.unsplash.com/photo-1579783901586-d88db74b4fe4?auto=format&fit=crop&w=700&q=80'
    },
    {
      id: 'b6',
      title: 'Neon Noir Product Rendering',
      artist: 'Voxel Craft',
      tag: '3D CGI',
      likes: '4.1k',
      image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=700&q=80'
    }
  ]
};

// 24 Curated Community Avatars
const COMMUNITY_AVATARS = [
  { name: 'Elena Rostova', role: '3D Sculptor', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Marcus Chen', role: 'Motion Designer', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Zara Thorne', role: 'Typographer', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Devon Miles', role: 'Digital Painter', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Aria Sterling', role: 'Shader Artist', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Kai Takahashi', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Chloe Vance', role: 'Collage Artist', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Liam O’Connor', role: 'Brand Identity', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Nia Patel', role: '3D Animator', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Julian Mercer', role: 'Art Collector', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Amara Diop', role: 'Illustrator', img: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Soren Lind', role: 'Visual Engineer', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Maya Lin', role: 'Printmaker', img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Hugo Rivera', role: 'Ceramist & 3D', img: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Freja Berg', role: 'Curator', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Tariq Al-Mansoor', role: 'Graphic Novelist', img: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Ingrid Solberg', role: 'Fashion Art', img: 'https://images.unsplash.com/photo-1558898479-33c0057a5d12?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Kenji Sato', role: 'XR Artist', img: 'https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Zoe Kravitz', role: 'Sound Visualizer', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Dante Rossi', role: 'Street Art', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Naomi Campbell', role: 'Fine Art Studio', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&h=200&q=80' },
  { name: 'Lucas Scott', role: 'Product Stylist', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80' }
];

// Marketplace for Creativity Carousel Items
const MARKETPLACE_SLIDES = [
  {
    id: 'm1',
    title: 'Artnesia Gap',
    subtitle: 'Minimalist matrix dot array with generative spatial coordinates.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=700&q=80',
    tag: 'GENERATIVE'
  },
  {
    id: 'm2',
    title: 'Immortalise Works',
    subtitle: 'Iridescent chromatic lightwave bands curving through deep space.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80',
    tag: 'CHROMATIC'
  },
  {
    id: 'm3',
    title: 'Creativity Class',
    subtitle: 'Bold Matisse-inspired cutouts with high saturation and playful balance.',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=700&q=80',
    tag: 'COLLAGE'
  },
  {
    id: 'm4',
    title: 'Celebrates Party',
    subtitle: 'Dynamic figurative illustrations celebrating dance and rhythmic movement.',
    image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=700&q=80',
    tag: 'FIGURATIVE'
  },
  {
    id: 'm5',
    title: 'Vivid Mirage',
    subtitle: 'Surrealist gradient landscape with fluid organic geometries.',
    image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=700&q=80',
    tag: 'SURREAL'
  }
];

const Product = () => {
  const navigate = useNavigate();

  // Navigation Dropdown State (Matching Home Page)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDropdownOpen]);

  // Product Feature State
  const [activeVisionTab, setActiveVisionTab] = useState('personal');
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(342);
  const [selectedPricing, setSelectedPricing] = useState('quarterly');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [activeMasterclass, setActiveMasterclass] = useState(0);

  // Component Refs
  const pageContainerRef = useRef(null);
  const marketplaceTrackRef = useRef(null);
  const fanDeckTrackRef = useRef(null);
  const heroDeckRef = useRef(null);

  // Masterclass data
  const masterclasses = [
    {
      instructor: 'BEATHA C. PHELAN',
      title: 'Gateway to artist people.',
      tag: '@reatha',
      bannerImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      description: 'Master the craft of contemporary digital art curation, artist storytelling, and commercial positioning.'
    },
    {
      instructor: 'HOWARD STERLING',
      title: 'The Kinetic Masterclass.',
      tag: '@howard',
      bannerImg: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80',
      description: 'Explore generative shaders, 3D volume sculpting, and reactive audio typography.'
    }
  ];

  // GSAP ScrollTrigger Animations Initialization
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. HERO ENTRANCE & FAN-OUT ANIMATION
      const heroTimeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

      heroTimeline
        .from('.hero-headline', {
          y: 45,
          opacity: 0,
          duration: 1
        })
        .fromTo(
          '.fan-card',
          {
            y: 80,
            opacity: 0,
            scale: 0.82
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.12,
            duration: 1.1,
            ease: 'back.out(1.4)'
          },
          '-=0.6'
        )
        .from(
          '.hero-sub-block',
          {
            y: 30,
            opacity: 0,
            duration: 0.8
          },
          '-=0.4'
        );

      // Hero Scroll reaction: Cards collapse and gently fade as user scrolls
      gsap.to('.hero-cards-fan', {
        scale: 0.9,
        y: 60,
        opacity: 0.35,
        ease: 'none',
        scrollTrigger: {
          trigger: '.pallet-hero-section',
          start: 'center center',
          end: 'bottom top',
          scrub: 1
        }
      });

      // 2. SHOWCASE SECTION (LEFT & RIGHT ENTRANCE)
      gsap.from('.showcase-content', {
        x: -90,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-showcase-section',
          start: 'top 75%'
        }
      });

      gsap.from('.showcase-stagger-stack .stagger-card', {
        x: 100,
        y: 40,
        rotation: 6,
        opacity: 0,
        stagger: 0.14,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-showcase-section',
          start: 'top 75%'
        }
      });

      // 3. MASTERCLASS BANNER ENTRANCE
      gsap.from('.masterclass-hero-card', {
        scale: 0.93,
        y: 50,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-masterclass-section',
          start: 'top 75%'
        }
      });

      // 4. STREAM SECTION: STATEMENT & DYNAMIC FAN CARDS
      gsap.from('.stream-statement-box', {
        scale: 0.94,
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-stream-section',
          start: 'top 80%'
        }
      });

      // Horizontal entrance animation for the stream cards deck
      if (fanDeckTrackRef.current) {
        gsap.fromTo(
          '.stream-card-item',
          {
            y: 40,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.stream-cards-track',
              start: 'top 85%'
            }
          }
        );
      }

      // 5. VISION SECTION: LEFT TO RIGHT & RIGHT TO LEFT
      gsap.from('.vision-left-col', {
        x: -80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-vision-section',
          start: 'top 75%'
        }
      });

      gsap.from('.sketch-badge', {
        scale: 0,
        opacity: 0,
        stagger: 0.06,
        duration: 0.6,
        ease: 'back.out(2)',
        scrollTrigger: {
          trigger: '.geometric-sketch-cluster',
          start: 'top 85%'
        }
      });

      gsap.from('.vision-right-col', {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-vision-section',
          start: 'top 75%'
        }
      });

      // 6. COMMUNITY SECTION ENTRANCE
      gsap.from('.community-center-text', {
        scale: 0.88,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-community-section',
          start: 'top 75%'
        }
      });

      // 7. STORYTELLING 4-CARDS: ZIGZAG LEFT & RIGHT ENTRANCE
      gsap.from('.card-connect', {
        x: -90,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.story-cards-grid',
          start: 'top 80%'
        }
      });

      gsap.from('.card-breathes-blue', {
        x: 90,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.story-cards-grid',
          start: 'top 80%'
        }
      });

      gsap.from('.card-spin-gold', {
        x: -90,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.card-spin-gold',
          start: 'top 85%'
        }
      });

      gsap.from('.card-personal-identity', {
        x: 90,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.card-personal-identity',
          start: 'top 85%'
        }
      });

      // 8. MARKETPLACE CAROUSEL SLIDES
      gsap.from('.marketplace-slide-card', {
        y: 60,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.marketplace-track',
          start: 'top 85%'
        }
      });

      // 9. SPOTLIGHT STAGE & CARD
      gsap.from('.spotlight-profile-card', {
        y: 70,
        scale: 0.88,
        opacity: 0,
        duration: 1.1,
        ease: 'back.out(1.3)',
        scrollTrigger: {
          trigger: '.pallet-spotlight-section',
          start: 'top 75%'
        }
      });

      // 10. MEMBERSHIP PRICING CARDS
      gsap.from('.membership-info-col', {
        x: -70,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-membership-section',
          start: 'top 75%'
        }
      });

      gsap.from('.pricing-card', {
        y: 70,
        opacity: 0,
        stagger: 0.14,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.membership-cards-grid',
          start: 'top 80%'
        }
      });

      // 11. VIBRANT LIME BANNER & SKETCH ICONS
      gsap.from('.lime-interactive-card', {
        scale: 0.92,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-lime-banner-section',
          start: 'top 75%'
        }
      });

      gsap.from('.lime-sketch-icon', {
        y: 35,
        scale: 0.6,
        opacity: 0,
        stagger: 0.07,
        duration: 0.6,
        ease: 'back.out(1.8)',
        scrollTrigger: {
          trigger: '.lime-sketch-row',
          start: 'top 85%'
        }
      });

      // 12. DUAL SPLIT CARDS: LEFT TO RIGHT & RIGHT TO LEFT
      gsap.from('.crimson-card', {
        x: -120,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-dual-split-section',
          start: 'top 75%'
        }
      });

      gsap.from('.mint-card', {
        x: 120,
        opacity: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pallet-dual-split-section',
          start: 'top 75%'
        }
      });

      // 13. FOOTER FADE-IN
      gsap.from('.butter-footer', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.butter-footer',
          start: 'top 90%'
        }
      });
    }, pageContainerRef);

    return () => ctx.revert();
  }, []);

  // Animate tab switch smoothly
  useEffect(() => {
    gsap.fromTo(
      '.vision-art-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.06, duration: 0.45, ease: 'power2.out' }
    );
  }, [activeVisionTab]);

  // Scroll handler for Marketplace Carousel
  const scrollMarketplace = (direction) => {
    if (!marketplaceTrackRef.current) return;
    const card = marketplaceTrackRef.current.querySelector('.marketplace-slide-card');
    const scrollAmount = card ? (card.offsetWidth + 20) * (direction === 'left' ? -1 : 1) : (direction === 'left' ? -320 : 320);
    marketplaceTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Scroll handler for Fan Deck
  const scrollFanDeck = (direction) => {
    if (!fanDeckTrackRef.current) return;
    const card = fanDeckTrackRef.current.querySelector('.stream-card-item');
    const scrollAmount = card ? (card.offsetWidth + 20) * (direction === 'left' ? -1 : 1) : (direction === 'left' ? -320 : 320);
    fanDeckTrackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setIsLiked(true);
      // Small pop bounce
      gsap.fromTo(
        '.spotlight-like-btn',
        { scale: 0.85 },
        { scale: 1, duration: 0.4, ease: 'back.out(2)' }
      );
    }
  };

  return (
    <div className="butter-page-wrapper pallet-page-root" ref={pageContainerRef}>
      {/* ========================================================
          1. FLOATING HEADER & NAVIGATION (Same as Home Page)
          ======================================================== */}
      <header className="butter-header">
        <div className="butter-container header-bar">
          {/* Left Pill Cluster */}
          <div className="header-left-cluster" ref={dropdownRef}>
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

            {/* Menu links */}
            <ul className="header-nav-menu">
              <li className="nav-item"><Link to="/product">Product</Link></li>
              <li className="nav-item"><Link to="/about">About Us</Link></li>
              <li className="nav-item"><Link to="/contact">Contact</Link></li>
              <li className="nav-item"><Link to="/#pricing">Pricing</Link></li>
              <li className="nav-item"><Link to="/#blog">Blog</Link></li>
            </ul>

            {/* Three Dots Toggle */}
            <button
              className={`menu-toggle-btn ${isDropdownOpen ? 'active' : ''}`}
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
                    <Link to="/product" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Product</span>
                      <span className="item-hint">Explore features</span>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/contact" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">Contact</span>
                      <span className="item-hint">Join newsletter & get in touch</span>
                    </Link>
                  </li>
                  <li className="dropdown-item">
                    <Link to="/about" onClick={() => setIsDropdownOpen(false)}>
                      <span className="item-label">About Us</span>
                      <span className="item-hint">Our story & vision</span>
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

                <div className="dropdown-footer-socials">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
                  <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
                  <Link to="/#blog" onClick={() => setIsDropdownOpen(false)}>Blog</Link>
                </div>
              </div>
            )}
          </div>

          {/* Right Pill Cluster */}
          <div className="header-right-cluster">
            <Link
              to="/login"
              className="login-link"
            >
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

      {/* ========================================================
          2. HERO SECTION: "A place to display your masterpiece."
          ======================================================== */}
      <section className="pallet-hero-section" id="hero">
        <div className="pallet-container hero-inner">
          <h1 className="hero-headline">
            A place to display your
            <br />
            <span className="hero-headline-highlight">masterpiece.</span>
          </h1>

          {/* Interactive Fan Cards Showcase */}
          <div className="hero-cards-deck-wrapper" ref={heroDeckRef}>
            <div className="hero-cards-fan">
              {/* Card 1: Left Card with @caplin */}
              <div className="fan-card fan-card-1">
                <div className="creator-pill blue-pill floating-badge-anim">
                  <span className="pill-dot"></span>
                  <span>@caplin</span>
                </div>
                <img
                  src="https://i.pinimg.com/736x/1c/30/11/1c3011fcec41103a612bc29b57cb7c65.jpg"
                  alt="Curated Artwork 1"
                  className="fan-card-img"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card 2 */}
              <div className="fan-card fan-card-2">
                <img
                  src="https://i.pinimg.com/1200x/9e/6b/b7/9e6bb78c260288cec5cd88765b31d959.jpg"
                  alt="Curated Artwork 2"
                  className="fan-card-img"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card 3: Center Featured (Animated GIF) */}
              <div className="fan-card fan-card-3">
                <img
                  src="https://i.pinimg.com/originals/d3/5a/5e/d35a5e8841cfca2285096efcc72cd7f7.gif"
                  alt="Curated Artwork 3"
                  className="fan-card-img"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card 4 */}
              <div className="fan-card fan-card-4">
                <img
                  src="https://i.pinimg.com/736x/a3/a9/6a/a3a96a5deae56a1a3709e669ea073209.jpg"
                  alt="Curated Artwork 4"
                  className="fan-card-img"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Card 5: Right Card with @andree */}
              <div className="fan-card fan-card-5">
                <div className="creator-pill green-pill floating-badge-anim-rev">
                  <span className="pill-dot"></span>
                  <span>@andree</span>
                </div>
                <img
                  src="https://i.pinimg.com/1200x/67/27/3d/67273dec85aa02a06f4d7f4f64b231c5.jpg"
                  alt="Curated Artwork 5"
                  className="fan-card-img"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Subtitle & Hero CTA */}
          <div className="hero-sub-block">
            <p className="hero-subtext">
              Artists can display their masterpieces, and buyers can discover and acquire verified original works seamlessly.
            </p>
            <div className="hero-cta-group">
              <button
                className="pallet-btn-primary"
                onClick={() => navigate('/login')}
              >
                Join for $9.99/m
              </button>
              <a href="#e-commerce" className="pallet-link-arrow">
                Read more <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. SECTION: "Showcase, Sell, & acquire arts..."
          ======================================================== */}
      <section className="pallet-showcase-section" id="e-commerce">
        <div className="pallet-container showcase-grid">
          {/* Left Column Text */}
          <div className="showcase-content">
            <span className="pallet-eyebrow">E-COMMERCE</span>
            <h2 className="showcase-headline">
              Showcase, Sell,
              <br />
              <span className="accent-red">& acquire arts</span> to
              <br />
              our marketplace.
            </h2>
            <p className="showcase-description">
              Dynamic community where artists and buyers seamlessly merge. ArtFusion brings together creators and enthusiasts to share creativity, establish digital provenance, and monetize unique collections.
            </p>
            <div className="showcase-actions">
              <button
                className="pallet-btn-primary"
                onClick={() => navigate('/login')}
              >
                Join for $9.99/m
              </button>
              <a href="#masterclass" className="pallet-link-arrow">
                Read more <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Right Column Staggered Gallery */}
          <div className="showcase-stagger-stack">
            {/* Tag Howard */}
            <div className="floating-creator-tag tag-howard floating-badge-anim">
              <span>@howard</span>
            </div>

            {/* Art Card 1: Surreal Eye */}
            <div className="stagger-card card-surreal-eye">
              <img
                src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=500&q=80"
                alt="Bosch Bruegel Eye Graphic"
              />
            </div>

            {/* Art Card 2: 3D Typography */}
            <div className="stagger-card card-net-noir">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=500&q=80"
                alt="Net Noir 3D Typography"
              />
              <div className="floating-creator-tag tag-robin floating-badge-anim-rev">
                <span>@robin</span>
              </div>
            </div>

            {/* Art Card 3: Van Gogh Style */}
            <div className="stagger-card card-van-gogh">
              <img
                src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=500&q=80"
                alt="Post-impressionist Portrait"
              />
            </div>

            {/* Art Card 4: Fringe Pack */}
            <div className="stagger-card card-fringe">
              <img
                src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80"
                alt="Fringe Cigarette Retro Graphic"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. MASTERCLASS BANNER: "Gateway to artist people."
          ======================================================== */}
      <section className="pallet-masterclass-section" id="masterclass">
        <div className="pallet-container">
          <div className="masterclass-top-bar">
            <span className="pallet-eyebrow">
              CLASS BY {masterclasses[activeMasterclass].instructor}
            </span>
            <div className="masterclass-tag-pill">
              <span className="pill-dot"></span>
              <span>{masterclasses[activeMasterclass].tag}</span>
            </div>
          </div>

          <h2 className="masterclass-headline">
            {masterclasses[activeMasterclass].title}
          </h2>

          {/* Masterclass Hero Card */}
          <div className="masterclass-hero-card">
            <img
              src={masterclasses[activeMasterclass].bannerImg}
              alt={masterclasses[activeMasterclass].title}
              className="masterclass-hero-img"
            />

            {/* Top Left Swatch Graphic */}
            <div className="masterclass-swatch-badge">
              <div className="swatch-half swatch-black"></div>
              <div className="swatch-half swatch-white"></div>
            </div>

            {/* Bottom Controls */}
            <div className="masterclass-bottom-overlay">
              <button
                className="watch-now-pill"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play size={14} fill="#ffffff" />
                <span>Watch</span>
              </button>

              <div className="masterclass-nav-arrows">
                <button
                  className="nav-arrow-circle"
                  onClick={() => setActiveMasterclass((prev) => (prev === 0 ? masterclasses.length - 1 : prev - 1))}
                  aria-label="Previous class"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  className="nav-arrow-circle"
                  onClick={() => setActiveMasterclass((prev) => (prev === masterclasses.length - 1 ? 0 : prev + 1))}
                  aria-label="Next class"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          5. SOCIAL PROOF: "Trusted by the best."
          ======================================================== */}
      <section className="pallet-trusted-section">
        <div className="pallet-container">
          <div className="trusted-header-row">
            <div>
              <h3 className="trusted-headline">Trusted by the best.</h3>
              <p className="trusted-subtext">
                Our growth hackers are experts in identifying and capitalizing on the most profitable digital avenues.
              </p>
            </div>
            <div className="trusted-arrow-controls">
              <button className="nav-arrow-circle" aria-label="Previous logo">
                <ChevronLeft size={16} />
              </button>
              <button className="nav-arrow-circle" aria-label="Next logo">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Infinite Brands Marquee */}
          <div className="brands-ticker-wrapper">
            <div className="brands-ticker-track">
              {[...TRUSTED_BRANDS, ...TRUSTED_BRANDS, ...TRUSTED_BRANDS].map((brand, idx) => (
                <div key={idx} className="brand-pill-item">
                  <span className="brand-dot"></span>
                  <span className="brand-text">{brand.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          6. EXPANDABLE ART STREAM & FAN-OUT CARDS
          ======================================================== */}
      <section className="pallet-stream-section">
        <div className="pallet-container">
          {/* Statement with Inline Pill Badges */}
          <div className="stream-statement-box">
            <div className="statement-floating-tag tag-left floating-badge-anim">
              <span>@alician</span>
            </div>
            <div className="statement-floating-tag tag-right floating-badge-anim-rev">
              <span>@andree</span>
            </div>

            <p className="stream-statement-text">
              Whether you're an artist looking to sell your work{' '}
              <span className="inline-art-pill">
                <Box size={14} /> artwork
              </span>{' '}
              / or buyer seeking unique pieces{' '}
              <span className="inline-art-pill badge-green">
                <Sparkles size={14} /> curated
              </span>{' '}
              connects you to world of creativity{' '}
              <span className="inline-art-pill badge-orange">
                <ShoppingBag size={14} /> commerce
              </span>.
            </p>
          </div>

          {/* Carousel / Fan-Out Horizontal Cards */}
          <div className="stream-carousel-controls">
            <span className="stream-carousel-title">Curated Collection Drops</span>
            <div className="carousel-nav-group">
              <button
                className="nav-arrow-circle"
                onClick={() => scrollFanDeck('left')}
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                className="nav-arrow-circle"
                onClick={() => scrollFanDeck('right')}
                aria-label="Scroll right"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="stream-cards-track" ref={fanDeckTrackRef}>
            {FAN_CARDS.map((card) => (
              <div key={card.id} className="stream-card-item">
                <div className="stream-card-media">
                  <img src={card.image} alt={card.title} />
                  {card.tag && <span className="stream-tag-chip">{card.tag}</span>}
                  <div
                    className="stream-artist-pill"
                    style={{ backgroundColor: card.badgeColor }}
                  >
                    {card.artist}
                  </div>
                </div>
                <div className="stream-card-info">
                  <h4 className="stream-card-title">{card.title}</h4>
                  <p className="stream-card-desc">{card.subtitle}</p>
                  <button
                    className="stream-card-action"
                    onClick={() => navigate('/login')}
                  >
                    <span>Explore Pack</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          7. SECTION: "Our vision for any art technology."
          ======================================================== */}
      <section className="pallet-vision-section" id="solution">
        <div className="pallet-container vision-grid">
          {/* Left Column: Vision Info & Geometric Badges */}
          <div className="vision-left-col">
            <h2 className="vision-headline">
              Our vision
              <br />
              for any art technology.
            </h2>
            <p className="vision-description">
              Every piece of art tells a story. Echoes of Expression allows artists to showcase their personal journeys through their work, utilizing generative toolkits and provenance protocols to safeguard creative rights.
            </p>
            <div className="vision-action-row">
              <a href="#story-telling" className="pallet-link-arrow">
                Read more <ArrowRight size={16} />
              </a>
            </div>

            {/* Geometric Sketch Doodles Grid */}
            <div className="geometric-sketch-cluster">
              <div className="sketch-badge" title="Precision Drafting">
                <PenTool size={20} />
              </div>
              <div className="sketch-badge" title="Color Spectrum">
                <CircleDot size={20} />
              </div>
              <div className="sketch-badge" title="Crop & Compose">
                <Scissors size={20} />
              </div>
              <div className="sketch-badge" title="3D Spatial Geometry">
                <Box size={20} />
              </div>
              <div className="sketch-badge" title="Facet Diamond">
                <Gem size={20} />
              </div>
              <div className="sketch-badge" title="Ideation Bulb">
                <Lightbulb size={20} />
              </div>
              <div className="sketch-badge" title="Creative Magic">
                <Wand2 size={20} />
              </div>
              <div className="sketch-badge" title="Compass Navigation">
                <Compass size={20} />
              </div>
            </div>
          </div>

          {/* Right Column: Switcher & 6-Card Gallery */}
          <div className="vision-right-col">
            {/* Tab Switcher & Create Button */}
            <div className="vision-filter-bar">
              <div className="vision-tabs-pill">
                <button
                  className={`tab-btn ${activeVisionTab === 'business' ? 'active' : ''}`}
                  onClick={() => setActiveVisionTab('business')}
                >
                  Business
                </button>
                <button
                  className={`tab-btn ${activeVisionTab === 'personal' ? 'active' : ''}`}
                  onClick={() => setActiveVisionTab('personal')}
                >
                  Personal
                </button>
              </div>

              <button
                className="create-art-btn"
                onClick={() => navigate('/login')}
              >
                <Plus size={16} />
                <span>Create</span>
              </button>
            </div>

            {/* 6-Card Artwork Grid */}
            <div className="vision-artwork-grid">
              {VISION_WORKS[activeVisionTab].map((item) => (
                <div key={item.id} className="vision-art-card">
                  <div className="card-media-wrapper">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <span className="card-corner-tag">{item.tag}</span>
                    <button className="card-favorite-btn" aria-label="Favorite">
                      <Heart size={14} />
                    </button>
                  </div>
                  <div className="card-caption-row">
                    <div>
                      <h5 className="art-title">{item.title}</h5>
                      <span className="art-creator">{item.artist}</span>
                    </div>
                    <span className="art-likes-badge">♥ {item.likes}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          8. SECTION: "You will find yourself among us"
          ======================================================== */}
      <section className="pallet-community-section">
        <div className="pallet-container community-inner">
          {/* Avatar Cloud Top Row - Continuous Parallax Marquee (Right-to-Left) */}
          <div className="avatar-cloud-track-wrapper">
            <div className="avatar-cloud-row top-row-track">
              {[...COMMUNITY_AVATARS.slice(0, 11), ...COMMUNITY_AVATARS.slice(0, 11)].map((person, idx) => (
                <div key={idx} className="avatar-bubble" title={`${person.name} • ${person.role}`}>
                  <img src={person.img} alt={person.name} />
                </div>
              ))}
            </div>
          </div>

          {/* Center Statement */}
          <div className="community-center-text">
            <div className="community-center-logo">
              <Compass size={28} className="rotating-compass" />
            </div>
            <h2 className="community-headline">
              You will find yourself
              <br />
              among us
            </h2>
            <p className="community-subtext">
              Dive into a dynamic community where artists, collectors, and digital creators seamlessly merge.
            </p>
          </div>

          {/* Avatar Cloud Bottom Row - Continuous Parallax Marquee (Left-to-Right) */}
          <div className="avatar-cloud-track-wrapper">
            <div className="avatar-cloud-row bottom-row-track">
              {[...COMMUNITY_AVATARS.slice(11, 22), ...COMMUNITY_AVATARS.slice(11, 22)].map((person, idx) => (
                <div key={idx} className="avatar-bubble" title={`${person.name} • ${person.role}`}>
                  <img src={person.img} alt={person.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          9. SECTION: "Every piece of art tells a story"
          ======================================================== */}
      <section className="pallet-storytelling-section" id="story-telling">
        <div className="pallet-container">
          <div className="section-header-center">
            <span className="pallet-eyebrow">YOUR STORY TELLING</span>
            <h2 className="section-headline">
              Every piece of art
              <br />
              tells a story
            </h2>
          </div>

          {/* 4 Feature Story Cards */}
          <div className="story-cards-grid">
            {/* Card 1: Connect, Create, Commerce (Enters from Left) */}
            <div className="story-card card-connect">
              <div className="story-card-top">
                <button
                  className="pill-badge-btn"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <Play size={12} fill="currentColor" />
                  <span>Play Video</span>
                </button>
                <div className="creator-pill tag-robin-pill floating-badge-anim">
                  <span>@robin</span>
                </div>
              </div>
              <div className="card-prada-media">
                <img
                  src="https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=500&q=80"
                  alt="Editorial Typography Art"
                />
              </div>
              <h3 className="story-card-title">Connect, Create, Commerce</h3>
              <p className="story-card-desc">
                Offering buyers a chance to own a piece of that narrative, backed by immutable digital provenance.
              </p>
              <a href="#how-it-works" className="pallet-link-arrow">
                How it works? <ArrowRight size={14} />
              </a>
            </div>

            {/* Card 2: Where Art Breathes Commerce (Enters from Right) */}
            <div className="story-card card-breathes-blue">
              <div className="blue-card-art">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                  alt="3D Surreal Torus Sculpture"
                />
              </div>
              <h3 className="story-card-title light-title">Where Art Breathes Commerce</h3>
              <p className="story-card-desc light-desc">
                Artistic spirit with commercial viability, providing a high-performance platform where creativity commands real value.
              </p>
              <a href="#membership" className="pallet-link-arrow light-link">
                Read more <ArrowRight size={14} />
              </a>
            </div>

            {/* Card 3: Spin Your Art Into Gold (Enters from Left) */}
            <div className="story-card card-spin-gold">
              <div className="spin-gold-media">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
                  alt="Artist with Pastel Hair & Neon Graphics"
                />
              </div>
              <h3 className="story-card-title">Spin Your Art Into Gold</h3>
              <p className="story-card-desc">
                Unleash your artistic potential, where innovation and decentralized commerce converge into sustainable creator careers.
              </p>
              <button
                className="pallet-btn-primary full-width"
                onClick={() => navigate('/login')}
              >
                Join us now
              </button>
            </div>

            {/* Card 4: Personal Identity (Enters from Right) */}
            <div className="story-card card-personal-identity">
              <div className="identity-card-inner">
                <div className="identity-badge-row">
                  <span className="id-chip">PASS</span>
                  <Sparkles size={18} className="id-sparkle" />
                </div>
                <h4 className="id-title">Personal Identity</h4>
                <p className="id-subtitle">Creative Works Pass</p>
                <div className="id-qr-preview">
                  <div className="qr-box"></div>
                  <span>Smart Pass for the Global Art Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          10. SECTION: "Marketplace for Creativity" (Carousel)
          ======================================================== */}
      <section className="pallet-marketplace-section">
        <div className="pallet-container">
          <div className="marketplace-header-row">
            <div>
              <span className="pallet-eyebrow">GET MORE CLOSER</span>
              <h2 className="marketplace-headline">Marketplace for Creativity</h2>
              <p className="marketplace-subtext">
                In the realm of Artnesia, creativity knows no bounds. This eternal marketplace celebrates the timeless nature of art.
              </p>
            </div>
            <div className="marketplace-top-actions">
              <button
                className="view-all-pill-btn"
                onClick={() => navigate('/login')}
              >
                View All
              </button>
              <div className="marketplace-arrows">
                <button
                  className="nav-arrow-circle"
                  onClick={() => scrollMarketplace('left')}
                  aria-label="Scroll left"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  className="nav-arrow-circle"
                  onClick={() => scrollMarketplace('right')}
                  aria-label="Scroll right"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Carousel Track */}
          <div className="marketplace-track" ref={marketplaceTrackRef}>
            {MARKETPLACE_SLIDES.map((slide) => (
              <div key={slide.id} className="marketplace-slide-card">
                <div className="slide-media">
                  <img src={slide.image} alt={slide.title} />
                  <span className="slide-tag">{slide.tag}</span>
                </div>
                <div className="slide-info">
                  <h4 className="slide-title">{slide.title}</h4>
                  <p className="slide-desc">{slide.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          11. SPOTLIGHT ARTIST & APP DOCK
          ======================================================== */}
      <section className="pallet-spotlight-section">
        <div className="pallet-container">
          {/* Floating Brand App Dock */}
          <div className="app-dock-bar">
            <div className="app-dock-item" title="Apple Music">
              <span className="app-icon apple-music">♫</span>
            </div>
            <div className="app-dock-item active" title="Pallet Ross">
              <span className="app-icon pallet-icon">✦</span>
            </div>
            <div className="app-dock-item" title="VSCO">
              <span className="app-icon vsco-icon">⊚</span>
            </div>
            <div className="app-dock-item" title="Behance">
              <span className="app-icon behance-icon">Bē</span>
            </div>
          </div>

          {/* Spotlight Hero Stage */}
          <div className="spotlight-stage">
            {/* Background Artist Grid Collage */}
            <div className="spotlight-bg-grid">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80"
                alt="Portrait Background"
                className="spotlight-stage-bg"
              />
            </div>

            {/* Central Floating Spotlight Profile Card */}
            <div className="spotlight-profile-card">
              <div className="profile-card-top">
                <div className="creator-pill tag-artist-pill floating-badge-anim">
                  <span>@artist</span>
                </div>
                <button
                  className={`spotlight-like-btn ${isLiked ? 'liked' : ''}`}
                  onClick={toggleLike}
                >
                  <Heart size={14} fill={isLiked ? '#FF3333' : 'none'} color={isLiked ? '#FF3333' : '#111111'} />
                  <span>{isLiked ? 'Liked' : 'Like'}</span>
                  <span className="like-count">({likeCount})</span>
                </button>
              </div>

              <div className="profile-media-circle">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80"
                  alt="Trisha Woodward in orange dress"
                />
              </div>

              <div className="profile-info-block">
                <h3 className="profile-name">Trisha Woodward</h3>
                <span className="profile-affiliation">from ArtRose</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          12. MEMBERSHIP / PRICING SECTION
          ======================================================== */}
      <section className="pallet-membership-section" id="membership">
        <div className="pallet-container membership-grid">
          {/* Left Column: Heading & Description (Enters from Left) */}
          <div className="membership-info-col">
            <div className="membership-badge-icon">
              <Box size={22} />
            </div>
            <h2 className="membership-headline">Membership</h2>
            <p className="membership-desc">
              Offering buyers a chance to own a piece of that narrative. This platform is where stories come alive through art, backed by decentralized ownership proofs.
            </p>
          </div>

          {/* Right Column: 3 Pricing Cards (Slide up with stagger) */}
          <div className="membership-cards-grid">
            {/* Plan 1: Monthly */}
            <div
              className={`pricing-card ${selectedPricing === 'monthly' ? 'selected' : ''}`}
              onClick={() => setSelectedPricing('monthly')}
            >
              <div className="plan-name">Monthly</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">9</span>
                <span className="decimal">.99</span>
              </div>
              <p className="plan-cycle">Regular monthly payment</p>
              <button
                className="plan-select-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/login');
                }}
              >
                Choose Monthly
              </button>
            </div>

            {/* Plan 2: Quarterly (Popular Highlight) */}
            <div
              className={`pricing-card popular-card ${selectedPricing === 'quarterly' ? 'selected' : ''}`}
              onClick={() => setSelectedPricing('quarterly')}
            >
              <div className="popular-badge">Popular</div>
              <div className="plan-name">Quarterly</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">12</span>
                <span className="decimal">.99</span>
              </div>
              <p className="plan-cycle">Regular monthly payment</p>
              <button
                className="plan-select-btn popular-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/login');
                }}
              >
                Choose Quarterly
              </button>
            </div>

            {/* Plan 3: Annually */}
            <div
              className={`pricing-card ${selectedPricing === 'annually' ? 'selected' : ''}`}
              onClick={() => setSelectedPricing('annually')}
            >
              <div className="plan-name">Annually</div>
              <div className="plan-price">
                <span className="currency">$</span>
                <span className="amount">19</span>
                <span className="decimal">.99</span>
              </div>
              <p className="plan-cycle">Get 15% off for 1 year</p>
              <button
                className="plan-select-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate('/login');
                }}
              >
                Choose Annual
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          13. VIBRANT LIME BANNER & HIGH-ENERGY TICKER
          ======================================================== */}
      <section className="pallet-lime-banner-section">
        {/* Infinite Top Ticker */}
        <div className="lime-ticker-wrapper">
          <div className="lime-ticker-track">
            {[...Array(6)].map((_, i) => (
              <span key={i} className="lime-ticker-item">
                Artists can ride <span className="ticker-chip red-chip">Adobe</span> Inspired by people <span className="ticker-chip blue-chip">Figma</span> New Art Place <span className="ticker-chip dark-chip">2025 POSTER</span>
              </span>
            ))}
          </div>
        </div>

        {/* Lime Geometric Sketch Card */}
        <div className="pallet-container">
          <div className="lime-interactive-card">
            <div className="lime-sketch-row">
              <div className="lime-sketch-icon"><Box size={26} /></div>
              <div className="lime-sketch-icon"><Gem size={26} /></div>
              <div className="lime-sketch-icon"><Scissors size={26} /></div>
              <div className="lime-sketch-icon"><PenTool size={26} /></div>
              <div className="lime-sketch-icon"><Lightbulb size={26} /></div>
              <div className="lime-sketch-icon"><CircleDot size={26} /></div>
              <div className="lime-sketch-icon"><Wand2 size={26} /></div>
              <div className="lime-sketch-icon"><Compass size={26} /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          14. DUAL FEATURE SPLIT: "Meets new people" & "Archive of new arts"
              (Enters Left to Right and Right to Left)
          ======================================================== */}
      <section className="pallet-dual-split-section">
        <div className="pallet-container dual-split-grid">
          {/* Card 1: Meets new people (Crimson - Enters from Left) */}
          <div className="split-card crimson-card">
            <div className="split-media">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=700&q=80"
                alt="Portrait of Blond Model"
              />
              <div className="split-floating-icon">
                <PenTool size={18} />
              </div>
            </div>
            <div className="split-content">
              <h3 className="split-title">Meets new people</h3>
              <p className="split-desc">
                Creators and enthusiasts to discover and purchase unique artworks across the global creative graph.
              </p>
              <button
                className="split-pill-cta"
                onClick={() => navigate('/login')}
              >
                Let's Meet
              </button>
            </div>
          </div>

          {/* Card 2: Archive of new arts (Botanical / Mint - Enters from Right) */}
          <div className="split-card mint-card">
            <div className="split-media">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=700&q=80"
                alt="3D Iridescent Blooming Flower Sculpture"
              />
              <div className="split-floating-icon">
                <Layers size={18} />
              </div>
            </div>
            <div className="split-content">
              <h3 className="split-title">Archive of new arts</h3>
              <p className="split-desc">
                Canvas Carousel is the platform where artists can ride the wave of creativity, showcasing their work to a broad audience.
              </p>
              <button
                className="split-pill-cta dark-pill"
                onClick={() => navigate('/login')}
              >
                Archives
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          15. FOOTER (Exact match to Home Page)
          ======================================================== */}
      <footer className="butter-footer" id="pricing">
        <div className="butter-container">
          {/* Top navigation grid */}
          <div className="footer-grid-top">
            <div className="footer-column">
              <span className="col-title">Explore</span>
              <ul className="col-links">
                <li><Link to="/product">Product</Link></li>
                <li><Link to="/#blocks">Blocks</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/#pricing">Pricing</Link></li>
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

      {/* ========================================================
          VIDEO PREVIEW MODAL
          ======================================================== */}
      {isVideoModalOpen && (
        <div className="pallet-video-modal-backdrop" onClick={() => setIsVideoModalOpen(false)}>
          <div className="pallet-video-modal-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close-btn"
              onClick={() => setIsVideoModalOpen(false)}
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <div className="modal-video-wrapper">
              <video
                src="/marketing-assets/images/product_learnZ_video.mp4"
                controls
                autoPlay
                className="modal-video-player"
              />
            </div>
            <div className="modal-caption">
              <h4>Masterclass Preview</h4>
              <p>Explore the full interactive creative walkthrough and platform highlights.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;