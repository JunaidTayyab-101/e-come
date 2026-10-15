
import { NavLink, Outlet } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/admin", icon: "📊" },
  { name: "Products", path: "/admin/products", icon: "🛍️" },
  { name: "Orders", path: "/admin/orders", icon: "📦" },
  { name: "Categories", path: "/admin/categories", icon: "🏷️" },
  { name: "Customers", path: "/admin/customers", icon: "👥" },
  { name: "Settings", path: "/admin/settings", icon: "⚙️" },
];

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-[#FCF9F5] md:flex">
      {/* Sidebar */}
      <aside className="w-full border-b border-rose-100 bg-white p-5 md:min-h-screen md:w-64 md:border-b-0 md:border-r">
        <h2 className="text-2xl font-bold text-[#A9666A]">
          Little Blossom
        </h2>

        <p className="mb-8 mt-1 text-xs text-stone-500">
          Admin Panel
        </p>

        <nav className="flex gap-2 overflow-x-auto md:flex-col">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                  isActive
                    ? "bg-[#F7E5E5] font-semibold text-[#A9666A]"
                    : "text-stone-600 hover:bg-[#FCF4F1]"
                }`
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="min-w-0 flex-1">
        <header className="flex items-center justify-between border-b border-rose-100 bg-white px-6 py-5">
          <div>
            <p className="text-sm text-stone-500">
              Little Blossom Store
            </p>
            <h1 className="text-lg font-semibold text-[#49372F]">
              Admin Workspace
            </h1>
          </div>

          <NavLink
            to="/"
            className="rounded-lg border border-rose-200 px-4 py-2 text-sm text-[#A9666A] hover:bg-rose-50"
          >
            View Store ↗
          </NavLink>
        </header>

        <main className="p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
