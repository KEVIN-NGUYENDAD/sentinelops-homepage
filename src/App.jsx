import { ThemeProvider } from './context/ThemeContext.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import Skills from './components/Skills.jsx'
import WAFCaseStudy from './components/WAFCaseStudy.jsx'
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
          <Skills />
          <WAFCaseStudy />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
