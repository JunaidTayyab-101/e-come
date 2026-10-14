import { Link } from 'react-router-dom'
import SmartImage from './SmartImage'
import { categories } from '../data/products'

export default function Categories() {
  return (
    <section className="section">
      <div className="text-center">
        <p className="eyebrow">Collections</p>
        <h2 className="mt-2 text-4xl md:text-5xl">Shop by category</h2>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {categories.map((c) => (
          <Link key={c.name} to={`/shop?category=${c.name}`} className="group relative overflow-hidden rounded-2xl">
            <SmartImage src={`/images/cat-${c.name.toLowerCase()}.jpg`} alt={c.title} tint={c.tint} className="aspect-[3/4] w-full transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-cocoa-900/70 to-transparent p-4 pt-12 text-white">
              <h3 className="text-2xl !text-white">{c.title}</h3>
              <p className="text-xs opacity-90">{c.blurb}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
