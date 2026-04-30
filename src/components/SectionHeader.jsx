import { motion } from 'framer-motion'

export default function SectionHeader({ eyebrow, title, copy }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className="eyebrow">
        <span className="h-1.5 w-1.5 rounded-full bg-cyanSoft shadow-[0_0_18px_rgba(103,232,249,0.65)]" />
        {eyebrow}
      </p>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy">{copy}</p> : null}
    </motion.div>
  )
}
