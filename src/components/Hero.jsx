import { profile } from '../data/content.js'
import Icon from './Icon.jsx'
import CurrentFocusBanner from './CurrentFocusBanner.jsx'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-signal-500/20 blur-3xl" />

      <div className="container-px relative mx-auto max-w-6xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-signal-500/30 bg-signal-500/10 px-4 py-1.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-500 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-500" />
          </span>
          <span className="font-mono text-xs text-signal-600 dark:text-signal-400">Status: monitoring</span>
        </div>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {profile.name}
          <span className="mt-2 block text-2xl font-medium text-slate-500 dark:text-slate-400 sm:text-3xl">
            {profile.role}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          {profile.tagline}
        </p>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500 dark:text-slate-400">
          {profile.summary}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-primary">
            View projects
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
          <a href="#waf-case-study" className="btn-secondary">
            Read the WAF case study
          </a>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-5">
          {profile.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-slate-500 transition hover:text-signal-600 dark:text-slate-400 dark:hover:text-signal-400"
            >
              <Icon name={s.icon} className="h-4 w-4" />
              {s.label}
            </a>
          ))}
        </div>

        <CurrentFocusBanner />
      </div>
    </section>
  )
}
