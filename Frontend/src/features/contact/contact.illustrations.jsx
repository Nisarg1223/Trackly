import React from 'react';

// ----------------------------------------------------------------------
// Category 1: FUN - Wacky goofy smiling character sketch
// ----------------------------------------------------------------------
export const CategoryFunSvg = () => (
  <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="category-illustration-svg">
    {/* Background soft glow */}
    <circle cx="160" cy="160" r="140" fill="#FAF5FF" opacity="0.6" />
    
    {/* Spiky quirky hair */}
    <path 
      d="M95 125 C85 85 105 55 125 70 C140 45 165 40 175 65 C195 45 225 50 220 85 C240 85 248 105 235 130" 
      stroke="#1E1E2F" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
    />
    <path d="M125 70 L145 95 M175 65 L180 95 M220 85 L205 105" stroke="#1E1E2F" strokeWidth="2.5" strokeLinecap="round" />

    {/* Head shape */}
    <path 
      d="M100 130 C90 190 100 240 160 240 C220 240 230 190 220 130 C220 100 100 100 100 130 Z" 
      stroke="#1E1E2F" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="#FFFFFF"
    />

    {/* Big round goofy eyes */}
    <ellipse cx="132" cy="145" rx="18" ry="22" stroke="#1E1E2F" strokeWidth="3.5" fill="#FFFFFF" />
    <circle cx="134" cy="148" r="8" fill="#1E1E2F" />
    <circle cx="138" cy="144" r="3" fill="#FFFFFF" />

    <ellipse cx="188" cy="145" rx="18" ry="22" stroke="#1E1E2F" strokeWidth="3.5" fill="#FFFFFF" />
    <circle cx="186" cy="148" r="8" fill="#1E1E2F" />
    <circle cx="183" cy="144" r="3" fill="#FFFFFF" />

    {/* Eyebrows with quirky expression */}
    <path d="M118 118 Q132 110 148 120" stroke="#1E1E2F" strokeWidth="3.5" strokeLinecap="round" />
    <path d="M172 120 Q188 110 202 116" stroke="#1E1E2F" strokeWidth="3.5" strokeLinecap="round" />

    {/* Cute button nose */}
    <path d="M158 160 Q160 168 165 166" stroke="#1E1E2F" strokeWidth="3.5" strokeLinecap="round" />

    {/* Big grinning mouth with stick-out tongue */}
    <path 
      d="M120 185 Q160 218 200 185" 
      stroke="#1E1E2F" 
      strokeWidth="4" 
      strokeLinecap="round" 
    />
    {/* Cute tongue */}
    <path 
      d="M150 198 C150 225 175 225 175 198 Z" 
      fill="#FDA4AF" 
      stroke="#1E1E2F" 
      strokeWidth="3" 
      strokeLinejoin="round" 
    />
    <line x1="162" y1="202" x2="162" y2="216" stroke="#E11D48" strokeWidth="2" strokeLinecap="round" />

    {/* Freckles */}
    <circle cx="118" cy="170" r="2.5" fill="#F472B6" />
    <circle cx="125" cy="174" r="2.5" fill="#F472B6" />
    <circle cx="195" cy="170" r="2.5" fill="#F472B6" />
    <circle cx="202" cy="174" r="2.5" fill="#F472B6" />

    {/* Whimsical doodles & spark stars around */}
    <path d="M72 110 L78 125 L93 125 L81 134 L85 149 L72 140 L59 149 L63 134 L51 125 L66 125 Z" fill="#DDD6FE" stroke="#8B5CF6" strokeWidth="1.5" />
    <path d="M245 105 Q255 100 250 115 Q265 110 255 125" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" fill="none" />
  </svg>
);

// ----------------------------------------------------------------------
// Category 2: CATS - Elegant geometric line-art cat
// ----------------------------------------------------------------------
export const CategoryCatSvg = () => (
  <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="category-illustration-svg">
    <circle cx="160" cy="160" r="140" fill="#F8FAFC" opacity="0.6" />

    {/* Faceted geometric cat face */}
    <g stroke="#1E1E2F" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" fill="#FFFFFF">
      {/* Outer Ears */}
      <polygon points="160,80 120,40 100,110" />
      <polygon points="160,80 200,40 220,110" />
      {/* Inner ear facets */}
      <polygon points="120,40 135,75 105,95" fill="#F1F5F9" />
      <polygon points="200,40 185,75 215,95" fill="#F1F5F9" />

      {/* Forehead facets */}
      <polygon points="160,80 135,115 160,135 185,115" fill="#F8FAFC" />
      <polygon points="100,110 135,115 115,160 80,140" />
      <polygon points="220,110 185,115 205,160 240,140" />

      {/* Eyes Area */}
      <polygon points="135,115 160,135 135,155" fill="#F8FAFC" />
      <polygon points="185,115 160,135 185,155" fill="#F8FAFC" />

      {/* Cat Almond Eyes */}
      <polygon points="115,138 135,132 142,145 122,150" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.5" />
      <polygon points="205,138 185,132 178,145 198,150" fill="#38BDF8" stroke="#0F172A" strokeWidth="2.5" />
      {/* Cat Pupils */}
      <line x1="128" y1="135" x2="128" y2="147" stroke="#0F172A" strokeWidth="3" />
      <line x1="192" y1="135" x2="192" y2="147" stroke="#0F172A" strokeWidth="3" />

      {/* Snout & Cheeks */}
      <polygon points="160,135 150,175 160,185 170,175" fill="#FDA4AF" stroke="#E11D48" strokeWidth="2" />
      <polygon points="150,175 120,185 135,215 160,200" fill="#F8FAFC" />
      <polygon points="170,175 200,185 185,215 160,200" fill="#F8FAFC" />

      {/* Chin */}
      <polygon points="160,200 135,215 160,245 185,215" fill="#FFFFFF" />
      <polygon points="115,160 80,140 85,200 120,185" />
      <polygon points="205,160 240,140 235,200 200,185" />
    </g>

    {/* Whiskers */}
    <g stroke="#1E1E2F" strokeWidth="2" strokeLinecap="round" opacity="0.85">
      <line x1="110" y1="185" x2="50" y2="175" />
      <line x1="108" y1="193" x2="45" y2="195" />
      <line x1="112" y1="202" x2="55" y2="215" />

      <line x1="210" y1="185" x2="270" y2="175" />
      <line x1="212" y1="193" x2="275" y2="195" />
      <line x1="208" y1="202" x2="265" y2="215" />
    </g>
  </svg>
);

