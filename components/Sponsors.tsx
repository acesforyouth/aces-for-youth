'use client';

import { motion } from 'framer-motion';

export default function Sponsors() {
  return (
    <section className="bg-[#FAF9F6] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas tracking-wide text-[#1a1a1a] mb-10"
          style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          SPONSORS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border-2 border-dashed border-gray-200 rounded-2xl p-16 text-center"
        >
          <p className="font-bebas text-4xl text-gray-300 tracking-wide mb-3">COMING SOON</p>
          <p className="font-dm text-gray-400 text-base">
            Interested in sponsoring Aces for Youth? Reach out via the contact section below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
