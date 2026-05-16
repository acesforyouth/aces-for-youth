'use client';

function Kid({
  id,
  shirtColor = '#F4A623',
  flip = false,
  className = '',
}: {
  id: string;
  shirtColor?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
      <defs>
        <clipPath id={`rc-${id}`}>
          <ellipse cx="0" cy="-2" rx="13" ry="16" />
        </clipPath>
      </defs>

      {/* Shadow */}
      <ellipse cx="46" cy="156" rx="24" ry="5" fill="rgba(0,0,0,0.12)" />

      {/* ── SHOES ── */}
      <ellipse cx="30" cy="147" rx="13" ry="6" fill="#222" />
      <ellipse cx="58" cy="147" rx="13" ry="6" fill="#222" />

      {/* ── LEGS ── */}
      <rect x="22" y="112" width="14" height="38" rx="7" fill="#FDBCB4" />
      <rect x="50" y="112" width="14" height="38" rx="7" fill="#FDBCB4" />

      {/* ── SHORTS ── */}
      <rect x="18" y="96" width="50" height="24" rx="9" fill="#1e3d2a" />

      {/* ── SHIRT ── */}
      <rect x="16" y="58" width="54" height="46" rx="14" fill={shirtColor} />

      {/* ── LEFT ARM (down/out) ── */}
      <line x1="16" y1="72" x2="2" y2="94" stroke="#FDBCB4" strokeWidth="13" strokeLinecap="round" />

      {/* ── RIGHT ARM (raised, holding racket) ── */}
      <line x1="70" y1="68" x2="82" y2="44" stroke="#FDBCB4" strokeWidth="13" strokeLinecap="round" />

      {/* ── RACKET (at end of right arm ~82,44) ── */}
      <g transform="translate(85,26) rotate(10)">
        {/* Handle */}
        <rect x="-3.5" y="12" width="7" height="20" rx="3.5" fill="#9B6B3A" />
        {/* Frame */}
        <ellipse cx="0" cy="-2" rx="13" ry="16" fill="#F5F5E8" stroke="#9B6B3A" strokeWidth="3" />
        {/* Strings */}
        <g clipPath={`url(#rc-${id})`}>
          <line x1="-12" y1="-14" x2="12" y2="-14" stroke="#C5C580" strokeWidth="1" />
          <line x1="-13" y1="-7"  x2="13" y2="-7"  stroke="#C5C580" strokeWidth="1" />
          <line x1="-13" y1="0"   x2="13" y2="0"   stroke="#C5C580" strokeWidth="1" />
          <line x1="-13" y1="7"   x2="13" y2="7"   stroke="#C5C580" strokeWidth="1" />
          <line x1="-12" y1="14"  x2="12" y2="14"  stroke="#C5C580" strokeWidth="1" />
          <line x1="-6"  y1="-18" x2="-6"  y2="18" stroke="#C5C580" strokeWidth="1" />
          <line x1="0"   y1="-18" x2="0"   y2="18" stroke="#C5C580" strokeWidth="1" />
          <line x1="6"   y1="-18" x2="6"   y2="18" stroke="#C5C580" strokeWidth="1" />
        </g>
      </g>

      {/* ── NECK ── */}
      <rect x="36" y="46" width="14" height="14" rx="7" fill="#FDBCB4" />

      {/* ── HEAD ── */}
      <circle cx="43" cy="30" r="26" fill="#FDBCB4" />

      {/* Hair */}
      <path d="M17 26 C17 2 69 2 69 26 C62 12 24 12 17 26Z" fill="#3B1F08" />
      {/* Side hair bits */}
      <path d="M17 26 C15 34 16 40 20 44" stroke="#3B1F08" strokeWidth="6" strokeLinecap="round" fill="none" />

      {/* Ears */}
      <ellipse cx="17" cy="32" rx="5" ry="7" fill="#F0A898" />
      <ellipse cx="69" cy="32" rx="5" ry="7" fill="#F0A898" />

      {/* Eyes — big and expressive */}
      <circle cx="33" cy="29" r="7" fill="white" />
      <circle cx="53" cy="29" r="7" fill="white" />
      <circle cx="35" cy="30" r="4.5" fill="#1a1a1a" />
      <circle cx="55" cy="30" r="4.5" fill="#1a1a1a" />
      {/* Highlights */}
      <circle cx="37" cy="28" r="1.8" fill="white" />
      <circle cx="57" cy="28" r="1.8" fill="white" />

      {/* Eyebrows */}
      <path d="M27 20 Q33 16 39 20" stroke="#3B1F08" strokeWidth="2.2" strokeLinecap="round" fill="none" />
      <path d="M47 20 Q53 16 59 20" stroke="#3B1F08" strokeWidth="2.2" strokeLinecap="round" fill="none" />

      {/* Rosy cheeks */}
      <circle cx="25" cy="37" r="6" fill="#F4A0A0" opacity="0.4" />
      <circle cx="61" cy="37" r="6" fill="#F4A0A0" opacity="0.4" />

      {/* Smile */}
      <path d="M31 40 Q43 50 55 40" stroke="#C06060" strokeWidth="2.5" strokeLinecap="round" fill="none" />

      {/* Tennis ball */}
      <circle cx="10" cy="18" r="8" fill="#C9E64A" />
      <path d="M4 15 Q10 20 16 15" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.8" />
      <path d="M4 21 Q10 16 16 21" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.8" />
    </svg>
  );
}

export function SideKids() {
  return (
    <>
      {/* Left side */}
      <div className="absolute left-0 bottom-8 flex flex-col items-start pointer-events-none select-none z-0">
        <Kid id="L1" shirtColor="#ffffff" className="w-28 -ml-4 opacity-50" />
        <Kid id="L2" shirtColor="#F4A623" flip className="w-24 -ml-8 opacity-35 -mt-6" />
      </div>
      {/* Right side */}
      <div className="absolute right-0 bottom-8 flex flex-col items-end pointer-events-none select-none z-0">
        <Kid id="R1" shirtColor="#F4A623" flip className="w-28 -mr-4 opacity-50" />
        <Kid id="R2" shirtColor="#ffffff" className="w-24 -mr-8 opacity-35 -mt-6" />
      </div>
    </>
  );
}

export function DonateSideKids() {
  return (
    <>
      <div className="absolute left-0 bottom-0 pointer-events-none select-none">
        <Kid id="DL" shirtColor="#2D6A4F" className="w-36 -ml-12 opacity-15" />
      </div>
      <div className="absolute right-0 bottom-0 pointer-events-none select-none">
        <Kid id="DR" shirtColor="#2D6A4F" flip className="w-36 -mr-12 opacity-15" />
      </div>
    </>
  );
}
