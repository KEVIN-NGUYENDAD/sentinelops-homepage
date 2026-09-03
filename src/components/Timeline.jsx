import { timeline } from '../data/content.js'

export default function Timeline() {
  const { eyebrow, title, intro, entries } = timeline

  return (
    <section id="timeline" className="section border-t border-slate-100 dark:border-ink-700">
      <div className="container-px mx-auto max-w-6xl">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">{intro}</p>

        <ol className="relative mt-12 space-y-10 border-l border-slate-200 pl-6 dark:border-ink-600 sm:pl-8">
          {entries.map((entry) => (
            <li key={`${entry.date}-${entry.title}`} className="relative">
              <span className="absolute -left-[calc(1.5rem+5px)] top-1 flex h-3 w-3 items-center justify-center rounded-full bg-signal-500 ring-4 ring-white dark:ring-ink-950 sm:-left-[calc(2rem+5px)]" />
              <span className="font-mono text-xs uppercase tracking-wide text-signal-600 dark:text-signal-400">
                {entry.date}
              </span>
              <h3 className="mt-1 font-semibold">{entry.title}</h3>
              <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
