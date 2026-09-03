import { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import Icon from './Icon.jsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#waf-case-study', label: 'WAF Case Study' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? 'border-b border-slate-200 bg-white/80 backdrop-blur dark:border-ink-700 dark:bg-ink-950/80'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-px mx-auto flex h-16 max-w-6xl items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <Icon name="shield" className="h-5 w-5 text-signal-500" />
          <span>
            sentinel<span className="text-signal-500">ops</span>
            <span className="text-slate-400 dark:text-slate-500">.fyi</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono text-sm text-slate-600 transition hover:text-signal-600 dark:text-slate-300 dark:hover:text-signal-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-lg border border-slate-300 p-2 text-slate-600 transition hover:border-signal-500 hover:text-signal-600 dark:border-ink-600 dark:text-slate-300 dark:hover:border-signal-400 dark:hover:text-signal-400"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-4 w-4" />
          </button>
          <a href="#contact" className="btn-primary">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="rounded-lg border border-slate-300 p-2 text-slate-600 dark:border-ink-600 dark:text-slate-300"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-4 w-4" />
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="rounded-lg border border-slate-300 p-2 text-slate-600 dark:border-ink-600 dark:text-slate-300"
          >
            <Icon name={open ? 'x' : 'menu'} className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden dark:border-ink-700 dark:bg-ink-950">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block font-mono text-sm text-slate-600 dark:text-slate-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
