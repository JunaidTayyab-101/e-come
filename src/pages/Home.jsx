import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedProducts from '../components/FeaturedProducts'
import BrandStory from '../components/BrandStory'
import PromoBanner from '../components/PromoBanner'
import Newsletter from '../components/Newsletter'
import { products } from '../data/products'

const featured = products.filter((p) => p.featured).slice(0, 4)
const arrivals = products.filter((p) => p.isNew).slice(0, 4)

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts eyebrow="Customer favourites" title="Featured pieces" items={featured} />
      <BrandStory />
      <FeaturedProducts eyebrow="Just in" title="New arrivals" items={arrivals} background="bg-cream-100" />
      <PromoBanner />
      <Newsletter />
    </>
  )
}
