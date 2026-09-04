import { currentFocus } from '../data/content.js'
import Icon from './Icon.jsx'

export default function CurrentFocusBanner() {
  return (
    <div className="mt-12 flex flex-col items-start gap-3 rounded-xl border border-signal-500/30 bg-signal-500/5 p-5 sm:flex-row sm:items-center sm:gap-4">
      <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-signal-500/15 px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wide text-signal-600 dark:text-signal-400">
        <Icon name="pulse" className="h-3.5 w-3.5" />
        {currentFocus.label}
      </span>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{currentFocus.description}</p>
    </div>
  )
}
