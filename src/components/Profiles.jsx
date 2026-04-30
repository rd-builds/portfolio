import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { profiles } from '../data/portfolio.js'

export default function Profiles() {
  return (
    <section id="links" className="section-shell">
      <SectionHeader
        eyebrow="Signal Links"
        title="Find my code, data work, and professional updates."
      />

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {profiles.map(({ label, href, icon: Icon }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.055] p-5 shadow-sm backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-cyanSoft/25 hover:bg-white/[0.08] hover:shadow-glow"
          >
            <span className="absolute -right-8 -top-8 h-20 w-20 rounded-full bg-cyanSoft/[0.07] blur-2xl transition duration-500 group-hover:bg-cyanSoft/[0.14]" />
            <span className="relative font-bold text-white">{label}</span>
            <Icon className="text-2xl text-cyanSoft" />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
