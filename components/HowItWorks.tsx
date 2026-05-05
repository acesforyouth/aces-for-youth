'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Sign Up',
    body: 'Register online with name, age, and skill level for a $15 entry fee.',
  },
  {
    number: '02',
    title: 'Show Up',
    body: 'Two-day weekend tournament on Saturday and Sunday across 4 courts.',
  },
  {
    number: '03',
    title: 'Compete',
    body: 'Round robin singles format with a doubles finale at the end.',
  },
  {
    number: '04',
    title: 'Give Back',
    body: 'Entry fees go directly to Aceing Autism.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#2D6A4F] py-28 px-6 relative overflow-hidden">
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent 0px,
            transparent 30px,
            rgba(255,255,255,0.04) 30px,
            rgba(255,255,255,0.04) 31px
          )`,
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white tracking-wide mb-16"
          style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
        >
          HOW IT WORKS
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
            >
              <span className="font-bebas text-7xl text-[#F4A623] leading-none block mb-2">
                {step.number}
              </span>
              <h3 className="font-bebas text-3xl text-white tracking-wide mb-2">{step.title}</h3>
              <p className="font-dm text-white/65 text-base leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
