import { focusAreas, profile } from '../data/content.js'
import Icon from './Icon.jsx'

export default function About() {
  return (
    <section id="about" className="section border-t border-slate-100 dark:border-ink-700">
      <div className="container-px mx-auto max-w-6xl">
        <p className="eyebrow">About</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">What I focus on</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{profile.summary}</p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="card p-6 transition hover:border-signal-500/50">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-signal-500/10 text-signal-600 dark:text-signal-400">
                <Icon name={area.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-semibold">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
