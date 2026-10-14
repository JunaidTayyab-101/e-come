import { Link } from 'react-router-dom'
import SmartImage from './SmartImage'

export default function BrandStory() {
  return (
    <section className="bg-blush-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <SmartImage src="/images/story.jpg" alt="Folded soft cotton children's clothing" tint="#F5EBDD" className="aspect-square w-full rounded-3xl" />
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-2 text-4xl md:text-5xl">Comfort, thoughtfully designed</h2>
          <p className="mt-5 text-cocoa-500">Little Blossom began with a simple idea: children deserve clothes that are as gentle as they are beautiful. We choose breathable natural fabrics, soft palettes and timeless shapes made to be loved, and passed on.</p>
          <Link to="/about" className="btn-primary mt-8">Read our story</Link>
        </div>
      </div>
    </section>
  )
}
