import { projects } from '../data/content.js'
import Icon from './Icon.jsx'

export default function FeaturedProjects() {
  return (
    <section id="projects" className="section border-t border-slate-100 dark:border-ink-700">
      <div className="container-px mx-auto max-w-6xl">
        <p className="eyebrow">Featured Projects</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Platform Components</h2>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Each project below is a working component of the SentinelOps platform shown in the
          architecture above — closing the gap between AI agents and real security operations.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="card group flex flex-col p-6 transition hover:-translate-y-0.5 hover:border-signal-500/50 hover:shadow-lg hover:shadow-signal-500/5 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-mono text-lg font-semibold">{project.name}</h3>
                  <p className="mt-1 text-sm font-medium text-signal-600 dark:text-signal-400">
                    {project.tagline}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open live site for ${project.name}`}
                      className="rounded-lg border border-slate-300 p-2 text-slate-500 transition hover:border-signal-500 hover:text-signal-600 dark:border-ink-600 dark:text-slate-400 dark:hover:border-signal-400 dark:hover:text-signal-400"
                    >
                      <Icon name="external" className="h-4 w-4" />
                    </a>
                  )}
                  {project.links.repo && (
                    <a
                      href={project.links.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View repository for ${project.name}`}
                      className="rounded-lg border border-slate-300 p-2 text-slate-500 transition hover:border-signal-500 hover:text-signal-600 dark:border-ink-600 dark:text-slate-400 dark:hover:border-signal-400 dark:hover:text-signal-400"
                    >
                      <Icon name="github" className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-500 dark:text-slate-400">
                    <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-signal-500" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2 pt-2">
                {project.stack.map((tech) => (
                  <span key={tech} className="tag">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
