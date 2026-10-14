import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-cocoa-900 text-cream-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <p className="font-serif text-3xl text-cream-50">Little <span className="italic text-blush-300">Blossom</span></p>
          <p className="mt-3 max-w-sm text-sm text-cream-200/80">Soft, thoughtfully made clothing for babies and little ones.</p>
          <div className="mt-5 flex gap-3">
            {['Instagram', 'Facebook', 'Pinterest'].map((s) => (
              <a key={s} href="#" onClick={(e) => e.preventDefault()} aria-label={`${s} (placeholder link)`} className="rounded-full border border-cream-200/30 px-4 py-1.5 text-xs transition hover:bg-blush-300 hover:text-cocoa-900">{s}</a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-sans text-sm uppercase tracking-widest text-cream-50">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream-200/80">
            <li><Link to="/shop?category=Baby" className="hover:text-blush-300">Baby Essentials</Link></li>
            <li><Link to="/shop?category=Girls" className="hover:text-blush-300">Little Girls</Link></li>
            <li><Link to="/shop?category=Boys" className="hover:text-blush-300">Little Boys</Link></li>
            <li><Link to="/shop?category=Accessories" className="hover:text-blush-300">Accessories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-sans text-sm uppercase tracking-widest text-cream-50">Help</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream-200/80">
            <li><Link to="/about" className="hover:text-blush-300">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-blush-300">Contact</Link></li>
            <li><Link to="/wishlist" className="hover:text-blush-300">Wishlist</Link></li>
            <li><Link to="/cart" className="hover:text-blush-300">Cart</Link></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-cream-200/10 py-5 text-center text-xs text-cream-200/60">&copy; {new Date().getFullYear()} Little Blossom. Demo storefront, no real orders or payments.</p>
    </footer>
  )
}
