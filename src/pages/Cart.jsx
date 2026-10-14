import { Link } from 'react-router-dom'
import SmartImage from '../components/SmartImage'
import useStore from '../hooks/useStore'
import { formatPrice } from '../data/products'

export default function Cart() {
  const { items, subtotal, shipping, total, updateQty, removeFromCart } = useStore()

  if (items.length === 0) {
    return (
      <div className="section text-center">
        <h1 className="text-4xl md:text-5xl">Your cart is empty</h1>
        <p className="mt-3 text-cocoa-500">Find something lovely in our collections.</p>
        <Link to="/shop" className="btn-primary mt-8">Continue shopping</Link>
      </div>
    )
  }

  return (
    <div className="section">
      <h1 className="text-4xl md:text-5xl">Shopping cart</h1>
      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <ul className="divide-y divide-blush-200 lg:col-span-2">
          {items.map((i) => (
            <li key={i.key} className="flex gap-4 py-6">
              <Link to={`/product/${i.product.id}`} className="h-28 w-24 shrink-0 overflow-hidden rounded-xl">
                <SmartImage src={i.product.images[0]} alt={i.product.name} tint={i.product.colors[0].hex} className="h-full w-full" />
              </Link>
              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-3">
                  <div>
                    <Link to={`/product/${i.product.id}`} className="font-serif text-xl text-cocoa-900 hover:text-rose-deep">{i.product.name}</Link>
                    <p className="text-sm text-cocoa-500">Size {i.size} &middot; {i.color}</p>
                  </div>
                  <p className="font-medium text-cocoa-900">{formatPrice(i.product.price * i.qty)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center rounded-full border border-blush-300">
                    <button type="button" aria-label={`Decrease quantity of ${i.product.name}`} onClick={() => updateQty(i.key, -1)} disabled={i.qty <= 1} className="h-9 w-9 disabled:opacity-40">&minus;</button>
                    <span className="w-8 text-center text-sm">{i.qty}</span>
                    <button type="button" aria-label={`Increase quantity of ${i.product.name}`} onClick={() => updateQty(i.key, 1)} disabled={i.qty >= 10} className="h-9 w-9 disabled:opacity-40">+</button>
                  </div>
                  <button type="button" onClick={() => removeFromCart(i.key)} className="text-sm text-cocoa-500 underline hover:text-rose-deep">Remove</button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <aside className="h-fit rounded-3xl bg-cream-100 p-6">
          <h2 className="text-2xl">Order summary</h2>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between"><dt>Subtotal</dt><dd>{formatPrice(subtotal)}</dd></div>
            <div className="flex justify-between"><dt>Shipping</dt><dd>{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd></div>
            <div className="flex justify-between border-t border-blush-300 pt-3 text-base font-medium text-cocoa-900"><dt>Total</dt><dd>{formatPrice(total)}</dd></div>
          </dl>
          <Link to="/checkout" className="btn-primary mt-6 w-full">Proceed to checkout</Link>
          <Link to="/shop" className="mt-4 block text-center text-sm underline hover:text-rose-deep">Continue shopping</Link>
        </aside>
      </div>
    </div>
  )
}
