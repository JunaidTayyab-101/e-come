
import { Link } from 'react-router-dom'
import SmartImage from './SmartImage'
import useStore from '../hooks/useStore'
import { formatPrice } from '../data/products'

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist } = useStore()

  const wished = wishlist.includes(product.id)
  const onSale = product.oldPrice && product.oldPrice > product.price

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-blush-200/70 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Product image */}
      <div className="relative overflow-hidden bg-cream-100">
        <Link
          to={`/product/${product.id}`}
          className="block"
          aria-label={`View ${product.name}`}
        >
          <SmartImage
            src={product.images?.[0]}
            alt={product.name}
            tint={product.colors?.[0]?.hex || '#FBEBEE'}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Product badges */}
        <div className="absolute left-3 top-3 flex flex-col gap-2">
          {onSale && (
            <span className="rounded-full bg-rose-deep px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              Sale
            </span>
          )}

          {!product.inStock && (
            <span className="rounded-full bg-cocoa-900 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              Sold Out
            </span>
          )}

          {product.isNew && product.inStock && !onSale && (
            <span className="rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-cocoa-700 shadow-sm">
              New Arrival
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product)}
          aria-pressed={wished}
          aria-label={
            wished
              ? `Remove ${product.name} from wishlist`
              : `Add ${product.name} to wishlist`
          }
          className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white/95 shadow-sm transition hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            className={`h-5 w-5 ${
              wished
                ? 'fill-rose-deep text-rose-deep'
                : 'fill-none text-cocoa-700'
            }`}
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3 5 6.4 5c2 0 3.5 1.1 5.6 3.2C14.1 6.1 15.6 5 17.6 5 21 5 22.8 8.6 21.5 11.8 19.5 16.4 12 21 12 21z" />
          </svg>
        </button>
      </div>

      {/* Product information */}
      <div className="flex flex-col p-4 sm:p-5">
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-rose-deep">
          {product.category}
        </p>

        <h3 className="mt-2 text-lg font-medium leading-snug text-cocoa-900 sm:text-xl">
          <Link
            to={`/product/${product.id}`}
            className="transition hover:text-rose-deep"
          >
            {product.name}
          </Link>
        </h3>

        {/* Short description */}
        <p className="mt-2 min-h-10 text-sm leading-5 text-cocoa-500">
          {product.cardDescription || product.description}
        </p>

        {/* Price */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <span className="text-lg font-semibold text-rose-deep">
            {formatPrice(product.price)}
          </span>

          {onSale && (
            <span className="text-sm text-cocoa-500 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        {/* Rating: only show when real rating data is provided */}
        {typeof product.rating === 'number' && (
          <div
            className="mt-3 flex flex-wrap items-center gap-2"
            aria-label={`Rated ${product.rating} out of 5`}
          >
            <div className="flex gap-0.5 text-amber-500" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star}>
                  {product.rating >= star
                    ? '★'
                    : product.rating >= star - 0.5
                      ? '★'
                      : '☆'}
                </span>
              ))}
            </div>

            <span className="text-xs text-cocoa-500">
              {product.rating.toFixed(1)}
              {typeof product.reviewCount === 'number' &&
                ` (${product.reviewCount} reviews)`}
            </span>
          </div>
        )}

        {/* Available colours */}
        {product.colors?.length > 0 && (
          <div
            className="mt-4 flex items-center gap-2"
            aria-label="Available colours"
          >
            {product.colors.map((color) => (
              <span
                key={color.name}
                title={color.name}
                aria-label={color.name}
                className="h-4 w-4 rounded-full border border-cocoa-500/20"
                style={{ backgroundColor: color.hex }}
              />
            ))}
          </div>
        )}

        {/* View product button */}
        <Link
          to={`/product/${product.id}`}
          className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-rose-deep px-4 py-3 text-sm font-medium text-white transition hover:bg-cocoa-900 focus:outline-none focus:ring-2 focus:ring-rose-deep focus:ring-offset-2"
        >
          View Product
          <span className="ml-2 transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  )
}
