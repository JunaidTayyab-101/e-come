import { useState } from 'react'
import { Link } from 'react-router-dom'
import Field from '../components/Field'
import useStore from '../hooks/useStore'
import { formatPrice } from '../data/products'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const empty = { name: '', email: '', phone: '', address: '', city: '', postal: '' }

function validate(v) {
  const e = {}
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.'
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email.'
  if (v.phone.replace(/\D/g, '').length < 10) e.phone = 'Please enter a valid phone number (10+ digits).'
  if (v.address.trim().length < 5) e.address = 'Please enter your street address.'
  if (v.city.trim().length < 2) e.city = 'Please enter your city.'
  if (!/^\d{4,6}$/.test(v.postal.trim())) e.postal = 'Postal code should be 4 to 6 digits.'
  return e
}

export default function Checkout() {
  const { items, subtotal, shipping, total, clearCart } = useStore()
  const [values, setValues] = useState(empty)
  const [errors, setErrors] = useState({})
  const [order, setOrder] = useState(null)

  if (order) {
    return (
      <div className="section mx-auto max-w-xl text-center">
        <h1 className="text-4xl md:text-5xl">Thank you, {order.name.split(' ')[0]}!</h1>
        <p className="mt-4 text-cocoa-500">This is a demo confirmation. No payment was taken and no real order was placed.</p>
        <p className="mt-2 text-sm">Reference: <span className="font-medium text-cocoa-900">{order.ref}</span></p>
        <Link to="/shop" className="btn-primary mt-8">Back to shop</Link>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="section text-center">
        <h1 className="text-4xl">Nothing to check out</h1>
        <p className="mt-3 text-cocoa-500">Your cart is empty.</p>
        <Link to="/shop" className="btn-primary mt-6">Continue shopping</Link>
      </div>
    )
  }

  const onChange = (e) => setValues((v) => ({ ...v, [e.target.name]: e.target.value }))
  const submit = (e) => {
    e.preventDefault()
    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length) return
    setOrder({ name: values.name.trim(), ref: `LB-DEMO-${Date.now().toString().slice(-6)}` })
    clearCart()
  }

  return (
    <div className="section">
      <h1 className="text-4xl md:text-5xl">Checkout</h1>
      <p className="mt-2 rounded-xl bg-blush-100 px-4 py-3 text-sm">Demo checkout only. No payment is processed and no real order is created.</p>
      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <form onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
          <div className="sm:col-span-2"><Field id="name" label="Full name" autoComplete="name" value={values.name} onChange={onChange} error={errors.name} /></div>
          <Field id="email" type="email" label="Email" autoComplete="email" value={values.email} onChange={onChange} error={errors.email} />
          <Field id="phone" type="tel" label="Phone" autoComplete="tel" value={values.phone} onChange={onChange} error={errors.phone} />
          <div className="sm:col-span-2"><Field id="address" label="Shipping address" autoComplete="street-address" value={values.address} onChange={onChange} error={errors.address} /></div>
          <Field id="city" label="City" autoComplete="address-level2" value={values.city} onChange={onChange} error={errors.city} />
          <Field id="postal" label="Postal code" inputMode="numeric" autoComplete="postal-code" value={values.postal} onChange={onChange} error={errors.postal} />
          <div className="sm:col-span-2"><button type="submit" className="btn-primary w-full sm:w-auto">Place demo order</button></div>
        </form>
        <aside className="h-fit rounded-3xl bg-cream-100 p-6">
          <h2 className="text-2xl">Order summary</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {items.map((i) => (
              <li key={i.key} className="flex justify-between gap-3">
                <span>{i.product.name} <span className="text-cocoa-500">({i.size}, {i.color}) &times; {i.qty}</span></span>
                <span>{formatPrice(i.product.price * i.qty)}</span>
              </li>
            ))}
          </ul>
          <dl className="mt-5 space-y-2 border-t border-blush-300 pt-4 text-sm">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt>Shipping</dt><dd>{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd></div>
            <div className="flex justify-between text-base font-medium text-cocoa-900"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
          </dl>
        </aside>
      </div>
    </div>
  )
}
