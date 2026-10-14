import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { StoreContext } from './store-context'
import { getProduct } from '../data/products'

const CART_KEY = 'lb_cart_v1'
const WISH_KEY = 'lb_wishlist_v1'

function load(key) {
  try {
    const raw = localStorage.getItem(key)
    const parsed = raw ? JSON.parse(raw) : []
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export default function StoreProvider({ children }) {
  // Lazy initialisers read localStorage once, on first render.
  const [cart, setCart] = useState(() => load(CART_KEY))
  const [wishlist, setWishlist] = useState(() => load(WISH_KEY))
  const [toast, setToast] = useState(null)
  const timer = useRef(null)

  useEffect(() => {
    try { localStorage.setItem(CART_KEY, JSON.stringify(cart)) } catch { /* storage blocked */ }
  }, [cart])
  useEffect(() => {
    try { localStorage.setItem(WISH_KEY, JSON.stringify(wishlist)) } catch { /* storage blocked */ }
  }, [wishlist])

  const notify = useCallback((message) => {
    setToast({ message, id: Date.now() })
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setToast(null), 2600)
  }, [])

  const addToCart = useCallback((product, { size, color, qty = 1 }) => {
    const key = `${product.id}|${size}|${color}`
    setCart((prev) => {
      const found = prev.find((i) => i.key === key)
      if (found) return prev.map((i) => (i.key === key ? { ...i, qty: Math.min(i.qty + qty, 10) } : i))
      return [...prev, { key, id: product.id, size, color, qty }]
    })
    notify(`${product.name} added to your cart`)
  }, [notify])

  const updateQty = useCallback((key, delta) => {
    setCart((prev) => prev.map((i) => (i.key === key ? { ...i, qty: Math.min(10, Math.max(1, i.qty + delta)) } : i)))
  }, [])

  const removeFromCart = useCallback((key) => {
    setCart((prev) => prev.filter((i) => i.key !== key))
    notify('Item removed from cart')
  }, [notify])

  const clearCart = useCallback(() => setCart([]), [])

  const toggleWishlist = useCallback((product) => {
    const has = wishlist.includes(product.id)
    setWishlist((prev) => (has ? prev.filter((id) => id !== product.id) : [...prev, product.id]))
    notify(has ? 'Removed from wishlist' : 'Saved to wishlist')
  }, [wishlist, notify])

  const value = useMemo(() => {
    // Cart stores only ids; product data is looked up so prices never go stale.
    const items = cart.map((i) => ({ ...i, product: getProduct(i.id) })).filter((i) => i.product)
    const subtotal = items.reduce((sum, i) => sum + i.product.price * i.qty, 0)
    const count = items.reduce((sum, i) => sum + i.qty, 0)
    const shipping = subtotal === 0 || subtotal >= 5000 ? 0 : 250
    return {
      items, count, subtotal, shipping, total: subtotal + shipping,
      wishlist, toast,
      addToCart, updateQty, removeFromCart, clearCart, toggleWishlist, notify,
    }
  }, [cart, wishlist, toast, addToCart, updateQty, removeFromCart, clearCart, toggleWishlist, notify])

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
