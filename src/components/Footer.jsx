import { portfolio } from '../data/portfolio.js'

export default function Footer() {
  return (
    <footer className="py-10 text-center text-sm text-slate-500">
      <p>Mission control built with React, Tailwind CSS, and Framer Motion by {portfolio.name}.</p>
    </footer>
  )
}
