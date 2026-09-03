import { labs } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Labs() {
  const { eyebrow, title, intro, entries } = labs

  return (
    <section id="labs" className="section border-t border-slate-100 bg-slate-50 dark:border-ink-700 dark:bg-ink-900">
      <div className="container-px mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{intro}</p>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {entries.map((entry) => {
            const complete = entry.status === 'Complete'
            return (
              <article key={entry.title} className="card p-6 transition hover:border-signal-500/50">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-signal-500/10 text-signal-600 dark:text-signal-400">
                      <Icon name="flask" className="h-4 w-4" />
                    </span>
                    <div>
                      <h3 className="font-semibold leading-snug">{entry.title}</h3>
                      <p className="mt-0.5 font-mono text-xs text-slate-400 dark:text-slate-500">{entry.period}</p>
                    </div>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-xs ${
                      complete
                        ? 'bg-signal-500/10 text-signal-600 dark:text-signal-400'
                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {entry.status}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{entry.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
