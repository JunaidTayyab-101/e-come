import { Link } from 'react-router-dom'
import SmartImage from './SmartImage'

export default function Hero() {
  return (
    <section className="bg-cream-100">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 md:py-20 lg:px-8">
        <div className="animate-fadeUp text-center md:text-left">
          <p className="eyebrow">The Autumn Collection</p>
          <h1 className="mt-4 text-5xl leading-tight sm:text-6xl lg:text-7xl">Softly made for <span className="italic text-rose-deep">little</span> moments</h1>
          <p className="mx-auto mt-5 max-w-md text-base text-cocoa-500 md:mx-0">Premium, breathable pieces in gentle colours, designed for comfort, made to be treasured.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link to="/shop" className="btn-primary">Shop the collection</Link>
            <Link to="/about" className="btn-outline">Our story</Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <SmartImage src="https://i.pinimg.com/1200x/08/8c/26/088c26750d6d1ed4b803f6b93a0d4ca7.jpg" 
          alt="Child wearing a soft blush Little Blossom outfit"
           tint="#F5D5DB" className="aspect-[4/5] w-full rounded-t-[10rem] rounded-b-3xl shadow-soft" />
        </div>
      </div>
    </section>
  )
}
