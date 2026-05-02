import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { skills } from '../data/portfolio.js'

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeader
      eyebrow="Skills"
      title="Tools and technologies I use to build real-world web and AI projects."
      copy="Focused on web development, AI concepts, and building real-world projects."
    />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, index) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
            className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_20px_70px_rgba(2,6,23,0.22)] backdrop-blur-xl"
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-cyanSoft/[0.08] blur-2xl transition duration-500 group-hover:bg-cyanSoft/[0.14]" />
            <h3 className="relative text-xl font-semibold text-white">{group.category}</h3>
            <div className="mt-6 grid gap-4">
              {group.items.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="relative flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-3 text-slate-300 transition duration-500 hover:translate-x-1 hover:border-cyanSoft/30 hover:text-cyanSoft"
                >
                  <Icon className="text-xl text-cyanSoft/90 transition duration-500 group-hover:scale-110" />
                  <span className="text-sm font-semibold">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
