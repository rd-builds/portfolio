import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader.jsx'
import { portfolio } from '../data/portfolio.js'

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="grid items-start gap-12 lg:grid-cols-[0.86fr_1.14fr]">
        <div>
          <SectionHeader
            eyebrow="Mission Brief"
            title="Engineering useful AI and web products with calm precision."
            copy={portfolio.summary}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative border-l border-white/10 pl-7"
        >
          <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-cyanSoft shadow-[0_0_24px_rgba(103,232,249,0.4)]" />
          <p className="max-w-3xl text-2xl font-medium leading-[1.45] tracking-tight text-white sm:text-3xl">
            My current orbit is the intersection of reliable frontend engineering, AI-assisted
            workflows, and clear user experience. I like products where the technology does the
            heavy lift quietly while the interface stays fast, legible, and ready for launch.
          </p>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {['Interface Systems', 'AI Workflows', 'Launch-Ready Builds'].map((item) => (
              <span
                key={item}
                className="text-sm font-semibold uppercase tracking-[0.22em] text-cyanSoft/80"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
