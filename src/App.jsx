import { ThemeProvider } from './context/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import LiveInfrastructure from './components/LiveInfrastructure.jsx'
import Labs from './components/Labs.jsx'
import Skills from './components/Skills.jsx'
import WAFCaseStudy from './components/WAFCaseStudy.jsx'
import Timeline from './components/Timeline.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white text-slate-900 dark:bg-ink-950 dark:text-slate-100">
        <Navbar />
        <main>
          <Hero />
          <About />
          <FeaturedProjects />
          <LiveInfrastructure />
          <Labs />
          <Skills />
          <WAFCaseStudy />
          <Timeline />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
