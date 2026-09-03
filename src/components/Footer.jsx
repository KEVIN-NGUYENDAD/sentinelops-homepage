import { profile } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-100 py-10 dark:border-ink-700">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="flex items-center gap-2 font-mono text-xs text-slate-500 dark:text-slate-400">
          <Icon name="shield" className="h-4 w-4 text-signal-500" />
          &copy; {year} {profile.name}. All rights reserved.
        </p>
        <p className="font-mono text-xs text-slate-400 dark:text-slate-500">
          Built with React, Vite &amp; Tailwind CSS.
        </p>
      </div>
    </footer>
  )
}
