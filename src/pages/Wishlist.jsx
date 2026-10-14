import { Link } from 'react-router-dom'
import SmartImage from '../components/SmartImage'
import useStore from '../hooks/useStore'
import { formatPrice, products } from '../data/products'

export default function Wishlist() {
  const { wishlist, toggleWishlist, addToCart, notify } = useStore()
  const saved = wishlist.map((id) => products.find((p) => p.id === id)).filter(Boolean)

  if (saved.length === 0) {
    return (
      <div className="section text-center">
        <h1 className="text-4xl md:text-5xl">Your wishlist is empty</h1>
        <p className="mt-3 text-cocoa-500">Tap the heart on any piece you love to save it here.</p>
        <Link to="/shop" className="btn-primary mt-8">Explore the shop</Link>
      </div>
    )
  }

  // Wishlist items have no size/colour yet: auto-add only when there is a single option, otherwise send to details.
  const moveToCart = (p) => {
    if (p.sizes.length === 1 && p.colors.length === 1) addToCart(p, { size: p.sizes[0], color: p.colors[0].name })
    else notify('Please choose a size and colour first')
  }

  return (
    <div className="section">
      <h1 className="text-4xl md:text-5xl">Wishlist</h1>
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {saved.map((p) => {
          const single = p.sizes.length === 1 && p.colors.length === 1
          return (
            <li key={p.id} className="flex flex-col">
              <Link to={`/product/${p.id}`} className="overflow-hidden rounded-2xl">
                <SmartImage src={p.images[0]} alt={p.name} tint={p.colors[0].hex} className="aspect-[4/5] w-full" />
              </Link>
              <h2 className="mt-3 text-xl"><Link to={`/product/${p.id}`} className="hover:text-rose-deep">{p.name}</Link></h2>
              <p className="text-sm">{formatPrice(p.price)}</p>
              <div className="mt-3 flex flex-col gap-2">
                {single && p.inStock ? (
                  <button type="button" onClick={() => moveToCart(p)} className="btn-primary !py-2.5">Add to cart</button>
                ) : (
                  <Link to={`/product/${p.id}`} className="btn-primary !py-2.5">{p.inStock ? 'Choose size & colour' : 'View product'}</Link>
                )}
                <button type="button" onClick={() => toggleWishlist(p)} className="text-sm text-cocoa-500 underline hover:text-rose-deep">Remove</button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
