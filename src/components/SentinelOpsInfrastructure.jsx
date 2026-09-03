import { sentinelOpsInfrastructure } from '../data/content.js'
import Icon from './Icon.jsx'

export default function SentinelOpsInfrastructure() {
  const { eyebrow, title, intro, active, comingSoon } = sentinelOpsInfrastructure

  return (
    <section id="sentinelops-infrastructure" className="section border-t border-slate-100 dark:border-ink-700">
      <div className="container-px mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{intro}</p>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card p-6 sm:p-7">
            <div className="mb-4 inline-flex items-center gap-2 text-signal-600 dark:text-signal-400">
              <Icon name="check" className="h-5 w-5" />
              <h3 className="font-mono text-sm uppercase tracking-wide">Active</h3>
            </div>
            <ul className="space-y-4">
              {active.map((item) => (
                <li key={item.label} className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <a
                      href={item.href}
                      target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noreferrer"
                      className="truncate font-mono text-sm font-medium text-slate-700 transition hover:text-signal-600 dark:text-slate-200 dark:hover:text-signal-400"
                    >
                      {item.label}
                    </a>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{item.type}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-signal-500/10 px-2.5 py-1 font-mono text-xs text-signal-600 dark:text-signal-400">
                    Live
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 sm:p-7">
            <div className="mb-4 inline-flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <Icon name="clock" className="h-5 w-5" />
              <h3 className="font-mono text-sm uppercase tracking-wide">Coming Soon</h3>
            </div>
            <ul className="space-y-4">
              {comingSoon.map((item) => (
                <li key={item.label} className="flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate font-mono text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{item.type}</p>
                  </div>
                  <span className="shrink-0 rounded-full bg-amber-500/10 px-2.5 py-1 font-mono text-xs text-amber-600 dark:text-amber-400">
                    Planned
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
