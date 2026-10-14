import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SmartImage from '../components/SmartImage'
import ProductCard from '../components/ProductCard'
import useStore from '../hooks/useStore'
import { formatPrice, getProduct, products } from '../data/products'

function Detail({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore()
  const [active, setActive] = useState(0)
  const [size, setSize] = useState('')
  const [color, setColor] = useState(product.colors.length === 1 ? product.colors[0].name : '')
  const [qty, setQty] = useState(1)
  const [error, setError] = useState('')
  const wished = wishlist.includes(product.id)
  const onSale = product.oldPrice && product.oldPrice > product.price
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  const add = () => {
    if (!size || !color) {
      setError(`Please select ${!size && !color ? 'a size and a colour' : !size ? 'a size' : 'a colour'}.`)
      return
    }
    setError('')
    addToCart(product, { size, color, qty })
  }

  return (
    <div className="section">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-cocoa-500">
        <Link to="/" className="hover:text-rose-deep">Home</Link> / <Link to="/shop" className="hover:text-rose-deep">Shop</Link> / <span className="text-cocoa-900">{product.name}</span>
      </nav>
      <div className="grid gap-10 md:grid-cols-2 lg:gap-16">
        <div>
          <SmartImage src={product.images[active]} alt={`${product.name} view ${active + 1}`} tint={product.colors[0].hex} className="aspect-[4/5] w-full rounded-3xl" />
          {product.images.length > 1 && (
            <div className="mt-4 flex gap-3">
              {product.images.map((img, i) => (
                <button key={img} type="button" onClick={() => setActive(i)} aria-label={`Show image ${i + 1}`} aria-pressed={active === i}
                  className={`h-20 w-16 overflow-hidden rounded-xl border-2 ${active === i ? 'border-rose-deep' : 'border-transparent'}`}>
                  <SmartImage src={img} alt="" tint={product.colors[0].hex} className="h-full w-full" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="eyebrow">{product.category}</p>
          <h1 className="mt-2 text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-2xl">
            <span className="text-cocoa-900">{formatPrice(product.price)}</span>
            {onSale && <span className="ml-3 text-lg text-cocoa-500 line-through">{formatPrice(product.oldPrice)}</span>}
          </p>
          <p className={`mt-2 text-sm ${product.inStock ? 'text-green-700' : 'text-rose-deep'}`}>{product.inStock ? 'In stock' : 'Currently sold out'}</p>
          <p className="mt-5 text-cocoa-500">{product.description}</p>

          <fieldset className="mt-8">
            <legend className="text-sm font-medium text-cocoa-900">Size {size && <span className="font-normal text-cocoa-500">: {size}</span>}</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button key={s} type="button" onClick={() => setSize(s)} aria-pressed={size === s}
                  className={`rounded-full border px-4 py-2 text-sm transition ${size === s ? 'border-cocoa-900 bg-cocoa-900 text-cream-50' : 'border-blush-300 hover:bg-blush-100'}`}>{s}</button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium text-cocoa-900">Colour {color && <span className="font-normal text-cocoa-500">: {color}</span>}</legend>
            <div className="mt-3 flex gap-3">
              {product.colors.map((c) => (
                <button key={c.name} type="button" onClick={() => setColor(c.name)} aria-pressed={color === c.name} aria-label={c.name} title={c.name}
                  style={{ backgroundColor: c.hex }}
                  className={`h-9 w-9 rounded-full border border-cocoa-500/20 ring-offset-2 ${color === c.name ? 'ring-2 ring-cocoa-900' : ''}`} />
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm font-medium text-cocoa-900">Quantity</span>
            <div className="flex items-center rounded-full border border-blush-300">
              <button type="button" aria-label="Decrease quantity" onClick={() => setQty((q) => Math.max(1, q - 1))} className="h-10 w-10 text-lg">&minus;</button>
              <span className="w-8 text-center" aria-live="polite">{qty}</span>
              <button type="button" aria-label="Increase quantity" onClick={() => setQty((q) => Math.min(10, q + 1))} className="h-10 w-10 text-lg">+</button>
            </div>
          </div>

          {error && <p role="alert" className="mt-4 text-sm text-rose-deep">{error}</p>}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={add} disabled={!product.inStock} className="btn-primary flex-1">{product.inStock ? 'Add to cart' : 'Sold out'}</button>
            <button type="button" onClick={() => toggleWishlist(product)} aria-pressed={wished} className="btn-outline flex-1">{wished ? 'Saved to wishlist' : 'Add to wishlist'}</button>
          </div>

          <div className="mt-10 border-t border-blush-200 pt-6">
            <h2 className="text-2xl">Details</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-cocoa-500">
              {product.details.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-center text-3xl md:text-4xl">You may also like</h2>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
            {related.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}

export default function ProductDetails() {
  const { id } = useParams()
  const product = getProduct(id)
  if (!product) {
    return (
      <div className="section text-center">
        <h1 className="text-4xl">Product not found</h1>
        <p className="mt-3 text-cocoa-500">We could not find that product.</p>
        <Link to="/shop" className="btn-primary mt-6">Back to shop</Link>
      </div>
    )
  }
  // key resets the selection state when navigating between products
  return <Detail key={product.id} product={product} />
}
