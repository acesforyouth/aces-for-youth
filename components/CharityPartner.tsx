'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CharityPartner() {
  return (
    <section className="bg-[#2D6A4F] py-24 px-6 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg, transparent 0px, transparent 30px,
            rgba(255,255,255,0.04) 30px, rgba(255,255,255,0.04) 31px
          )`,
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-white tracking-wide mb-10"
          style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          CHARITY PARTNER
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white/10 border border-white/20 rounded-2xl p-8"
        >
          <div className="mb-5">
            <Image
              src="/aceing-autism.png"
              alt="Aceing Autism"
              width={160}
              height={160}
              className="object-contain"
              unoptimized
            />
          </div>
          <p className="font-dm text-white/75 text-lg leading-relaxed mb-4">
            Aceing Autism is a nonprofit organization that uses tennis to improve the lives of
            children with autism spectrum disorder. Through programs specifically designed for
            those with autism, they help develop motor skills, social skills, and a lifelong love
            of the sport.
          </p>
          <p className="font-dm text-white/75 text-lg leading-relaxed mb-8">
            100% of Aces for Youth entry fees go directly to Aceing Autism. Our goal is to raise
            $500 per event.
          </p>
          <a
            href="https://aceingautism.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F4A623] text-white font-dm font-bold px-7 py-3 rounded-full hover:bg-[#e09510] transition-colors duration-200 mb-4"
          >
            Learn About Aceing Autism →
          </a>
          <p className="font-dm text-white/35 text-xs">
            Aces for Youth is not affiliated with Aceing Autism. All donations go directly to the
            charity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
