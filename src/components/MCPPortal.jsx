import { Fragment } from 'react'
import { mcpPortal } from '../data/content.js'
import Icon from './Icon.jsx'

export default function MCPPortal() {
  const { eyebrow, title, subtitle, overview, capabilities, architecture, repository, roadmap, status } = mcpPortal

  return (
    <section id="mcp-portal" className="section border-t border-slate-100 dark:border-ink-700">
      <div className="container-px mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-2 font-mono text-sm text-signal-600 dark:text-signal-400">{subtitle}</p>
        <p className="mt-5 max-w-3xl text-slate-600 dark:text-slate-300">{overview}</p>

        <div className="mt-12">
          <p className="mb-4 font-mono text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
            {capabilities.heading}
          </p>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.items.map((cap) => (
              <div key={cap.title} className="card p-6 transition hover:border-signal-500/50">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-signal-500/10 text-signal-600 dark:text-signal-400">
                  <Icon name={cap.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{cap.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-4 font-mono text-xs uppercase tracking-wide text-slate-400 dark:text-slate-500">
            {architecture.heading}
          </p>
          <div className="card flex flex-col items-stretch gap-3 p-5 sm:flex-row sm:items-center sm:gap-4 sm:p-6">
            {architecture.flow.map((node, i) => (
              <Fragment key={node}>
                <div className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-center font-mono text-sm font-medium dark:border-ink-600 dark:bg-ink-800 sm:flex-1">
                  {node}
                </div>
                {i < architecture.flow.length - 1 && (
                  <Icon
                    name="arrowRight"
                    className="mx-auto h-5 w-5 shrink-0 rotate-90 text-signal-500 sm:rotate-0"
                  />
                )}
              </Fragment>
            ))}
          </div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            {architecture.note}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card p-6 sm:p-7">
            <div className="mb-4 inline-flex items-center gap-2 text-slate-700 dark:text-slate-200">
              <Icon name="github" className="h-5 w-5" />
              <h3 className="font-mono text-sm uppercase tracking-wide">{repository.heading}</h3>
            </div>
            <p className="font-mono text-sm font-semibold">{repository.name}</p>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{repository.description}</p>
            <a
              href={repository.url}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary mt-5 inline-flex"
            >
              View on GitHub
              <Icon name="external" className="h-4 w-4" />
            </a>
          </div>

          <div className="card p-6 sm:p-7">
            <div className="mb-4 inline-flex items-center gap-2 text-signal-600 dark:text-signal-400">
              <Icon name="pulse" className="h-5 w-5" />
              <h3 className="font-mono text-sm uppercase tracking-wide">{status.heading}</h3>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-signal-500/30 bg-signal-500/10 px-3 py-1.5 font-mono text-sm text-signal-600 dark:text-signal-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-500" />
              </span>
              {status.label}
            </span>
            <p className="mt-4 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{status.note}</p>
          </div>
        </div>

        <div className="mt-8 card p-6 sm:p-8">
          <div className="mb-5 inline-flex items-center gap-2 text-slate-700 dark:text-slate-200">
            <Icon name="flag" className="h-5 w-5 text-signal-500" />
            <h3 className="font-mono text-sm uppercase tracking-wide">{roadmap.heading}</h3>
          </div>
          <ul className="space-y-3">
            {roadmap.items.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <Icon name="arrowRight" className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
