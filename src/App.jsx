import Navbar from './components/Navbar.jsx'
import ParallaxBackground from './components/ParallaxBackground.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import MouseTrail from './components/MouseTrail.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Achievements from './components/Achievements.jsx'
import Profiles from './components/Profiles.jsx'
import Resume from './components/Resume.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-ink text-slate-100 selection:bg-cyanSoft/25">
      <ParallaxBackground />
      <div className="relative z-10">
        <ScrollProgress />
        <MouseTrail />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Achievements />
        <Profiles />
        <Resume />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}
