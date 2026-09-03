import { liveInfrastructure } from '../data/content.js'
import Icon from './Icon.jsx'

const statusStyles = {
  operational: { dot: 'bg-signal-500', ring: 'bg-signal-500', text: 'text-signal-600 dark:text-signal-400', label: 'Operational' },
  monitoring: { dot: 'bg-cyan-500', ring: 'bg-cyan-500', text: 'text-cyan-600 dark:text-cyan-400', label: 'Monitoring' },
  hardening: { dot: 'bg-amber-500', ring: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', label: 'Hardening' },
}

function StatusDot({ status }) {
  const s = statusStyles[status] ?? statusStyles.monitoring
  return (
    <span className="relative flex h-2 w-2">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${s.ring}`} />
      <span className={`relative inline-flex h-2 w-2 rounded-full ${s.dot}`} />
    </span>
  )
}

export default function LiveInfrastructure() {
  const { eyebrow, title, intro, asOf, systems } = liveInfrastructure

  return (
    <section id="infrastructure" className="section border-t border-slate-100 dark:border-ink-700">
      <div className="container-px mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{intro}</p>
          </div>
          <span className="font-mono text-xs text-slate-400 dark:text-slate-500">{asOf}</span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((sys) => {
            const s = statusStyles[sys.status] ?? statusStyles.monitoring
            const Wrapper = sys.link ? 'a' : 'div'
            return (
              <Wrapper
                key={sys.name}
                {...(sys.link ? { href: sys.link, target: '_blank', rel: 'noreferrer' } : {})}
                className="card group flex flex-col p-5 transition hover:-translate-y-0.5 hover:border-signal-500/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      {sys.category}
                    </p>
                    <h3 className="mt-1 flex items-center gap-2 font-mono text-sm font-semibold">
                      {sys.name}
                      {sys.link && (
                        <Icon
                          name="external"
                          className="h-3.5 w-3.5 text-slate-400 opacity-0 transition group-hover:opacity-100"
                        />
                      )}
                    </h3>
                  </div>
                  <div className={`flex shrink-0 items-center gap-1.5 font-mono text-xs ${s.text}`}>
                    <StatusDot status={sys.status} />
                    {s.label}
                  </div>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                  {sys.description}
                </p>

                <div className="mt-4 border-t border-slate-100 pt-3 dark:border-ink-700">
                  <p className="font-mono text-lg font-bold">{sys.metric.value}</p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">{sys.metric.label}</p>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
