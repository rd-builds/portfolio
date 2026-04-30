import { motion } from 'framer-motion'
import { FiDownload, FiEye } from 'react-icons/fi'
import SectionHeader from './SectionHeader.jsx'
import { portfolio } from '../data/portfolio.js'

export default function Resume() {
  return (
    <section id="resume" className="section-shell">
      <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <SectionHeader
            eyebrow="Flight Record"
            title="Preview the resume directly here."
            copy="View it inline, open the full PDF in a new tab, or download a copy for recruiters and applications."
          />
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col"
          >
            <a href={portfolio.resumeUrl} target="_blank" rel="noreferrer" className="button-secondary">
              <FiEye /> View Full Resume
            </a>
            <a href={portfolio.resumeUrl} download className="button-primary">
              <FiDownload /> Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="cosmic-panel p-3"
        >
          <iframe
            title={`${portfolio.name} resume preview`}
            src={`${portfolio.resumeUrl}#toolbar=0&navpanes=0`}
            className="h-[34rem] w-full rounded-[1.35rem] bg-slate-100 sm:h-[46rem]"
          />
        </motion.div>
      </div>
    </section>
  )
}
