import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import { FiArrowDown, FiDownload, FiEye } from 'react-icons/fi'
import { portfolio, statHighlights } from '../data/portfolio.js'
import useTypingText from '../hooks/useTypingText.js'

export default function Hero() {
  const typedRole = useTypingText(portfolio.roleWords)
  const { scrollY } = useScroll()
  const orbY = useTransform(scrollY, (value) => value * 0.11)
  const gridY = useTransform(scrollY, (value) => value * -0.08)
  const rotateX = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 })
  const rotateY = useSpring(useMotionValue(0), { stiffness: 120, damping: 18 })

  const handleProfileTilt = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    rotateX.set(y * -8)
    rotateY.set(x * 10)
  }

  const resetProfileTilt = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-24">
      <motion.div
        aria-hidden="true"
        className="absolute left-[-8%] top-24 h-80 w-80 rounded-full bg-blueSoft/[0.12] blur-3xl"
        style={{ y: orbY }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-10 right-[-8%] h-[34rem] w-[34rem] rounded-full bg-violetSoft/[0.1] blur-3xl"
        style={{ y: gridY }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(15,23,42,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:96px_96px]"
      />

      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.18fr_0.82fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-cyanSoft shadow-[0_0_18px_rgba(103,232,249,0.65)]" />
            Open for new missions
          </p>
          <h1 className="max-w-5xl text-6xl font-semibold leading-[0.96] tracking-tight text-white sm:text-7xl lg:text-8xl">
            {portfolio.name}
          </h1>
          <p className="mt-7 min-h-10 text-2xl font-medium text-cyanSoft sm:text-3xl">
            {typedRole}
            <span className="ml-1 animate-pulse text-violetSoft">|</span>
          </p>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {portfolio.intro}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="button-primary">
              Explore Missions <FiArrowDown />
            </a>
            <a href="#resume" className="button-secondary">
              Preview Resume <FiEye />
            </a>
            <a href={portfolio.resumeUrl} download className="button-secondary">
              Download Resume <FiDownload />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[36rem]"
        >
          <div className="absolute left-1/2 top-[43%] h-[min(27rem,86vw)] w-[min(27rem,86vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.16),transparent_62%)] blur-2xl" />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[43%] h-[min(27rem,86vw)] w-[min(27rem,86vw)] -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
              className="h-full w-full rounded-full border border-dashed border-cyanSoft/22"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[43%] h-[min(30rem,94vw)] w-[min(30rem,94vw)] -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 46, repeat: Infinity, ease: 'linear' }}
              className="h-full w-full rounded-full border border-violetSoft/14"
            />
          </div>
          <div className="absolute left-1/2 top-[43%] aspect-square w-[min(21rem,66vw)] -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onPointerMove={handleProfileTilt}
              onPointerLeave={resetProfileTilt}
              className="h-full w-full overflow-hidden rounded-full border border-cyanSoft/25 bg-white/[0.06] p-4 shadow-[0_34px_120px_rgba(96,165,250,0.16)] ring-1 ring-white/10 backdrop-blur-xl"
            >
              <img
                className="h-full w-full rounded-full border border-white/10 object-cover grayscale-[16%] transition duration-700 hover:scale-[1.025] hover:grayscale-0"
                src={portfolio.profileImage}
                alt={`${portfolio.name} profile`}
              />
            </motion.div>
          </div>
          <div className="absolute bottom-0 left-1/2 grid w-[min(26rem,86vw)] -translate-x-1/2 grid-cols-3 gap-2 rounded-3xl border border-white/10 bg-ink/75 p-3 shadow-lg backdrop-blur-2xl">
            {statHighlights.map((stat) => (
              <div key={stat.label} className="px-2 py-1">
                <p className="text-lg font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-wider text-slate-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
