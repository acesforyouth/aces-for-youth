'use client';

import { motion } from 'framer-motion';

const DONATE_URL = 'https://aceingautism.app.neoncrm.com/forms/acesforyouth';

const impacts = [
  { amount: '$10', description: 'Covers tennis balls for one child\'s session' },
  { amount: '$25', description: 'Funds a full lesson for a child with autism' },
  { amount: '$50', description: 'Sponsors a child\'s entire program week' },
];

export default function Donations() {
  return (
    <section id="donate" className="bg-[#FAF9F6] py-24 px-6 relative overflow-hidden">
<div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <span className="inline-flex items-center gap-2 bg-[#2D6A4F]/10 text-[#2D6A4F] text-xs font-dm font-semibold px-4 py-1.5 rounded-full uppercase tracking-widest">
            100% goes to charity
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="font-bebas tracking-wide text-[#1a1a1a] mb-4"
          style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          MAKE A DIFFERENCE
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-dm text-gray-500 text-lg leading-relaxed mb-10 max-w-2xl"
        >
          Every dollar donated goes directly to ACEing Autism — helping kids with autism
          spectrum disorder experience the joy of tennis. No admin fees. No overhead. Just impact.
        </motion.p>

        {/* Impact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {impacts.map((item, i) => (
            <motion.div
              key={item.amount}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-center"
            >
              <p className="font-bebas text-4xl text-[#2D6A4F] mb-2">{item.amount}</p>
              <p className="font-dm text-gray-500 text-sm leading-snug">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div>
            <p className="font-bebas text-2xl text-[#1a1a1a] tracking-wide mb-1">Ready to give back?</p>
            <p className="font-dm text-gray-400 text-sm">
              Any amount makes a real difference in a child&apos;s life.
            </p>
          </div>
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 bg-[#F4A623] text-white font-dm font-bold px-8 py-3.5 rounded-full hover:bg-[#e09510] transition-colors duration-200 shadow-sm text-base"
          >
            Donate Now →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
