import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

export default function FeaturedProducts({ title, eyebrow, items, background = '' }) {
  return (
    <section className={background}>
      <div className="section">
        <div className="text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-2 text-4xl md:text-5xl">{title}</h2>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
          {items.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-12 text-center"><Link to="/shop" className="btn-outline">View all products</Link></div>
      </div>
    </section>
  )
}
