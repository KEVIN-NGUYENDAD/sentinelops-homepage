import { Fragment } from 'react'
import { platformArchitecture } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Architecture() {
  const { eyebrow, title, subtitle, flow, description, components } = platformArchitecture

  return (
    <section id="architecture" className="section border-t border-slate-100 dark:border-ink-700">
      <div className="container-px mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{subtitle}</p>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mx-auto flex max-w-xs flex-col items-center gap-2">
              {flow.map((node, i) => (
                <Fragment key={node}>
                  <div className="card w-full px-4 py-3 text-center font-mono text-sm font-medium">{node}</div>
                  {i < flow.length - 1 && <Icon name="arrowRight" className="h-4 w-4 rotate-90 text-signal-500" />}
                </Fragment>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-4">
              {description.map((paragraph) => (
                <p key={paragraph} className="text-slate-600 dark:text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {components.map((c) => (
                <div key={c.title} className="card p-5 transition hover:border-signal-500/50">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-signal-500/10 text-signal-600 dark:text-signal-400">
                    <Icon name={c.icon} className="h-4 w-4" />
                  </span>
                  <h3 className="mt-3 font-semibold">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