// ----------------------------------------------------------------------
// Category 3: FLOWERS - Girl with lush botanical blooming flower crown
// ----------------------------------------------------------------------
export const CategoryFlowersSvg = () => (
  <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="category-illustration-svg">
    <circle cx="160" cy="160" r="140" fill="#FDF2F8" opacity="0.6" />

    {/* Woman's delicate neck & face profile/front */}
    <path d="M135 220 L130 260 M185 220 L190 260" stroke="#1E1E2F" strokeWidth="3" strokeLinecap="round" />
    <path 
      d="M125 150 C120 195 135 225 160 225 C185 225 200 195 195 150" 
      stroke="#1E1E2F" 
      strokeWidth="3.2" 
      strokeLinecap="round" 
      fill="#FFFFFF"
    />

    {/* Eyes closed in peaceful bliss */}
    <path d="M138 175 Q148 183 158 175" stroke="#1E1E2F" strokeWidth="2.8" strokeLinecap="round" fill="none" />
    <path d="M162 175 Q172 183 182 175" stroke="#1E1E2F" strokeWidth="2.8" strokeLinecap="round" fill="none" />
    {/* Eyelashes */}
    <line x1="148" y1="180" x2="148" y2="185" stroke="#1E1E2F" strokeWidth="2" strokeLinecap="round" />
    <line x1="172" y1="180" x2="172" y2="185" stroke="#1E1E2F" strokeWidth="2" strokeLinecap="round" />

    {/* Soft smile */}
    <path d="M152 202 Q160 208 168 202" stroke="#E11D48" strokeWidth="3" strokeLinecap="round" fill="none" />

    {/* Lush blooming floral bouquet crowning hair */}
    {/* Center Peony Rose */}
    <g transform="translate(160, 110)">
      <circle cx="0" cy="0" r="32" fill="#FEE2E2" stroke="#1E1E2F" strokeWidth="3" />
      <path d="M-15 -10 C-5 -25 15 -25 22 -10 C30 10 10 25 -5 22 C-20 18 -25 5 -15 -10 Z" fill="#FCA5A5" stroke="#1E1E2F" strokeWidth="2" />
      <circle cx="0" cy="0" r="12" fill="#F43F5E" stroke="#1E1E2F" strokeWidth="2" />
    </g>

    {/* Left Blooming Rose */}
    <g transform="translate(110, 115)">
      <circle cx="0" cy="0" r="26" fill="#FDF4FF" stroke="#1E1E2F" strokeWidth="2.8" />
      <path d="M-10 -8 C0 -18 15 -15 18 -5 C20 10 5 18 -8 14 C-15 10 -15 0 -10 -8 Z" fill="#E879F9" opacity="0.7" stroke="#1E1E2F" strokeWidth="1.8" />
    </g>

    {/* Right Blooming Dahlia */}
    <g transform="translate(210, 115)">
      <circle cx="0" cy="0" r="26" fill="#FEF3C7" stroke="#1E1E2F" strokeWidth="2.8" />
      <path d="M-8 -8 C2 -18 18 -12 16 0 C15 12 0 16 -10 10 C-15 5 -14 -2 -8 -8 Z" fill="#FBBF24" opacity="0.8" stroke="#1E1E2F" strokeWidth="1.8" />
    </g>

    {/* Botanical leaves and stems */}
    <path d="M90 85 Q75 65 95 60 Q105 75 90 85 Z" fill="#BBF7D0" stroke="#1E1E2F" strokeWidth="2.2" />
    <path d="M230 85 Q245 65 225 60 Q215 75 230 85 Z" fill="#BBF7D0" stroke="#1E1E2F" strokeWidth="2.2" />
    <path d="M160 55 Q170 35 150 35 Q145 50 160 55 Z" fill="#86EFAC" stroke="#1E1E2F" strokeWidth="2" />

    {/* Hanging floral vines */}
    <path d="M95 140 Q80 170 95 200" stroke="#1E1E2F" strokeWidth="2" strokeDasharray="3 3" fill="none" />
    <circle cx="95" cy="205" r="4" fill="#F43F5E" />
    <path d="M225 140 Q240 170 225 200" stroke="#1E1E2F" strokeWidth="2" strokeDasharray="3 3" fill="none" />
    <circle cx="225" cy="205" r="4" fill="#38BDF8" />
  </svg>
);

