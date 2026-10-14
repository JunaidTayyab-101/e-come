export default function Field({ id, label, error, as = 'input', ...props }) {
  const Tag = as
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-cocoa-900">{label}</label>
      <Tag id={id} name={id} className="input" aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} {...props} />
      {error && <p id={`${id}-err`} className="mt-1 text-xs text-rose-deep">{error}</p>}
    </div>
  )
}
