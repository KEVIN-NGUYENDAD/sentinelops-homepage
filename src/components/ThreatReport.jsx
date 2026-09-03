import { Fragment } from 'react'
import { threatReport } from '../data/content.js'
import Icon from './Icon.jsx'

const toneStyles = {
  alert: {
    icon: 'text-alert-500',
    iconBg: 'bg-alert-500/10',
    value: 'text-alert-500',
  },
  signal: {
    icon: 'text-signal-600 dark:text-signal-400',
    iconBg: 'bg-signal-500/10',
    value: 'text-signal-600 dark:text-signal-400',
  },
  neutral: {
    icon: 'text-slate-500 dark:text-slate-300',
    iconBg: 'bg-slate-500/10',
    value: 'text-slate-700 dark:text-slate-200',
  },
}

const timelineStatusStyles = {
  detected: { dot: 'bg-amber-500', badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400', label: 'Detected' },
  blocked: { dot: 'bg-signal-500', badge: 'bg-signal-500/10 text-signal-600 dark:text-signal-400', label: 'Blocked' },
  resolved: { dot: 'bg-signal-500', badge: 'bg-signal-500/10 text-signal-600 dark:text-signal-400', label: 'Resolved' },
}

function ArchitectureFlow({ flow, tone }) {
  const nodeStyles =
    tone === 'alert'
      ? 'border-alert-500/40 bg-alert-500/5 text-alert-600 dark:text-alert-400'
      : 'border-signal-500/40 bg-signal-500/5 text-signal-600 dark:text-signal-400'
  const arrowStyles = tone === 'alert' ? 'text-alert-500' : 'text-signal-500'

  return (
    <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-3">
      {flow.map((node, i) => (
        <Fragment key={node}>
          <div className={`rounded-lg border px-3 py-2.5 text-center font-mono text-xs font-medium sm:flex-1 ${nodeStyles}`}>
            {node}
          </div>
          {i < flow.length - 1 && (
            <Icon name="arrowRight" className={`mx-auto h-4 w-4 shrink-0 rotate-90 sm:rotate-0 ${arrowStyles}`} />
          )}
        </Fragment>
      ))}
    </div>
  )
}

export default function ThreatReport() {
  const { eyebrow, reportId, title, date, status, summary, stats, triggeredPaths, securityControls, timeline, architecture } =
    threatReport

  return (
    <section
      id="threat-report"
      className="section relative overflow-hidden border-t border-slate-100 bg-slate-50 dark:border-ink-700 dark:bg-ink-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="container-px relative mx-auto max-w-6xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
              <span className="rounded-full border border-signal-500/30 bg-signal-500/10 px-3 py-1 font-mono text-xs text-signal-600 dark:text-signal-400">
                {reportId}
              </span>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-4 font-mono text-xs text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <Icon name="clock" className="h-3.5 w-3.5" />
                {date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-signal-600 dark:text-signal-400">
                <Icon name="check" className="h-3.5 w-3.5" />
                {status}
              </span>
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-3xl text-slate-600 dark:text-slate-300">{summary}</p>

        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s) => {
            const t = toneStyles[s.tone] ?? toneStyles.neutral
            return (
              <div key={s.label} className="card p-5">
                <span className={`inline-flex h-9 w-9 items-center justify-center rounded-lg ${t.iconBg} ${t.icon}`}>
                  <Icon name={s.icon} className="h-4 w-4" />
                </span>
                <p className={`mt-4 font-mono text-2xl font-bold ${t.value}`}>{s.value}</p>
                <p className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">{s.label}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card p-6 sm:p-7">
            <div className="mb-4 inline-flex items-center gap-2 text-alert-500">
              <Icon name="search" className="h-5 w-5" />
              <h3 className="font-mono text-sm uppercase tracking-wide">Triggered Paths</h3>
            </div>
            <ul className="space-y-4">
              {triggeredPaths.map((p) => (
                <li key={p.path} className="flex items-start gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-alert-500" />
                  <div>
                    <p className="font-mono text-sm font-semibold">{p.path}</p>
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 sm:p-7">
            <div className="mb-4 inline-flex items-center gap-2 text-signal-600 dark:text-signal-400">
              <Icon name="shield" className="h-5 w-5" />
              <h3 className="font-mono text-sm uppercase tracking-wide">Security Controls</h3>
            </div>
            <ul className="space-y-4">
              {securityControls.map((c) => (
                <li key={c.name} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
                  <div>
                    <p className="flex flex-wrap items-center gap-2 font-mono text-sm font-semibold">
                      {c.name}
                      <span className="tag">{c.target}</span>
                    </p>
                    <p className="mt-0.5 text-sm text-slate-500 dark:text-slate-400">{c.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 card p-6 sm:p-8">
          <div className="mb-6 inline-flex items-center gap-2 text-slate-700 dark:text-slate-200">
            <Icon name="pulse" className="h-5 w-5 text-signal-500" />
            <h3 className="font-mono text-sm uppercase tracking-wide">Event Timeline</h3>
          </div>

          <ol className="relative space-y-7 border-l border-slate-200 pl-6 dark:border-ink-600 sm:pl-8">
            {timeline.map((event) => {
              const s = timelineStatusStyles[event.status] ?? timelineStatusStyles.detected
              return (
                <li key={event.time} className="relative">
                  <span
                    className={`absolute -left-[calc(1.5rem+5px)] top-1 h-3 w-3 rounded-full ring-4 ring-slate-50 dark:ring-ink-900 sm:-left-[calc(2rem+5px)] ${s.dot}`}
                  />
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs text-slate-400 dark:text-slate-500">{event.time}</span>
                    <span className={`rounded-full px-2 py-0.5 font-mono text-xs ${s.badge}`}>{s.label}</span>
                  </div>
                  <h4 className="mt-1.5 font-semibold">{event.title}</h4>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {event.description}
                  </p>
                </li>
              )
            })}
          </ol>
        </div>

        <div className="mt-8">
          <p className="mb-4 font-mono text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
            {architecture.heading}
          </p>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="card p-6 sm:p-7">
              <div className="mb-4 inline-flex items-center gap-2 text-alert-500">
                <Icon name="terminal" className="h-4 w-4" />
                <h4 className="font-mono text-xs uppercase tracking-wide">{architecture.before.label}</h4>
              </div>
              <ArchitectureFlow flow={architecture.before.flow} tone="alert" />
              <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {architecture.before.note}
              </p>
            </div>

            <div className="card p-6 sm:p-7">
              <div className="mb-4 inline-flex items-center gap-2 text-signal-600 dark:text-signal-400">
                <Icon name="shield" className="h-4 w-4" />
                <h4 className="font-mono text-xs uppercase tracking-wide">{architecture.after.label}</h4>
              </div>
              <ArchitectureFlow flow={architecture.after.flow} tone="signal" />
              <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {architecture.after.note}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
