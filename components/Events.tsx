'use client';

import { motion } from 'framer-motion';
import { useToast } from './Toast';

const events = [
  {
    title: 'Pilot Tournament',
    date: 'June 6, 2025 — Saturday',
    location: 'Location TBD',
    format: 'Round Robin Singles',
    players: 16,
    courts: 4,
    fee: '$20',
    isPilot: true,
    isComingSoon: false,
  },
  {
    title: 'Fall Season — Event 1',
    date: 'TBD',
    location: 'TBD',
    format: 'Round Robin Singles',
    players: null,
    courts: null,
    fee: '$20',
    isPilot: false,
    isComingSoon: true,
  },
  {
    title: 'Fall Season — Event 2',
    date: 'TBD',
    location: 'TBD',
    format: 'Round Robin Singles',
    players: null,
    courts: null,
    fee: '$20',
    isPilot: false,
    isComingSoon: true,
  },
];

type Event = (typeof events)[0];

function CalendarIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function RacketIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
      <circle cx="10" cy="10" r="7" />
      <line x1="15" y1="15" x2="21" y2="21" />
      <line x1="7" y1="10" x2="13" y2="10" />
      <line x1="10" y1="7" x2="10" y2="13" />
    </svg>
  );
}

function EventCard({ event, index }: { event: Event; index: number }) {
  const { showToast } = useToast();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className={`relative bg-white rounded-2xl p-8 flex flex-col shadow-sm border transition-shadow duration-200 hover:shadow-md ${
        event.isPilot ? 'border-[#F4A623]/40' : 'border-gray-100'
      }`}
    >
      {event.isPilot && (
        <div className="absolute top-5 right-5 bg-[#F4A623] text-white font-dm font-bold text-xs px-3 py-1 rounded-full tracking-widest uppercase">
          Pilot
        </div>
      )}

      <h3 className="font-bebas text-2xl tracking-wide text-[#1a1a1a] mb-4 pr-16 leading-tight">
        {event.title}
      </h3>

      <div className="flex flex-col gap-2.5 mb-6 flex-1">
        <div className="flex items-center gap-2 text-gray-400 text-sm font-dm">
          <CalendarIcon />
          {event.date}
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm font-dm">
          <LocationIcon />
          {event.location}
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm font-dm">
          <RacketIcon />
          {event.format}
        </div>
        {event.players && event.courts && (
          <p className="text-gray-400 text-sm font-dm pl-6">
            {event.players} players · {event.courts} courts
          </p>
        )}
      </div>

      <div className="flex items-center justify-between pt-5 border-t border-gray-100">
        <span className="font-bebas text-2xl text-[#2D6A4F] tracking-wide">{event.fee} entry</span>
        {event.isComingSoon ? (
          <span className="font-dm text-sm text-gray-300 font-medium">Coming Soon</span>
        ) : (
          <button
            onClick={() => showToast('Registration coming soon! 🎾')}
            className="bg-[#2D6A4F] text-white font-dm font-semibold text-sm px-5 py-2 rounded-full hover:bg-[#1a3d2d] transition-colors duration-200"
          >
            Register
          </button>
        )}
      </div>
    </motion.div>
  );
}

export default function Events() {
  return (
    <section id="events" className="bg-[#FAF9F6] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas tracking-wide text-[#1a1a1a] mb-14"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          UPCOMING EVENTS
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {events.map((event, i) => (
            <EventCard key={event.title} event={event} index={i} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center font-dm text-gray-400 text-sm"
        >
          Season runs biannually — Fall and Spring. 3 tournaments per season, every other week.
        </motion.p>
      </div>
    </section>
  );
}
