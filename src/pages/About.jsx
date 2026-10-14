import { Link } from 'react-router-dom'
import SmartImage from '../components/SmartImage'

const values = [
  { t: 'Comfort first', d: 'Breathable, skin-kind fabrics and soft seams, so little ones can play, nap and explore freely.' },
  { t: 'Quality that lasts', d: 'Careful construction and fabrics that grow softer with washing, made to be handed down.' },
  { t: 'Thoughtful design', d: 'Timeless shapes and a gentle palette that feel special without being fussy.' },
]

export default function About() {
  return (
    <>
      <section className="bg-blush-100">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center">
          <p className="eyebrow">Our story</p>
          <h1 className="mt-3 text-5xl md:text-6xl">Dressing little ones in <span className="italic text-rose-deep">gentle</span> beauty</h1>
          <p className="mt-5 text-cocoa-500">Little Blossom is a premium children's clothing brand for babies, little girls and boys, created around comfort, quality and design that feels like a keepsake.</p>
        </div>
      </section>
      <section className="section grid items-center gap-10 md:grid-cols-2">
        <SmartImage src="/images/about.jpg" alt="Soft folded children's clothing in neutral tones" tint="#F5EBDD" className="aspect-[4/5] w-full rounded-3xl" />
        <div>
          <h2 className="text-4xl">Why we started</h2>
          <p className="mt-4 text-cocoa-500">We wanted children's clothes that look as beautiful as they feel: editorial in style, but made for real, busy days. Every piece is chosen for its softness, its fit and its ability to be loved for more than one season.</p>
        </div>
      </section>
      <section className="bg-cream-100">
        <div className="section grid gap-8 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.t} className="rounded-3xl bg-white p-8 text-center shadow-soft">
              <h3 className="text-2xl">{v.t}</h3>
              <p className="mt-3 text-sm text-cocoa-500">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section text-center">
        <h2 className="text-4xl">Discover the collection</h2>
        <Link to="/shop" className="btn-primary mt-6">Shop now</Link>
      </section>
    </>
  )
}
