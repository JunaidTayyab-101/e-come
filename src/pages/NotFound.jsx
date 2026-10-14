import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="section text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-2 text-5xl">Page not found</h1>
      <p className="mt-3 text-cocoa-500">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary mt-8">Back home</Link>
    </div>
  )
}
