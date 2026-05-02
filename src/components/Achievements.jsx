import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { achievementIcons, achievements } from '../data/portfolio.js'

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeader
        eyebrow="Participation/Achievements"
        title="Certifications, events, and steady technical practice."
        copy="A concise record of cloud fundamentals, AI learning, technical showcases, and coding consistency."
      />

      <div className="mt-14 grid gap-4 md:grid-cols-2">
        {achievements.map((achievement, index) => {
          const Icon = achievementIcons[index % achievementIcons.length]
          return (
            <motion.div
              key={achievement}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_70px_rgba(2,6,23,0.22)] backdrop-blur-xl"
            >
              <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-violetSoft/[0.08] blur-2xl transition duration-500 group-hover:bg-blueSoft/[0.1]" />
              <div className="relative flex gap-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/[0.06] text-cyanSoft shadow-sm ring-1 ring-white/10">
                  <Icon />
                </div>
                <p className="leading-7 text-slate-300">{achievement}</p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
