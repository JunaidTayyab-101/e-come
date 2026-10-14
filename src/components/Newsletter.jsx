import { useState } from 'react'
import useStore from '../hooks/useStore'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)
  const { notify } = useStore()

  const submit = (e) => {
    e.preventDefault()
    if (!EMAIL_RE.test(email.trim())) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setDone(true)
    setEmail('')
    notify('Thank you for subscribing (demo)')
  }

  return (
    <section className="bg-cream-200">
      <div className="mx-auto max-w-2xl px-4 py-16 text-center">
        <h2 className="text-4xl">Join the Little Blossom list</h2>
        <p className="mt-3 text-sm text-cocoa-500">New arrivals and gentle offers, straight to your inbox.</p>
        {done ? (
          <p className="mt-6 text-rose-deep">You are on the list. Thank you!</p>
        ) : (
          <form onSubmit={submit} noValidate className="mt-6 flex flex-col gap-3 sm:flex-row">
            <div className="flex-1 text-left">
              <label htmlFor="nl-email" className="sr-only">Email address</label>
              <input id="nl-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email address" className="input" aria-invalid={!!error} aria-describedby={error ? 'nl-error' : undefined} />
              {error && <p id="nl-error" className="mt-1 pl-2 text-xs text-rose-deep">{error}</p>}
            </div>
            <button type="submit" className="btn-primary">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  )
}
