'use client';

import { motion } from 'framer-motion';

export default function Donations() {
  return (
    <section id="donate" className="bg-[#FAF9F6] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas tracking-wide text-[#1a1a1a] mb-10"
          style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          DONATION OPTIONS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
        >
          <p className="font-dm text-gray-500 text-lg leading-relaxed mb-6">
            Direct donation options are coming soon. For now, all entry fees from each tournament
            go directly to Aceing Autism. You can also donate to them directly.
          </p>
          <a
            href="https://aceingautism.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F4A623] text-white font-dm font-bold px-7 py-3 rounded-full hover:bg-[#e09510] transition-colors duration-200"
          >
            Donate to Aceing Autism →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
