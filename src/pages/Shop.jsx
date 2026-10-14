import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const CATS = ['All', 'Baby', 'Girls', 'Boys', 'Accessories']

export default function Shop() {
  const [params, setParams] = useSearchParams()
  const category = CATS.includes(params.get('category')) ? params.get('category') : 'All'
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('featured')
  const [onlyInStock, setOnlyInStock] = useState(false)

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    const list = products.filter((p) =>
      (category === 'All' || p.category === category) &&
      (!q || p.name.toLowerCase().includes(q)) &&
      (!onlyInStock || p.inStock))
    const sorted = [...list]
    if (sort === 'low') sorted.sort((a, b) => a.price - b.price)
    else if (sort === 'high') sorted.sort((a, b) => b.price - a.price)
    else if (sort === 'newest') sorted.sort((a, b) => Number(b.isNew) - Number(a.isNew) || b.id - a.id)
    return sorted
  }, [category, query, sort, onlyInStock])

  const setCategory = (c) => setParams(c === 'All' ? {} : { category: c })
  const reset = () => { setQuery(''); setSort('featured'); setOnlyInStock(false); setParams({}) }

  return (
    <div className="section">
      <div className="text-center">
        <p className="eyebrow">The shop</p>
        <h1 className="mt-2 text-4xl md:text-5xl">All collections</h1>
      </div>

      <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {CATS.map((c) => (
            <button key={c} type="button" onClick={() => setCategory(c)} aria-pressed={category === c}
              className={`rounded-full border px-5 py-2 text-sm transition ${category === c ? 'border-cocoa-900 bg-cocoa-900 text-cream-50' : 'border-blush-300 hover:bg-blush-100'}`}>{c}</button>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <label className="sr-only" htmlFor="search">Search products</label>
          <input id="search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by name" className="input sm:w-56" />
          <label className="sr-only" htmlFor="sort">Sort products</label>
          <select id="sort" value={sort} onChange={(e) => setSort(e.target.value)} className="input sm:w-48">
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={onlyInStock} onChange={(e) => setOnlyInStock(e.target.checked)} className="accent-rose-deep" /> In stock only
          </label>
        </div>
      </div>

      <p className="mt-6 text-sm text-cocoa-500" aria-live="polite">{results.length} {results.length === 1 ? 'product' : 'products'}</p>

      {results.length === 0 ? (
        <div className="mt-8 rounded-3xl bg-cream-100 px-6 py-20 text-center">
          <h2 className="text-3xl">Nothing matches your search</h2>
          <p className="mt-2 text-sm text-cocoa-500">Try a different keyword or clear your filters.</p>
          <button type="button" onClick={reset} className="btn-primary mt-6">Clear filters</button>
        </div>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6">
          {results.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      )}
    </div>
  )
}
