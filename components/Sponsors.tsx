'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Sponsors() {
  return (
    <section className="bg-[#2D6A4F] py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg, transparent 0px, transparent 30px,
            rgba(255,255,255,0.03) 30px, rgba(255,255,255,0.03) 31px
          )`,
        }}
      />
      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas tracking-wide text-white mb-10"
          style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          SPONSORS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/10 border border-white/20 rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="px-8 py-5 flex items-center justify-between border-b border-white/10">
            <span className="font-dm text-white/60 text-xs uppercase tracking-widest font-semibold">
              Court Sponsor
            </span>
            <span className="bg-[#F4A623] text-white font-dm font-bold text-xs px-3 py-1 rounded-full tracking-widest">
              PRESENTING
            </span>
          </div>

          {/* Body */}
          <div className="px-8 py-8">
            <div className="mb-5">
              <Image
                src="https://www.lifetimeactivities.com/wp-content/themes/customizr-child/assets/front/img/lta-logo-3.svg"
                alt="Lifetime Activities"
                width={220}
                height={60}
                className="object-contain"
                unoptimized
              />
            </div>
            <p className="font-dm text-white/60 font-semibold text-sm mb-5">
              Santa Clara Tennis Center
            </p>

            <p className="font-dm text-white/75 text-base leading-relaxed mb-6">
              Lifetime Activities – Santa Clara has generously sponsored our courts for the Aces
              for Youth tournament. With over 30 years of experience and more than 15,000 students
              served, they are one of the premier tennis programs in the Bay Area — offering
              lessons, camps, and competition training for all ages and abilities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-dm text-white/45 text-xs uppercase tracking-widest mb-1">Location</p>
                <p className="font-dm text-white text-sm font-medium leading-snug">
                  2625 Hayward Dr<br />Santa Clara, CA 95051
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <p className="font-dm text-white/45 text-xs uppercase tracking-widest mb-1">Facility</p>
                <p className="font-dm text-white text-sm font-medium leading-snug">
                  8 tennis courts<br />On-site tennis pro shop
                </p>
              </div>
            </div>

            <a
              href="https://www.lifetimeactivities.com/santa-clara/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-dm font-semibold text-sm text-white/70 hover:text-[#F4A623] transition-colors duration-200"
            >
              Visit Lifetime Activities →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
