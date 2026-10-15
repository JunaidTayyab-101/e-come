
const stats = [
  { label: "Total Products", value: "11", icon: "🛍️", note: "In your collection" },
  { label: "Total Orders", value: "0", icon: "📦", note: "Orders received" },
  { label: "Total Sales", value: "Rs. 0", icon: "💰", note: "Sales overview" },
  { label: "Low Stock", value: "0", icon: "⚠️", note: "Needs attention" },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-rose-700">Little Blossom / Admin</p>
        <h1 className="mt-2 text-3xl font-semibold text-[#49372F]">
          Dashboard
        </h1>
        <p className="mt-2 text-sm text-stone-500">
          Welcome back! Manage your store from one place.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-rose-100 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <p className="text-sm text-stone-500">{stat.label}</p>
              <span className="text-2xl">{stat.icon}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-[#49372F]">
              {stat.value}
            </h2>
            <p className="mt-2 text-xs text-stone-400">{stat.note}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-rose-100 bg-white p-6">
        <h2 className="text-lg font-semibold text-[#49372F]">
          Store Overview
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-500">
          Your admin workspace is ready to build. Product management,
          orders, inventory and store settings will be added next.
        </p>
      </div>
    </div>
  )
}
