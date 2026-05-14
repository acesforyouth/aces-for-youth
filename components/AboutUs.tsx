'use client';

import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#2D6A4F] py-24 px-6 relative overflow-hidden">
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
          ABOUT US
        </motion.h2>

        <div className="flex flex-col gap-5">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-dm text-white/75 text-lg leading-relaxed"
          >
            Aces for Youth was founded by{' '}
            <strong className="text-[#F4A623]">Christopher Lum</strong>, a 9th grader and
            competitive tennis player with over six years of experience and a UTR of 6.8. Having
            competed in tournaments ranging from L6 to L2, Christopher knows firsthand what
            tournament play looks like, and how early exposure to that environment can shape a
            young player&apos;s love for the sport.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-dm text-white/75 text-lg leading-relaxed"
          >
            Christopher began playing competitive USTA tournaments at age 10 and felt overwhelmed
            as it was his first time playing a full match, and his performance directly affected
            his placement. This inspired him to create Aces For Youth, where kids can
            learn how tournament-style play works in a low-pressure, welcoming environment.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-dm text-white/75 text-lg leading-relaxed"
          >
            Aces For Youth is an initiative that allows kids to get some preliminary experience of
            competitive tennis while raising funds for tennis charities and proves that you
            don&apos;t have to be an adult to make a real impact.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
