import { useState } from 'react'
import { contact, profile } from '../data/content.js'
import Icon from './Icon.jsx'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <section id="contact" className="section border-t border-slate-100 dark:border-ink-700">
      <div className="container-px mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="eyebrow">Contact</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{contact.heading}</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{contact.body}</p>

            <a
              href={`mailto:${contact.email}`}
              className="mt-6 inline-flex items-center gap-2 font-mono text-sm text-signal-600 hover:text-signal-500 dark:text-signal-400"
            >
              <Icon name="mail" className="h-4 w-4" />
              {contact.email}
            </a>

            <div className="mt-8 flex flex-wrap gap-5">
              {profile.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-mono text-sm text-slate-500 transition hover:text-signal-600 dark:text-slate-400 dark:hover:text-signal-400"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card p-6 sm:p-8 lg:col-span-3">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-signal-500 dark:border-ink-600 dark:bg-ink-800 dark:text-slate-100"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-signal-500 dark:border-ink-600 dark:bg-ink-800 dark:text-slate-100"
                  placeholder="jane@company.com"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="font-mono text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="mt-2 w-full resize-none rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm outline-none transition focus:border-signal-500 dark:border-ink-600 dark:bg-ink-800 dark:text-slate-100"
                placeholder="Tell me about the role, project, or question..."
              />
            </div>

            <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
              Send message
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>

            {status === 'sent' && (
              <p className="mt-3 flex items-center gap-2 text-sm text-signal-600 dark:text-signal-400">
                <Icon name="check" className="h-4 w-4" />
                Opening your email client — thanks for reaching out.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
