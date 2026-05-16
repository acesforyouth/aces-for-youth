'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CharityPartner() {
  return (
    <section className="bg-[#FAF9F6] py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-bebas text-[#1a1a1a] tracking-wide mb-10"
          style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)' }}
        >
          CHARITY PARTNER
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm"
        >
          <div className="mb-5">
            <Image
              src="/aceing-autism-logo-blue.png"
              alt="ACEing Autism"
              width={160}
              height={160}
              className="object-contain"
              unoptimized
            />
          </div>
          <p className="font-dm text-gray-600 text-lg leading-relaxed mb-4">
            ACEing Autism is a nonprofit organization that uses tennis to improve the lives of
            children with autism spectrum disorder. Through programs specifically designed for
            those with autism, they help develop motor skills, social skills, and a lifelong love
            of the sport.
          </p>
          <p className="font-dm text-gray-600 text-lg leading-relaxed mb-8">
            100% of Aces for Youth entry fees go directly to ACEing Autism. Our goal is to raise
            $500 per event.
          </p>
          <a
            href="https://aceingautism.org"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F4A623] text-white font-dm font-bold px-7 py-3 rounded-full hover:bg-[#e09510] transition-colors duration-200 mb-4"
          >
            Learn About ACEing Autism →
          </a>
          <p className="font-dm text-gray-400 text-xs">
            Aces for Youth is not affiliated with ACEing Autism. All donations go directly to the
            charity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
