import { motion } from 'framer-motion'
import { FiMail, FiSend } from 'react-icons/fi'
import SectionHeader from './SectionHeader.jsx'
import { portfolio } from '../data/portfolio.js'

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="Open Channel"
            title="Let us build something useful."
            copy="Open to internships, collaborative projects, and technical conversations around AI, web apps, and product engineering."
          />
          <a href={`mailto:${portfolio.email}`} className="button-secondary mt-8">
            <FiMail /> {portfolio.email}
          </a>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          action={`mailto:${portfolio.email}`}
          method="post"
          encType="text/plain"
          className="cosmic-panel p-6"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Name
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyanSoft/50"
                name="name"
                placeholder="Your name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Email
              <input
                className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyanSoft/50"
                name="email"
                type="email"
                placeholder="name@email.com"
              />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-200">
            Message
            <textarea
              className="min-h-36 resize-y rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-500 focus:border-cyanSoft/50"
              name="message"
              placeholder="Tell me about the role or project."
            />
          </label>
          <button type="submit" className="button-primary mt-5">
            Send Message <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
