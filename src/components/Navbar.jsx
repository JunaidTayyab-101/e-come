import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import useStore from '../hooks/useStore'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'Our Story' },
  { to: '/contact', label: 'Contact' },
]

function Badge({ n }) {
  if (!n) return null
  return <span className="absolute -right-2 -top-2 grid h-5 min-w-5 place-items-center rounded-full bg-rose-deep px-1 text-[11px] text-white">{n}</span>
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { count, wishlist } = useStore()
  const linkClass = ({ isActive }) => `text-sm tracking-wide transition hover:text-rose-deep ${isActive ? 'text-rose-deep' : 'text-cocoa-700'}`

  return (
    <header className="sticky top-0 z-40 border-b border-blush-200/70 bg-cream-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button type="button" className="md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
        <Link to="/" className="font-serif text-2xl font-semibold tracking-wide text-cocoa-900 md:text-3xl" onClick={() => setOpen(false)}>
          Little <span className="italic text-rose-dusty">Blossom</span>
        </Link>
        <nav className="hidden items-center gap-9 md:flex" aria-label="Main">
          {links.map((l) => <NavLink key={l.to} to={l.to} end={l.end} className={linkClass}>{l.label}</NavLink>)}
        </nav>
        <div className="flex items-center gap-5">
          <Link to="/wishlist" aria-label={`Wishlist, ${wishlist.length} items`} className="relative">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 21s-7.500-4.600-9.500-9.200C1.200 8.600 3 5 6.400 5c2 0 3.500 1.100 5.600 3.200C14.100 6.100 15.600 5 17.600 5 21 5 22.800 8.600 21.500 11.800 19.500 16.400 12 21 12 21z" /></svg>
            <Badge n={wishlist.length} />
          </Link>
          <Link to="/cart" aria-label={`Cart, ${count} items`} className="relative">
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8V6a3 3 0 016 0v2" /></svg>
            <Badge n={count} />
          </Link>
        </div>
      </div>
      {open && (
        <nav className="border-t border-blush-200/70 bg-cream-50 px-4 py-4 md:hidden" aria-label="Mobile">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.to}><NavLink to={l.to} end={l.end} className={linkClass} onClick={() => setOpen(false)}>{l.label}</NavLink></li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
