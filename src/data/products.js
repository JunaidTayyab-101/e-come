// One consistent shape used everywhere: home, shop, details, cart, wishlist.
// Drop your photos into public/images and edit the paths below.
const C = {
  blush: { name: 'Blush Pink', hex: '#E8B7C0' },
  cream: { name: 'Cream', hex: '#F5EBDD' },
  sage: { name: 'Sage', hex: '#B9C4AE' },
  sky: { name: 'Dusty Blue', hex: '#AFC3D6' },
  sand: { name: 'Sand', hex: '#D9C3A5' },
  cocoa: { name: 'Cocoa', hex: '#8B6F5C' },
}
const BABY = ['0-3M', '3-6M', '6-9M', '9-12M']
const KID = ['1-2Y', '2-3Y', '3-4Y', '4-5Y']

export const products = [
  { id: 1, name: 'Blush Pink Dress', price: 2499, oldPrice: 2999, category: 'Girls', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg', 'https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'A soft, flowing dress in breathable cotton muslin with delicate puff sleeves.', details: ['100% organic cotton muslin', 'Concealed back buttons', 'Machine wash cold'], sizes: KID, colors: [C.blush, C.cream], inStock: true, featured: true, isNew: false },
  { id: 2, name: 'Cream Knit Cardigan', price: 3299, category: 'Baby', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg', 'https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'A cosy chunky-knit cardigan with pearl buttons, made to layer through every season.', details: ['Soft cotton-blend knit', 'Pearl-effect buttons', 'Gentle wash'], sizes: BABY, colors: [C.cream, C.sand], inStock: true, featured: true, isNew: true },
  { id: 3, name: 'Linen Button Shirt', price: 1899, category: 'Boys', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'A relaxed linen-blend shirt that stays cool and looks polished.', details: ['Linen-cotton blend', 'Shell-style buttons', 'Easy iron'], sizes: KID, colors: [C.sky, C.cream], inStock: true, featured: true, isNew: false },
  { id: 4, name: 'Newborn Romper Set', price: 2199, oldPrice: 2599, category: 'Baby', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'A three-piece romper, bonnet and mitten set in ultra-soft jersey.', details: ['Three-piece gift set', 'Nickel-free snaps', 'Pre-washed for softness'], sizes: BABY, colors: [C.blush, C.sage], inStock: true, featured: true, isNew: true },
  { id: 5, name: 'Smocked Sundress', price: 2799, category: 'Girls', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'Hand-smocked bodice, gentle gathered skirt, ready for garden parties.', details: ['100% organic cotton muslin', 'Concealed back buttons', 'Machine wash cold'], sizes: KID, colors: [C.blush, C.cream], inStock: true, featured: true, isNew: false },
  { id: 7, name: 'Ruffle Collar Blouse', price: 1699, category: 'Girls', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'A sweet blouse with a ruffle collar, lovely under a pinafore or with denim.', details: ['Cotton voile', 'Button back', 'Machine wash'], sizes: KID, colors: [C.cream], inStock: false, featured: false, isNew: false },
  { id: 8, name: 'Muslin Swaddle Duo', price: 1499, category: 'Baby', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'Two large, breathable muslin swaddles that grow softer with every wash.', details: ['120 x 120 cm', 'Set of two', 'Pre-washed muslin'], sizes: ['One Size'], colors: [C.cream, C.blush, C.sage], inStock: true, featured: false, isNew: true },
  { id: 9, name: 'Tailored Linen Shorts', price: 1599, category: 'Boys', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'Smart pull-on shorts with an elasticated waist for all-day comfort.', details: ['Linen-cotton blend', 'Elastic waist with drawcord', 'Side pockets'], sizes: KID, colors: [C.sand, C.sky], inStock: true, featured: false, isNew: false },
  { id: 10, name: 'Knotted Hair Bow Set', price: 799, category: 'Accessories', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'Three gentle fabric bows on soft, no-snag clips.', details: ['Set of three', 'Snag-free clips', 'Hand wipe clean'], sizes: ['One Size'], colors: [C.blush, C.cream], inStock: true, featured: false, isNew: false },
  { id: 11, name: 'Woven Sun Hat', price: 1199, category: 'Accessories', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'A lightweight woven hat with a ribbon tie for sunny days.', details: ['Natural woven straw', 'Adjustable chin tie', 'Wipe clean'], sizes: ['S', 'M', 'L'], colors: [C.sand], inStock: true, featured: false, isNew: true },
  { id: 12, name: 'Petal Tulle Party Dress', price: 3899, oldPrice: 4499, category: 'Girls', images: ['https://i.pinimg.com/736x/7c/c1/93/7cc193962e1fb8d8e24616bf61ce7e7f.jpg'], description: 'Layered tulle skirt over a satin-trimmed bodice, made for celebrations.', details: ['Soft tulle, cotton lining', 'Satin sash', 'Hand wash'], sizes: KID, colors: [C.blush, C.cream], inStock: true, featured: true, isNew: true },
]

export const categories = [
  { name: 'Baby', title: 'Baby Essentials', blurb: 'Gentle layers for newborns', tint: '#FBEBEE' },
  { name: 'Girls', title: 'Little Girls', blurb: 'Dresses, blouses & more', tint: '#F5EBDD' },
  { name: 'Boys', title: 'Little Boys', blurb: 'Refined everyday style', tint: '#E8EDF2' },
  { name: 'Accessories', title: 'Accessories', blurb: 'The finishing touches', tint: '#EEF0E6' },
]

export const getProduct = (id) => products.find((p) => p.id === Number(id))
export const formatPrice = (n) => `Rs. ${n.toLocaleString('en-PK')}`
