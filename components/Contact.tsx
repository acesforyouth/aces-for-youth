'use client';

import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#FAF9F6] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas tracking-wide text-[#1a1a1a] mb-10"
          style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          CONTACT INFORMATION
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
        >
          <p className="font-dm text-gray-500 text-lg leading-relaxed mb-5">
            Have questions about the tournament, registration, or want to get involved?
          </p>
          <a
            href="mailto:acesforyouth1@gmail.com"
            className="inline-flex items-center gap-2 font-dm font-semibold text-[#2D6A4F] text-lg hover:text-[#F4A623] transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            acesforyouth1@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
