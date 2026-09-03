import { skillGroups } from '../data/content.js'

export default function Skills() {
  return (
    <section id="skills" className="section border-t border-slate-100 dark:border-ink-700">
      <div className="container-px mx-auto max-w-6xl">
        <p className="eyebrow">Skills</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Tooling & tradecraft</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          A working toolkit spanning detection, forensics, application security, and the AI tooling
          increasingly sitting alongside it.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="card p-6">
              <h3 className="font-mono text-sm uppercase tracking-wide text-slate-500 dark:text-slate-400">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-100 px-2.5 py-1 text-sm text-slate-700 dark:bg-ink-700 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
