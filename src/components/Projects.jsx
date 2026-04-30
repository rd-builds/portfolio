import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import SectionHeader from './SectionHeader.jsx'
import { projects } from '../data/portfolio.js'

const wrapIndex = (index, length) => (index + length) % length

function getOffset(index, active, length) {
  let offset = index - active
  if (offset > length / 2) offset -= length
  if (offset < -length / 2) offset += length
  return offset
}

function ProjectCarouselCard({ project, index, offset, active }) {
  const abs = Math.abs(offset)
  const hidden = abs > 1
  const x = offset * 640
  const rotateY = offset * -10
  const z = active ? 260 : -320
  const scale = active ? 1 : 0.58
  const opacity = hidden ? 0 : active ? 1 : 0.22

  return (
    <motion.article
      aria-hidden={hidden}
      animate={{
        x: `calc(-50% + ${x}px)`,
        z,
        rotateY,
        scale,
        opacity,
        filter: active ? 'blur(0px) brightness(1.04)' : 'blur(0.9px) brightness(0.68)',
      }}
      whileHover={active ? { y: -10, scale: 1.015 } : { y: -4 }}
      transition={{ type: 'spring', stiffness: 95, damping: 24, mass: 0.9 }}
      className={`group absolute left-1/2 top-10 grid h-[34rem] w-[min(52rem,76vw)] overflow-hidden rounded-[2rem] border text-left backdrop-blur-2xl will-change-transform md:grid-cols-[1.05fr_0.95fr] ${
        active
          ? 'z-30 border-cyanSoft/25 bg-white/[0.085] shadow-[0_36px_110px_rgba(2,6,23,0.48)]'
          : 'pointer-events-none z-10 border-white/10 bg-white/[0.04] shadow-[0_22px_70px_rgba(2,6,23,0.2)]'
      }`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      <div className="relative min-h-64 overflow-hidden md:min-h-full">
        <img
          src={project.image}
          alt={`${project.title} thumbnail`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
          loading={index === 0 ? 'eager' : 'lazy'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-60 transition duration-700 group-hover:opacity-85" />
        <div className="absolute bottom-5 left-5 translate-y-4 rounded-full border border-white/10 bg-white/[0.08] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white opacity-0 backdrop-blur-xl transition duration-700 group-hover:translate-y-0 group-hover:opacity-100">
          Mission Preview
        </div>
      </div>

      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyanSoft/85">
            Mission 0{index + 1}
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {project.title}
          </h3>
          <p className="mt-5 leading-8 text-slate-300">{project.description}</p>
        </div>

        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-semibold text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={project.github}
              className="button-secondary py-2"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a href={project.demo} className="button-primary py-2" target="_blank" rel="noreferrer">
              <FiExternalLink /> Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [active, setActive] = useState(0)

  const cards = useMemo(
    () =>
      projects.map((project, index) => ({
        ...project,
        index,
        offset: getOffset(index, active, projects.length),
      })),
    [active],
  )

  const rotate = (direction) => {
    setActive((index) => wrapIndex(index + direction, projects.length))
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') rotate(1)
      if (event.key === 'ArrowLeft') rotate(-1)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <section id="projects" className="section-shell relative">
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute right-[-8rem] top-20 h-72 w-72 rounded-full bg-violetSoft/[0.09] blur-3xl"
      />
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Mission Archive"
          title="Featured builds in orbit."
          copy="Navigate with the arrows or keyboard. The active mission stays sharp in front while side cards drift back in perspective."
        />

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-3"
        >
          <button type="button" aria-label="Previous project" onClick={() => rotate(-1)} className="button-secondary p-3">
            <FiArrowLeft />
          </button>
          <button type="button" aria-label="Next project" onClick={() => rotate(1)} className="button-primary p-3">
            <FiArrowRight />
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.18 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative mt-14 h-[40rem] overflow-hidden rounded-[2.25rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.02))] shadow-card backdrop-blur-xl"
        style={{
          perspective: '1900px',
          perspectiveOrigin: '50% 48%',
          transformStyle: 'preserve-3d',
        }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:52px_52px] opacity-50"
        />
        <div
          aria-hidden="true"
          className="absolute left-8 top-8 h-28 w-28 rounded-full border border-cyanSoft/15 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.18),rgba(103,232,249,0.12)_34%,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="absolute right-10 top-10 h-px w-44 rotate-[-18deg] bg-gradient-to-r from-transparent via-cyanSoft/35 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute right-20 top-20 h-1.5 w-1.5 rounded-full bg-cyanSoft"
        />
        <div
          aria-hidden="true"
          className="absolute right-48 top-16 h-1 w-1 rounded-full bg-violetSoft"
        />
        <div className="absolute inset-x-10 bottom-8 h-28 rounded-full bg-blueSoft/[0.08] blur-3xl" />

        {cards.map((project) => (
          <ProjectCarouselCard
            key={project.title}
            project={project}
            index={project.index}
            offset={project.offset}
            active={project.offset === 0}
          />
        ))}

        <div className="absolute bottom-5 left-1/2 z-40 flex -translate-x-1/2 gap-2">
          {projects.map((project, index) => (
            <button
              key={project.title}
              type="button"
              aria-label={`Show ${project.title}`}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition-all duration-500 ${
                active === index ? 'w-9 bg-cyanSoft' : 'w-2.5 bg-white/25 hover:bg-white/45'
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
