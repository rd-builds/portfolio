import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { navItems, portfolio } from '../data/portfolio.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-ink/55 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-white">
          <span className="h-2 w-2 rounded-full bg-cyanSoft shadow-[0_0_18px_rgba(103,232,249,0.7)]" />
          {portfolio.name}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium text-slate-400 transition duration-500 hover:text-cyanSoft"
            >
              {label}
            </a>
          ))}
          <a href="#resume" className="button-secondary py-2">
            Resume
          </a>
        </div>

        <button
          className="rounded-full border border-white/10 bg-white/[0.06] p-2 text-slate-100 shadow-sm md:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-ink/95 shadow-lg md:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-1 px-5 py-4">
              {navItems.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-cyanSoft"
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