// ----------------------------------------------------------------------
// Category 4: ANIMALS - Fluffy Alpaca / Llama line art
// ----------------------------------------------------------------------
export const CategoryAnimalSvg = () => (
  <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="category-illustration-svg">
    <circle cx="160" cy="160" r="140" fill="#F0FDF4" opacity="0.6" />

    {/* Llama long elegant neck with fluffy wool ruffles */}
    <path 
      d="M130 180 C125 220 120 250 110 270 M190 180 C195 220 200 250 210 270" 
      stroke="#1E1E2F" 
      strokeWidth="3.5" 
      strokeLinecap="round" 
    />
    {/* Wool puffs on neck */}
    <path d="M115 210 Q105 225 120 235" stroke="#1E1E2F" strokeWidth="2.5" fill="none" />
    <path d="M110 240 Q100 255 115 265" stroke="#1E1E2F" strokeWidth="2.5" fill="none" />
    <path d="M205 210 Q215 225 200 235" stroke="#1E1E2F" strokeWidth="2.5" fill="none" />

    {/* Long pointy upright ears */}
    <path d="M125 105 C115 65 130 50 140 70 C145 80 142 95 138 105 Z" fill="#FFFFFF" stroke="#1E1E2F" strokeWidth="3" />
    <path d="M130 75 C125 65 132 60 136 70" stroke="#FDA4AF" strokeWidth="2" fill="none" />

    <path d="M195 105 C205 65 190 50 180 70 C175 80 178 95 182 105 Z" fill="#FFFFFF" stroke="#1E1E2F" strokeWidth="3" />
    <path d="M190 75 C195 65 188 60 184 70" stroke="#FDA4AF" strokeWidth="2" fill="none" />

    {/* Cloud-like fluffy top tuft / hair */}
    <path 
      d="M130 100 C120 90 135 75 145 82 C155 70 175 75 175 85 C185 80 200 90 190 105 C195 115 185 125 175 120 C165 130 145 125 138 118 C125 120 120 110 130 100 Z" 
      fill="#FFFFFF" 
      stroke="#1E1E2F" 
      strokeWidth="3.5" 
      strokeLinejoin="round" 
    />

    {/* Llama face snout */}
    <path 
      d="M135 115 C130 145 135 175 160 175 C185 175 190 145 185 115" 
      fill="#FFFFFF" 
      stroke="#1E1E2F" 
      strokeWidth="3.2" 
      strokeLinecap="round" 
    />

    {/* Sweet cartoon eyes */}
    <ellipse cx="145" cy="135" rx="7" ry="8" fill="#1E1E2F" />
    <circle cx="147" cy="133" r="2.5" fill="#FFFFFF" />
    <ellipse cx="175" cy="135" rx="7" ry="8" fill="#1E1E2F" />
    <circle cx="177" cy="133" r="2.5" fill="#FFFFFF" />

    {/* Cute nose & smile */}
    <path d="M156 150 Q160 148 164 150 L160 156 Z" fill="#1E1E2F" />
    <path d="M160 156 L160 162 M154 162 Q160 167 166 162" stroke="#1E1E2F" strokeWidth="2.5" strokeLinecap="round" fill="none" />

    {/* Cute rosy cheeks */}
    <circle cx="138" cy="148" r="5" fill="#FDA4AF" opacity="0.75" />
    <circle cx="182" cy="148" r="5" fill="#FDA4AF" opacity="0.75" />

    {/* Festive Inca blanket / collar detail */}
    <path d="M125 240 Q160 260 195 240" stroke="#8B5CF6" strokeWidth="6" strokeLinecap="round" />
    <circle cx="140" cy="254" r="3" fill="#F59E0B" />
    <circle cx="160" cy="258" r="3" fill="#EC4899" />
    <circle cx="180" cy="254" r="3" fill="#10B981" />
  </svg>
);

