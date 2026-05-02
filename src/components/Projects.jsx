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
  const x = offset * 460
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
      className={`group absolute left-1/2 top-10 grid h-[28rem] w-[min(44rem,70vw)] overflow-hidden rounded-[2rem] border text-left backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr] ${
        active
          ? 'z-30 border-cyanSoft/25 bg-white/[0.085] shadow-[0_36px_110px_rgba(2,6,23,0.48)]'
          : 'pointer-events-none z-10 border-white/10 bg-white/[0.04]'
      }`}
      style={{ transformStyle: 'preserve-3d' }}
    >

      {/* 🔥 FIXED IMAGE */}
      <div className="relative h-full overflow-hidden flex items-center justify-center bg-black/20">
        <img
          src={project.image}
          alt={project.title}
          className="max-h-full max-w-full object-contain p-4"
        />
      </div>

      {/* CONTENT */}
      <div className="flex flex-col justify-between p-5 sm:p-6 lg:p-7">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyanSoft/85">
            Project 0{index + 1}
          </p>

          <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
            {project.title}
          </h3>

          <p className="mt-5 text-slate-300">
            {project.description}
          </p>
        </div>

        <div className="mt-6">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs bg-white/10 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-6 flex gap-3">
            <a href={project.github} target="_blank" className="button-secondary py-2">
              <FaGithub /> GitHub
            </a>

            {project.demo && (
              <a href={project.demo} target="_blank" className="button-primary py-2">
                <FiExternalLink /> Live
              </a>
            )}
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
    setActive((prev) => wrapIndex(prev + direction, projects.length))
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

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeader
          eyebrow="Overview"
          title="My Projects"
          copy="Navigate using arrows or keyboard"
        />

        <div className="flex gap-3 relative z-50">
          <button onClick={() => rotate(-1)} className="button-secondary p-3">
            <FiArrowLeft />
          </button>
          <button onClick={() => rotate(1)} className="button-primary p-3">
            <FiArrowRight />
          </button>
        </div>
      </div>

      <div className="relative mt-14 h-[40rem] overflow-hidden rounded-[2rem] border border-white/10 backdrop-blur-xl">

        {cards.map((project) => (
          <ProjectCarouselCard
            key={project.title}
            project={project}
            index={project.index}
            offset={project.offset}
            active={project.offset === 0}
          />
        ))}

        {/* 🔥 DOTS BACK */}
        <div className="absolute bottom-5 left-1/2 z-40 flex -translate-x-1/2 gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setActive(index)}
              className={`h-2.5 rounded-full transition ${
                active === index
                  ? 'w-8 bg-cyanSoft'
                  : 'w-2.5 bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}