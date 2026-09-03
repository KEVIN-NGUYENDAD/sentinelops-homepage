import { wafCaseStudy } from '../data/content.js'
import Icon from './Icon.jsx'

export default function WAFCaseStudy() {
  const { eyebrow, title, summary, problem, approach, results, stack } = wafCaseStudy

  return (
    <section
      id="waf-case-study"
      className="section relative overflow-hidden border-t border-slate-100 bg-slate-50 dark:border-ink-700 dark:bg-ink-900"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" />

      <div className="container-px relative mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">{summary}</p>

        <div className="mt-12 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="card p-6 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 text-alert-500">
              <Icon name="search" className="h-5 w-5" />
              <h3 className="font-mono text-sm uppercase tracking-wide">{problem.heading}</h3>
            </div>
            <ul className="space-y-4">
              {problem.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-alert-500" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="card p-6 sm:p-8">
            <div className="mb-4 inline-flex items-center gap-2 text-signal-600 dark:text-signal-400">
              <Icon name="terminal" className="h-5 w-5" />
              <h3 className="font-mono text-sm uppercase tracking-wide">{results.heading}</h3>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {results.metrics.map((m) => (
                <div key={m.label}>
                  <p className="font-mono text-2xl font-bold text-signal-600 dark:text-signal-400 sm:text-3xl">
                    {m.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-slate-500 dark:text-slate-400">{m.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {results.narrative}
            </p>
          </div>
        </div>

        <div className="mt-8 card p-6 sm:p-8">
          <div className="mb-6 inline-flex items-center gap-2 text-slate-700 dark:text-slate-200">
            <Icon name="shield" className="h-5 w-5 text-signal-500" />
            <h3 className="font-mono text-sm uppercase tracking-wide">{approach.heading}</h3>
          </div>

          <ol className="relative space-y-8 border-l border-slate-200 pl-6 dark:border-ink-600 sm:pl-8">
            {approach.steps.map((step, i) => (
              <li key={step.title} className="relative">
                <span className="absolute -left-[calc(1.5rem+5px)] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-signal-500 ring-4 ring-slate-50 dark:ring-ink-900 sm:-left-[calc(2rem+5px)]" />
                <p className="font-mono text-xs text-slate-400 dark:text-slate-500">Step {i + 1}</p>
                <h4 className="mt-1 font-semibold">{step.title}</h4>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {step.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
