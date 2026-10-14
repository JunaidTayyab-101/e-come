import useStore from '../hooks/useStore'

export default function Toast() {
  const { toast } = useStore()
  return (
    <div aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      {toast && (
        <div key={toast.id} className="animate-fadeUp rounded-full bg-cocoa-900 px-6 py-3 text-sm text-cream-50 shadow-soft">{toast.message}</div>
      )}
    </div>
  )
}
