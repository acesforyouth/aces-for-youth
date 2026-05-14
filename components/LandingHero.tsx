'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSdAwDb3wE_5h-aVWKEGVd5RI61hHjp3U5zNGBimkxY5KsoAcw/viewform';

const details = [
  { label: 'Date', value: 'June 6, 2025 — Saturday' },
  { label: 'Location', value: 'Lifetime Activities Santa Clara, 2625 Hayward Dr' },
  { label: 'Format', value: 'Round Robin Singles' },
  { label: 'Entry Fee', value: '$20' },
  { label: 'Players', value: '18 competitors' },
  { label: 'Matches', value: '2 per player' },
  { label: 'Games Per Match', value: '6-game set' },
  { label: 'Courts', value: '4 courts' },
];

export default function LandingHero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#2D6A4F] relative overflow-hidden flex items-center"
    >
      {/* Diagonal stripe */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent 0px,
            transparent 24px,
            rgba(255,255,255,0.03) 24px,
            rgba(255,255,255,0.03) 25px
          )`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* LEFT — Program Overview */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 bg-[#F4A623] text-white text-sm font-dm font-semibold px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                Raising funds for Aceing Autism
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-bebas text-white leading-none tracking-wide mb-5"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 7rem)' }}
            >
              ACES FOR YOUTH
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-dm text-white/75 text-lg leading-relaxed mb-4"
            >
              A youth tennis tournament series for kids, giving players
              their first real competitive experience while raising funds for Aceing Autism.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="font-dm text-white/50 text-sm"
            >
              18 competitors · 2 guaranteed matches · 6-game sets · All proceeds to charity
            </motion.p>
          </div>

          {/* RIGHT — Registration + Tournament Details */}
          <div className="flex flex-col gap-4">
            {/* Registration */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl p-6"
            >
              <h2 className="font-bebas text-2xl text-[#2D6A4F] tracking-wide mb-2">
                Registration Process
              </h2>
              <p className="font-dm text-gray-500 text-sm leading-relaxed mb-5">
                Fill out the form with your name, age, and skill level. Every player is
                guaranteed 2 full matches — 6-game sets against real competition. The $20
                entry fee is due at check-in.
              </p>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#F4A623] text-white font-dm font-bold text-center py-3.5 rounded-xl hover:bg-[#e09510] transition-colors duration-200"
              >
                Register Now →
              </a>
            </motion.div>

            {/* Tournament Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.33 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bebas text-2xl text-white tracking-wide">
                  Tournament Details
                </h2>
                <span className="bg-[#F4A623] text-white font-dm font-bold text-xs px-3 py-1 rounded-full tracking-widest">
                  PILOT
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-5">
                {details.map(({ label, value }) => (
                  <div key={label}>
                    <p className="font-dm text-white/45 text-xs uppercase tracking-widest mb-0.5">
                      {label}
                    </p>
                    <p className="font-dm text-white text-sm font-medium">{value}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/bracket"
                className="flex items-center justify-center gap-2 w-full border border-white/30 text-white font-dm font-semibold text-sm py-2.5 rounded-xl hover:bg-white/10 transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M10 3v18M14 3v18" />
                </svg>
                View Bracket
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
