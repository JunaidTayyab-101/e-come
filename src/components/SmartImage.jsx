import { useState } from 'react'

// Shows the photo if it loads; otherwise a soft tinted tile so the layout never breaks.
export default function SmartImage({ src, alt, tint = '#FBEBEE', className = '' }) {
  const [failed, setFailed] = useState(false)
  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        style={{ backgroundColor: tint }}
        className={`flex items-center justify-center ${className}`}
      >
        <svg viewBox="0 0 64 64" className="h-1/4 w-1/4 max-w-16 opacity-40" fill="none" stroke="#5C4638" strokeWidth="2" strokeLinejoin="round">
          <path d="M22 10l10 6 10-6 14 8-6 12-8-3v27H22V27l-8 3-6-12z" />
        </svg>
      </div>
    )
  }
  return <img src={"https://i.pinimg.com/736x/5f/55/f2/5f55f28b308efc210f70a702fdf98d9c.jpg"} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`object-cover ${className}`} />
}
