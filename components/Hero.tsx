'use client';

import { motion } from 'framer-motion';
import { useToast } from './Toast';

export default function Hero() {
  const { showToast } = useToast();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D6A4F] via-[#245a42] to-[#1a3d2d]" />

      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent 0px,
            transparent 24px,
            rgba(255,255,255,0.035) 24px,
            rgba(255,255,255,0.035) 25px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-16">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-block"
        >
          <motion.div
            animate={{ y: [0, -7, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
            className="inline-flex items-center gap-2.5 bg-[#F4A623] text-white text-sm font-dm font-semibold px-5 py-2.5 rounded-full shadow-lg"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Raising funds for Aceing Autism
          </motion.div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-bebas text-white leading-none mb-6 tracking-wide"
          style={{ fontSize: 'clamp(4rem, 13vw, 10rem)' }}
        >
          ACES FOR YOUTH
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-dm text-white/75 text-xl md:text-2xl mb-12 font-light max-w-xl mx-auto"
        >
          Competitive tennis. Real experience. Real impact.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => showToast('Registration coming soon! 🎾')}
            className="bg-[#F4A623] text-white font-dm font-bold text-lg px-10 py-4 rounded-full hover:bg-[#e09510] transition-all duration-200 hover:scale-105 shadow-lg"
          >
            Register Now
          </button>
          <a
            href="#mission"
            className="border-2 border-white/60 text-white font-dm font-bold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-[#2D6A4F] transition-all duration-200 hover:scale-105 text-center"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center items-start p-1.5">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-2 bg-white/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
