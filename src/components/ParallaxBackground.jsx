import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

export default function ParallaxBackground() {
  const { scrollY } = useScroll()
  const smoothY = useSpring(scrollY, { stiffness: 70, damping: 28, mass: 0.55 })
  const gridY = useTransform(smoothY, (value) => -value * 0.08)
  const blueY = useTransform(smoothY, (value) => value * 0.13)
  const violetY = useTransform(smoothY, (value) => -value * 0.1)
  const cyanY = useTransform(smoothY, (value) => value * 0.07)
  const cyanBeamY = useTransform(smoothY, (value) => value * -0.16)
  const violetBeamY = useTransform(smoothY, (value) => value * 0.11)
  const planetOneY = useTransform(smoothY, (value) => value * -0.05)
  const planetTwoY = useTransform(smoothY, (value) => value * 0.06)

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0B1020_0%,#10182B_46%,#0B1020_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.12),transparent_34%)]" />
      <div
        className="absolute inset-[-12rem] opacity-100"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.95) 0 1.45px, transparent 2.4px), radial-gradient(circle, rgba(103,232,249,0.85) 0 1.5px, transparent 2.5px), radial-gradient(circle, rgba(167,139,250,0.78) 0 1.25px, transparent 2.3px)',
          backgroundPosition: '0 0, 90px 130px, 180px 70px',
          backgroundSize: '135px 135px, 210px 210px, 290px 290px',
          animation: 'star-drift 85s linear infinite, star-pulse 7s ease-in-out infinite',
        }}
      />
      <div
        className="absolute inset-[-10rem] opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.8) 0 0.8px, transparent 1.6px), radial-gradient(circle, rgba(167,139,250,0.85) 0 1.2px, transparent 2px)',
          backgroundSize: '120px 120px, 420px 420px',
          backgroundPosition: '40px 20px, 0 0',
          animation: 'star-drift 130s linear infinite reverse',
        }}
      />
      <div
        className="absolute right-[-8rem] top-24 h-px w-64 origin-right rounded-full bg-gradient-to-l from-white via-cyanSoft/80 to-transparent shadow-[0_0_22px_rgba(103,232,249,0.5)]"
        style={{ animation: 'shooting-star 7.5s ease-in-out infinite' }}
      />
      <div
        className="absolute right-[12%] top-[48%] h-px w-52 origin-right rounded-full bg-gradient-to-l from-white via-violetSoft/75 to-transparent shadow-[0_0_20px_rgba(167,139,250,0.45)]"
        style={{ animation: 'shooting-star 10s ease-in-out infinite 2.7s' }}
      />
      <div
        className="absolute right-[2%] top-[72%] h-px w-44 origin-right rounded-full bg-gradient-to-l from-white via-blueSoft/70 to-transparent shadow-[0_0_18px_rgba(96,165,250,0.45)]"
        style={{ animation: 'shooting-star 12s ease-in-out infinite 5.1s' }}
      />
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.035)_1px,transparent_1px)] bg-[size:80px_80px] opacity-60"
        style={{ y: gridY }}
      />
      <motion.div
        className="absolute left-[8%] top-[18%] h-24 w-[42rem] rotate-[-18deg] rounded-full bg-gradient-to-r from-transparent via-cyanSoft/[0.08] to-transparent blur-xl"
        style={{ y: cyanBeamY }}
      />
      <motion.div
        className="absolute right-[2%] top-[58%] h-24 w-[36rem] rotate-[16deg] rounded-full bg-gradient-to-r from-transparent via-violetSoft/[0.08] to-transparent blur-xl"
        style={{ y: violetBeamY }}
      />
      <motion.div
        className="absolute -left-24 top-10 h-96 w-96 rounded-full bg-blueSoft/[0.12] blur-3xl"
        style={{ y: blueY }}
      />
      <motion.div
        className="absolute left-[6%] top-[34%] h-52 w-52 rounded-full border border-cyanSoft/10 bg-[radial-gradient(circle_at_35%_28%,rgba(255,255,255,0.22),rgba(96,165,250,0.12)_28%,rgba(15,23,42,0.08)_62%,transparent_70%)] shadow-[inset_-20px_-30px_70px_rgba(2,6,23,0.55),0_0_70px_rgba(96,165,250,0.11)]"
        style={{ y: planetOneY }}
      />
      <motion.div
        className="absolute right-[9%] bottom-[12%] h-36 w-36 rounded-full border border-violetSoft/10 bg-[radial-gradient(circle_at_32%_26%,rgba(255,255,255,0.2),rgba(167,139,250,0.15)_34%,rgba(15,23,42,0.08)_64%,transparent_72%)] shadow-[inset_-18px_-22px_54px_rgba(2,6,23,0.58),0_0_60px_rgba(167,139,250,0.12)]"
        style={{ y: planetTwoY }}
      />
      <motion.div
        className="absolute -right-28 top-24 h-[30rem] w-[30rem] rounded-full bg-violetSoft/[0.11] blur-3xl"
        style={{ y: violetY }}
      />
      <motion.div
        className="absolute bottom-[-12rem] left-1/3 h-[28rem] w-[28rem] rounded-full bg-cyanSoft/[0.08] blur-3xl"
        style={{ y: cyanY }}
      />
    </div>
  )
}
