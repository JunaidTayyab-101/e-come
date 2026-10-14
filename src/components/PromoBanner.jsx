import { Link } from 'react-router-dom'

export default function PromoBanner() {
  return (
    <section className="section">
      <div className="rounded-3xl bg-cocoa-900 px-6 py-14 text-center md:py-20">
        <p className="eyebrow !text-blush-300">Limited time</p>
        <h2 className="mt-3 text-4xl !text-cream-50 md:text-5xl">Up to 20% off selected styles</h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-cream-200/80">Discover sale pieces across baby, girls and boys.</p>
        <Link to="/shop" className="btn mt-8 bg-blush-300 text-cocoa-900 hover:bg-blush-200">Shop the sale</Link>
      </div>
    </section>
  )
}
