import { useState } from 'react'
import Field from '../components/Field'
import useStore from '../hooks/useStore'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const empty = { name: '', email: '', message: '' }

export default function Contact() {
  const { notify } = useStore()
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  const submit = (e) => {
    e.preventDefault()
    const found = {}
    if (values.name.trim().length < 2) found.name = 'Please enter your name.'
    if (!EMAIL_RE.test(values.email.trim())) found.email = 'Please enter a valid email.'
    if (values.message.trim().length < 10) found.message = 'Message should be at least 10 characters.'
    setErrors(found)
    if (Object.keys(found).length) return
    setSent(true)
    setValues(empty)
    notify('Message received (demo, not actually sent)')
  }

  return (
    <div className="section">
      <div className="text-center">
        <p className="eyebrow">Contact</p>
        <h1 className="mt-2 text-4xl md:text-5xl">We would love to hear from you</h1>
      </div>
      <div className="mt-12 grid gap-10 md:grid-cols-3">
        <div className="space-y-5 rounded-3xl bg-cream-100 p-8 text-sm">
          <div><h2 className="text-xl">Email</h2><p className="text-cocoa-500">[your email address]</p></div>
          <div><h2 className="text-xl">Phone</h2><p className="text-cocoa-500">[your phone number]</p></div>
          <div><h2 className="text-xl">Studio</h2><p className="text-cocoa-500">[your address]</p></div>
          <p className="text-xs text-cocoa-500">Placeholders: replace with your real business details.</p>
        </div>
        <div className="md:col-span-2">
          {sent ? (
            <div className="rounded-3xl bg-blush-100 p-10 text-center">
              <h2 className="text-3xl">Thank you!</h2>
              <p className="mt-2 text-sm text-cocoa-500">This demo form does not send messages anywhere yet.</p>
              <button type="button" onClick={() => setSent(false)} className="btn-outline mt-6">Send another</button>
            </div>
          ) : (
            <form onSubmit={submit} noValidate className="grid gap-5">
              <Field id="name" label="Name" autoComplete="name" value={values.name} onChange={onChange} error={errors.name} />
              <Field id="email" type="email" label="Email" autoComplete="email" value={values.email} onChange={onChange} error={errors.email} />
              <Field id="message" as="textarea" rows={5} label="Message" value={values.message} onChange={onChange} error={errors.message} />
              <div><button type="submit" className="btn-primary">Send message</button></div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