// ----------------------------------------------------------------------
// Interactive Popsicle Character SVG for "More creative opportunities"
// ----------------------------------------------------------------------
export const PopsicleSvg = ({
  color = '#8B5CF6',
  variant = 'hero', // 'hero', 'left', 'right'
  className = '',
}) => {
  const stickColor = '#D4A373';
  const stickShadow = '#BC6C25';
  
  return (
    <svg viewBox="0 0 280 380" fill="none" xmlns="http://www.w3.org/2000/svg" className={`popsicle-svg ${className}`}>
      <defs>
        <linearGradient id={`popsicle-stick-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={stickColor} />
          <stop offset="70%" stopColor="#E6CCB2" />
          <stop offset="100%" stopColor={stickShadow} />
        </linearGradient>

        <linearGradient id={`popsicle-glaze-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0.85" />
        </linearGradient>

        <filter id={`glaze-shadow-${variant}`} x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor={color} floodOpacity="0.35" />
        </filter>
      </defs>

      {/* Wooden Stick */}
      <rect 
        x="122" 
        y="250" 
        width="36" 
        height="95" 
        rx="18" 
        fill={`url(#popsicle-stick-${variant})`} 
        stroke="#A57C52" 
        strokeWidth="2.5" 
      />
      <line x1="134" y1="265" x2="134" y2="330" stroke="#C48E58" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

      {/* Main Ice Cream Base Body (Creamy Biscuit Tone) */}
      <rect 
        x="65" 
        y="60" 
        width="150" 
        height="210" 
        rx="40" 
        fill="#FFF7ED" 
        stroke="#1E1E24" 
        strokeWidth="4" 
      />

      {/* Chocolate / Biscuit Crunch Texture Dots */}
      <g fill="#D97706" opacity="0.35">
        <circle cx="85" cy="230" r="3" />
        <circle cx="95" cy="245" r="2.5" />
        <circle cx="175" cy="235" r="3" />
        <circle cx="190" cy="225" r="2" />
        <circle cx="140" cy="248" r="2.5" />
      </g>

      {/* Melting Glaze / Frosting (Dripping down) */}
      <path 
        d="M 65 100 
           C 65 65 95 60 140 60 
           C 185 60 215 65 215 100 
           L 215 145 
           C 205 145 200 135 190 135 
           C 180 135 175 160 165 160 
           C 155 160 150 140 140 140 
           C 130 140 125 168 115 168 
           C 105 168 100 138 90 138 
           C 80 138 75 152 65 152 
           Z" 
        fill={`url(#popsicle-glaze-${variant})`} 
        filter={`url(#glaze-shadow-${variant})`}
        stroke="#1E1E24" 
        strokeWidth="3.5" 
        strokeLinejoin="round" 
      />

      {/* Glaze Highlight Shine */}
      <path 
        d="M 85 85 C 95 72 120 68 135 68" 
        stroke="#FFFFFF" 
        strokeWidth="4.5" 
        strokeLinecap="round" 
        opacity="0.8" 
      />
      <circle cx="145" cy="70" r="2.5" fill="#FFFFFF" opacity="0.9" />

      {/* Multi-colored Candies / Sprinkles on the Glaze */}
      <g strokeWidth="2.5" strokeLinecap="round">
        <line x1="88" y1="102" x2="98" y2="108" stroke="#FDE047" strokeWidth="3" />
        <line x1="120" y1="90" x2="132" y2="92" stroke="#38BDF8" strokeWidth="3" />
        <line x1="155" y1="100" x2="165" y2="95" stroke="#F43F5E" strokeWidth="3" />
        <line x1="180" y1="110" x2="190" y2="116" stroke="#4ADE80" strokeWidth="3" />
        <circle cx="108" cy="120" r="3.5" fill="#FB923C" stroke="#1E1E24" strokeWidth="1" />
        <circle cx="170" cy="122" r="3.5" fill="#F472B6" stroke="#1E1E24" strokeWidth="1" />
      </g>

      {/* Facial Expressions based on variant */}
      {variant === 'hero' && (
        <g>
          {/* Left Winking Eye */}
          <path d="M96 178 Q108 170 120 178" stroke="#1E1E24" strokeWidth="4" strokeLinecap="round" fill="none" />
          
          {/* Right Wide Open Eye with sparkle */}
          <ellipse cx="162" cy="176" rx="14" ry="16" fill="#1E1E24" />
          <circle cx="166" cy="172" r="5" fill="#FFFFFF" />
          <circle cx="158" cy="182" r="2" fill="#FFFFFF" />

          {/* Rosy Cheeks */}
          <circle cx="95" cy="195" r="9" fill="#FDA4AF" opacity="0.85" />
          <circle cx="175" cy="195" r="9" fill="#FDA4AF" opacity="0.85" />

          {/* Huge Happy Grin with Tooth & Tongue */}
          <path 
            d="M 112 195 Q 135 228 158 195 Z" 
            fill="#1E1E24" 
            stroke="#1E1E24" 
            strokeWidth="3.5" 
            strokeLinejoin="round" 
          />
          {/* White tooth */}
          <path d="M 125 195 L 138 195 Q 138 202 125 202 Z" fill="#FFFFFF" />
          {/* Pink tongue */}
          <path d="M 128 214 Q 135 220 144 214 Z" fill="#FB7185" />
        </g>
      )}

      {variant === 'left' && (
        <g>
          {/* Cool Sunglasses */}
          <path d="M88 170 L128 170 L122 188 L94 188 Z" fill="#1E1E24" />
          <path d="M142 170 L182 170 L176 188 L148 188 Z" fill="#1E1E24" />
          <line x1="128" y1="174" x2="142" y2="174" stroke="#1E1E24" strokeWidth="3.5" />
          {/* Sunglasses glint */}
          <line x1="94" y1="174" x2="108" y2="184" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
          <line x1="148" y1="174" x2="162" y2="184" stroke="#FFFFFF" strokeWidth="2" opacity="0.8" />
          {/* Smirk */}
          <path d="M125 205 Q140 215 155 204" stroke="#1E1E24" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        </g>
      )}

      {variant === 'right' && (
        <g>
          {/* Two round excited eyes */}
          <ellipse cx="108" cy="175" rx="10" ry="12" fill="#1E1E24" />
          <circle cx="111" cy="172" r="3.5" fill="#FFFFFF" />
          <ellipse cx="162" cy="175" rx="10" ry="12" fill="#1E1E24" />
          <circle cx="165" cy="172" r="3.5" fill="#FFFFFF" />
          {/* Cute open smile */}
          <path d="M120 198 Q135 218 150 198" stroke="#1E1E24" strokeWidth="3.5" strokeLinecap="round" fill="#FDA4AF" />
          <circle cx="95" cy="192" r="6" fill="#F472B6" opacity="0.6" />
          <circle cx="175" cy="192" r="6" fill="#F472B6" opacity="0.6" />
        </g>
      )}
    </svg>
  );
};

// ----------------------------------------------------------------------
// Japanese Koi Pond Illustration for "Let's color in now"
// Outline and Color versions for dynamic scroll-triggered coloring
// ----------------------------------------------------------------------
export const KoiPondSvg = ({ isColored = false }) => {
  const waterFill = isColored ? '#0F4C47' : '#FFFFFF';
  const waterRipples = isColored ? '#14B8A6' : '#E2E8F0';
  const padDark = isColored ? '#15803D' : '#F1F5F9';
  const padLight = isColored ? '#4ADE80' : '#FFFFFF';
  const padStroke = isColored ? '#14532D' : '#94A3B8';
  const koiOrange = isColored ? '#EA580C' : '#FFFFFF';
  const koiRed = isColored ? '#DC2626' : '#F8FAFC';
  const koiWhite = isColored ? '#FFFFFF' : '#FFFFFF';
  const koiStroke = isColored ? '#18181B' : '#64748B';
  const lotusPink = isColored ? '#F472B6' : '#FFFFFF';
  const lotusCenter = isColored ? '#FBBF24' : '#E2E8F0';

  return (
    <svg viewBox="0 0 720 540" fill="none" xmlns="http://www.w3.org/2000/svg" className="koi-pond-svg">
      <defs>
        {isColored && (
          <>
            <radialGradient id="water-gradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#115E59" />
              <stop offset="60%" stopColor="#0F4C47" />
              <stop offset="100%" stopColor="#042F2E" />
            </radialGradient>
            <linearGradient id="koi-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="50%" stopColor="#EA580C" />
              <stop offset="100%" stopColor="#C2410C" />
            </linearGradient>
            <linearGradient id="koi-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EF4444" />
              <stop offset="70%" stopColor="#B91C1C" />
              <stop offset="100%" stopColor="#1E1B4B" />
            </linearGradient>
          </>
        )}
      </defs>

      {/* Pond Water Base */}
      <rect 
        width="720" 
        height="540" 
        rx="28" 
        fill={isColored ? 'url(#water-gradient)' : '#FAFAFA'} 
        stroke={isColored ? 'none' : '#E2E8F0'} 
        strokeWidth="2" 
      />

      {/* Water Ripples & Concentric Circles */}
      <g stroke={waterRipples} strokeWidth={isColored ? '2' : '1.5'} strokeLinecap="round" opacity={isColored ? 0.4 : 0.6}>
        <circle cx="360" cy="270" r="180" strokeDasharray="12 18" />
        <circle cx="360" cy="270" r="230" strokeDasharray="18 24" />
        <ellipse cx="230" cy="180" rx="60" ry="30" strokeDasharray="8 12" />
        <ellipse cx="500" cy="380" rx="75" ry="35" strokeDasharray="10 14" />
      </g>

      {/* ------------------------------------------------------------- */}
      {/* LILY PADS (Water Lotus Leaves) */}
      {/* ------------------------------------------------------------- */}
      {/* Lily Pad Top Right */}
      <g transform="translate(520, 110)">
        <path 
          d="M 0 0 C 45 -45 105 -15 110 40 C 115 95 65 130 10 115 C -45 100 -55 35 0 0 Z" 
          fill={padLight} 
          stroke={padStroke} 
          strokeWidth="3" 
        />
        {/* Notch cutout */}
        <path d="M 25 55 L -10 20" stroke={padStroke} strokeWidth="2.5" />
        {/* Veins */}
        <path d="M 25 55 L 75 15 M 25 55 L 90 65 M 25 55 L 50 100 M 25 55 L 5 85" stroke={padDark} strokeWidth="1.8" opacity="0.6" />
      </g>

      {/* Lily Pad Left Middle */}
      <g transform="translate(110, 240)">
        <path 
          d="M 0 0 C 60 -50 130 -10 135 60 C 140 125 70 155 10 135 C -50 115 -60 45 0 0 Z" 
          fill={padDark} 
          stroke={padStroke} 
          strokeWidth="3.2" 
        />
        <path d="M 40 65 L -15 35" stroke={padStroke} strokeWidth="2.8" />
        <path d="M 40 65 L 105 25 M 40 65 L 120 75 M 40 65 L 85 125 M 40 65 L 15 115" stroke={padLight} strokeWidth="2" opacity="0.5" />
      </g>

      {/* Small Floating Lily Pad Bottom Center */}
      <g transform="translate(310, 410)">
        <path 
          d="M 0 0 C 35 -30 75 -5 80 35 C 85 75 45 90 10 80 C -25 70 -30 25 0 0 Z" 
          fill={padLight} 
          stroke={padStroke} 
          strokeWidth="2.5" 
        />
        <path d="M 25 40 L -5 20" stroke={padStroke} strokeWidth="2" />
      </g>

      {/* Tiny Lily Pad Top Left */}
      <g transform="translate(180, 80)">
        <ellipse cx="0" cy="0" rx="35" ry="26" fill={padLight} stroke={padStroke} strokeWidth="2.5" />
        <path d="M 0 0 L -25 -10" stroke={padStroke} strokeWidth="2" />
      </g>

      {/* ------------------------------------------------------------- */}
      {/* KOI FISH 1 (Swimming Clockwise Downward - Golden Orange) */}
      {/* ------------------------------------------------------------- */}
      <g transform="translate(260, 220) rotate(-45)">
        {/* Tail Fins */}
        <path 
          d="M 0 140 C -30 180 -40 210 -15 225 C 0 200 15 210 25 225 C 45 205 35 175 0 140 Z" 
          fill={isColored ? '#FDBA74' : '#F1F5F9'} 
          stroke={koiStroke} 
          strokeWidth="2.5" 
          opacity="0.85" 
        />
        {/* Tail fin rays */}
        <line x1="0" y1="150" x2="-15" y2="215" stroke={koiStroke} strokeWidth="1.5" opacity="0.5" />
        <line x1="0" y1="150" x2="5" y2="215" stroke={koiStroke} strokeWidth="1.5" opacity="0.5" />
        <line x1="0" y1="150" x2="22" y2="215" stroke={koiStroke} strokeWidth="1.5" opacity="0.5" />

        {/* Pectoral Fins (Left & Right) */}
        <path d="M -28 50 C -65 60 -75 85 -55 95 C -40 90 -30 70 -20 60 Z" fill={isColored ? '#FED7AA' : '#FFFFFF'} stroke={koiStroke} strokeWidth="2" />
        <path d="M 28 50 C 65 60 75 85 55 95 C 40 90 30 70 20 60 Z" fill={isColored ? '#FED7AA' : '#FFFFFF'} stroke={koiStroke} strokeWidth="2" />

        {/* Fish Main Body */}
        <path 
          d="M 0 -40 C 40 -10 42 70 0 150 C -42 70 -40 -10 0 -40 Z" 
          fill={isColored ? 'url(#koi-grad-1)' : '#FFFFFF'} 
          stroke={koiStroke} 
          strokeWidth="3.5" 
        />

        {/* Koi Calico Pattern Markings (White & Black spots) */}
        {isColored ? (
          <>
            {/* White patches */}
            <path d="M -12 -10 C 5 -20 22 -5 15 20 C 5 35 -15 15 -12 -10 Z" fill="#FFFFFF" stroke={koiStroke} strokeWidth="1.5" />
            <path d="M -5 70 C 18 60 20 95 5 110 C -15 105 -18 80 -5 70 Z" fill="#FFFFFF" stroke={koiStroke} strokeWidth="1.5" />
            {/* Black ink spots */}
            <path d="M 5 0 C 15 -5 18 10 10 15 C 2 18 -2 8 5 0 Z" fill="#18181B" />
            <path d="M -10 85 C -2 80 0 95 -6 98 C -12 98 -14 90 -10 85 Z" fill="#18181B" />
          </>
        ) : (
          <path d="M -12 -10 C 5 -20 22 -5 15 20 C 5 35 -15 15 -12 -10 Z" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        )}

        {/* Eyes & Whiskers */}
        <circle cx="-16" cy="-22" r="3.5" fill="#18181B" />
        <circle cx="16" cy="-22" r="3.5" fill="#18181B" />
        <path d="M -6 -38 Q -15 -48 -22 -42" stroke={koiStroke} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 6 -38 Q 15 -48 22 -42" stroke={koiStroke} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>

      {/* ------------------------------------------------------------- */}
      {/* KOI FISH 2 (Swimming Upward in Circle - Ruby Red & Calico) */}
      {/* ------------------------------------------------------------- */}
      <g transform="translate(460, 310) rotate(135)">
        {/* Tail Fins */}
        <path 
          d="M 0 140 C -30 180 -40 210 -15 225 C 0 200 15 210 25 225 C 45 205 35 175 0 140 Z" 
          fill={isColored ? '#FCA5A5' : '#F1F5F9'} 
          stroke={koiStroke} 
          strokeWidth="2.5" 
          opacity="0.85" 
        />
        <line x1="0" y1="150" x2="-15" y2="215" stroke={koiStroke} strokeWidth="1.5" opacity="0.5" />
        <line x1="0" y1="150" x2="22" y2="215" stroke={koiStroke} strokeWidth="1.5" opacity="0.5" />

        {/* Pectoral Fins */}
        <path d="M -28 50 C -65 60 -75 85 -55 95 C -40 90 -30 70 -20 60 Z" fill={isColored ? '#FECDD3' : '#FFFFFF'} stroke={koiStroke} strokeWidth="2" />
        <path d="M 28 50 C 65 60 75 85 55 95 C 40 90 30 70 20 60 Z" fill={isColored ? '#FECDD3' : '#FFFFFF'} stroke={koiStroke} strokeWidth="2" />

        {/* Fish Body */}
        <path 
          d="M 0 -40 C 40 -10 42 70 0 150 C -42 70 -40 -10 0 -40 Z" 
          fill={isColored ? 'url(#koi-grad-2)' : '#FFFFFF'} 
          stroke={koiStroke} 
          strokeWidth="3.5" 
        />

        {isColored ? (
          <>
            <path d="M -15 15 C 8 5 22 25 10 45 C -8 55 -20 35 -15 15 Z" fill="#FFFFFF" stroke={koiStroke} strokeWidth="1.5" />
            <path d="M 0 65 C 15 60 18 80 5 95 C -10 90 -12 75 0 65 Z" fill="#FFFFFF" stroke={koiStroke} strokeWidth="1.5" />
            <path d="M -5 30 C 5 25 10 35 2 40 C -5 42 -8 35 -5 30 Z" fill="#18181B" />
          </>
        ) : (
          <path d="M -15 15 C 8 5 22 25 10 45 C -8 55 -20 35 -15 15 Z" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        )}

        <circle cx="-16" cy="-22" r="3.5" fill="#18181B" />
        <circle cx="16" cy="-22" r="3.5" fill="#18181B" />
        <path d="M -6 -38 Q -15 -48 -22 -42" stroke={koiStroke} strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M 6 -38 Q 15 -48 22 -42" stroke={koiStroke} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      </g>

      {/* ------------------------------------------------------------- */}
      {/* WATER LOTUS FLOWERS (Blooming on water) */}
      {/* ------------------------------------------------------------- */}
      <g transform="translate(190, 190)">
        {/* Layered lotus petals */}
        <path d="M 0 -25 C 15 -15 20 10 0 20 C -20 10 -15 -15 0 -25 Z" fill={lotusPink} stroke={koiStroke} strokeWidth="2" />
        <path d="M -18 -8 C -5 -25 15 -15 18 10 C 5 22 -15 10 -18 -8 Z" fill={lotusPink} stroke={koiStroke} strokeWidth="1.8" opacity="0.85" />
        <path d="M 18 -8 C 5 -25 -15 -15 -18 10 C -5 22 15 10 18 -8 Z" fill={lotusPink} stroke={koiStroke} strokeWidth="1.8" opacity="0.85" />
        <circle cx="0" cy="5" r="7" fill={lotusCenter} stroke={koiStroke} strokeWidth="1.5" />
      </g>

      <g transform="translate(560, 360)">
        <path d="M 0 -20 C 12 -12 16 8 0 16 C -16 8 -12 -12 0 -20 Z" fill={lotusPink} stroke={koiStroke} strokeWidth="2" />
        <circle cx="0" cy="4" r="5" fill={lotusCenter} stroke={koiStroke} strokeWidth="1.5" />
      </g>
    </svg>
  );
};

// ----------------------------------------------------------------------
// iPad & Apple Pencil Mockup SVG
// ----------------------------------------------------------------------
export const IpadStylusSvg = () => (
  <svg viewBox="0 0 680 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="ipad-stylus-svg">
    <defs>
      <linearGradient id="ipad-body-metal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="50%" stopColor="#CBD5E1" />
        <stop offset="100%" stopColor="#94A3B8" />
      </linearGradient>

      <linearGradient id="pencil-body" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="60%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>

      <filter id="ipad-shadow" x="-5%" y="-5%" width="110%" height="115%">
        <feDropShadow dx="0" dy="16" stdDeviation="24" floodColor="#0F172A" floodOpacity="0.35" />
      </filter>
    </defs>

    {/* iPad Outer Aluminium Body */}
    <rect 
      x="50" 
      y="30" 
      width="580" 
      height="380" 
      rx="28" 
      fill="url(#ipad-body-metal)" 
      filter="url(#ipad-shadow)" 
      stroke="#64748B" 
      strokeWidth="2.5" 
    />

    {/* Black Display Bezel */}
    <rect 
      x="62" 
      y="42" 
      width="556" 
      height="356" 
      rx="20" 
      fill="#0B0F19" 
    />

    {/* Camera dot */}
    <circle cx="340" cy="50" r="3.5" fill="#1E293B" stroke="#334155" strokeWidth="1" />

    {/* iPad Screen Active Area */}
    <rect 
      x="78" 
      y="58" 
      width="524" 
      height="324" 
      rx="12" 
      fill="#FFFFFF" 
    />

    {/* In-app Top Bar UI */}
    <rect x="78" y="58" width="524" height="34" fill="#F8FAFC" />
    <circle cx="98" cy="75" r="4.5" fill="#EF4444" />
    <circle cx="112" cy="75" r="4.5" fill="#F59E0B" />
    <circle cx="126" cy="75" r="4.5" fill="#10B981" />
    <rect x="150" y="70" width="70" height="10" rx="5" fill="#E2E8F0" />

    {/* Left Toolbar */}
    <rect x="86" y="105" width="28" height="200" rx="14" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
    <circle cx="100" cy="125" r="8" fill="#8B5CF6" />
    <circle cx="100" cy="150" r="7" fill="#CBD5E1" />
    <circle cx="100" cy="175" r="7" fill="#CBD5E1" />
    <circle cx="100" cy="200" r="7" fill="#CBD5E1" />
    <circle cx="100" cy="225" r="7" fill="#CBD5E1" />

    {/* Canvas Content: Purple Cartoon Monster being coloured */}
    <g transform="translate(240, 120)">
      {/* Monster Body */}
      <rect x="0" y="0" width="160" height="180" rx="36" fill="#8B5CF6" stroke="#1E1B4B" strokeWidth="3.5" />
      {/* Hair Tuft */}
      <path d="M 45 0 C 40 -25 65 -30 80 -10 C 95 -30 120 -25 115 0 Z" fill="#6D28D9" stroke="#1E1B4B" strokeWidth="3" />
      {/* Two Eyes */}
      <ellipse cx="55" cy="55" rx="16" ry="18" fill="#FFFFFF" stroke="#1E1B4B" strokeWidth="3" />
      <circle cx="58" cy="56" r="7" fill="#1E1B4B" />
      <ellipse cx="105" cy="55" rx="16" ry="18" fill="#FFFFFF" stroke="#1E1B4B" strokeWidth="3" />
      <circle cx="102" cy="56" r="7" fill="#1E1B4B" />
      {/* Cute Monster Mouth with 2 little fangs */}
      <path d="M 45 105 Q 80 145 115 105 Z" fill="#4C1D95" stroke="#1E1B4B" strokeWidth="3" />
      <polygon points="60,105 66,115 72,105" fill="#FFFFFF" />
      <polygon points="88,105 94,115 100,105" fill="#FFFFFF" />
      {/* Freckles */}
      <circle cx="45" cy="85" r="3" fill="#FDE047" />
      <circle cx="50" cy="95" r="2.5" fill="#FDE047" />
      <circle cx="115" cy="85" r="3" fill="#FDE047" />
      <circle cx="110" cy="95" r="2.5" fill="#FDE047" />
    </g>

    {/* Right Color Palette Panel on iPad */}
    <g transform="translate(485, 110)">
      <rect x="0" y="0" width="105" height="190" rx="16" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect x="12" y="14" width="36" height="36" rx="8" fill="#F43F5E" />
      <rect x="56" y="14" width="36" height="36" rx="8" fill="#FB923C" />
      <rect x="12" y="58" width="36" height="36" rx="8" fill="#FACC15" />
      <rect x="56" y="58" width="36" height="36" rx="8" fill="#4ADE80" />
      <rect x="12" y="102" width="36" height="36" rx="8" fill="#38BDF8" />
      <rect x="56" y="102" width="36" height="36" rx="8" fill="#8B5CF6" />
      <rect x="12" y="146" width="36" height="36" rx="8" fill="#EC4899" />
      <rect x="56" y="146" width="36" height="36" rx="8" fill="#18181B" />
    </g>

    {/* Stylus Sparkles at contact point */}
    <g transform="translate(365, 220)">
      <circle cx="0" cy="0" r="12" fill="#FDE047" opacity="0.4" />
      <path d="M 0 -8 L 2 -2 L 8 0 L 2 2 L 0 8 L -2 2 L -8 0 L -2 -2 Z" fill="#FACC15" />
    </g>

    {/* Hand Holding Apple Pencil Drawing onto the Screen */}
    <g transform="translate(365, 220) rotate(-35)">
      {/* Apple Pencil Stylus */}
      {/* Pencil Nib */}
      <polygon points="0,0 -4,14 4,14" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="0.8" />
      {/* Pencil Body */}
      <rect x="-4" y="14" width="8" height="210" rx="3" fill="url(#pencil-body)" stroke="#CBD5E1" strokeWidth="1" />
      {/* Apple Logo band on top */}
      <rect x="-4" y="195" width="8" height="6" fill="#94A3B8" opacity="0.5" />

      {/* Hand & Fingers holding the pencil */}
      <path 
        d="M 12 60 C 25 55 45 68 55 90 C 70 120 75 160 55 190 C 35 220 5 210 -15 195 C -35 180 -30 140 -20 110 C -12 85 2 65 12 60 Z" 
        fill="#FBCFE8" 
        opacity="0.85" 
        stroke="#F472B6" 
        strokeWidth="2" 
      />
      {/* Index Finger */}
      <path d="M 4 70 C 15 65 25 78 20 95 C 15 110 0 115 -2 100 Z" fill="#FCE7F3" stroke="#F472B6" strokeWidth="1.8" />
      {/* Thumb */}
      <path d="M -8 80 C -20 85 -22 105 -12 118 C -2 125 4 112 2 95 Z" fill="#FCE7F3" stroke="#F472B6" strokeWidth="1.8" />
    </g>
  </svg>
);
