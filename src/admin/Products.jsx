
import { useEffect, useMemo, useState } from "react";

const initialProducts = [
  {
    id: 1,
    name: "Blush Pink Dress",
    category: "Little Girls",
    price: 2499,
    stock: 12,
  },
  {
    id: 2,
    name: "Classic Kids Outfit",
    category: "Little Boys",
    price: 1999,
    stock: 8,
  },
  {
    id: 3,
    name: "Little Blossom Set",
    category: "Baby Essentials",
    price: 2999,
    stock: 0,
  },
];

const STORAGE_KEY = "little-blossom-admin-products";

export default function Products() {
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : initialProducts;
    } catch {
      return initialProducts;
    }
  });

  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    name: "",
    category: "Little Girls",
    price: "",
    stock: "",
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = form.name.trim();
    const price = Number(form.price);
    const stock = Number(form.stock);

    if (
      !name ||
      form.price === "" ||
      form.stock === "" ||
      !Number.isFinite(price) ||
      !Number.isFinite(stock) ||
      price <= 0 ||
      stock < 0 ||
      !Number.isInteger(stock)
    ) {
      setMessage("Enter a valid name, price and whole-number stock.");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      category: form.category,
      price,
      stock,
    };

    setProducts((current) => [newProduct, ...current]);

    setForm({
      name: "",
      category: "Little Girls",
      price: "",
      stock: "",
    });

    setShowForm(false);
    setMessage("Product added successfully!");
  }

  function handleDelete(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmed) return;

    setProducts((current) =>
      current.filter((product) => product.id !== id)
    );

    setMessage("Product deleted.");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm text-[#A9666A]">Store Management</p>
          <h1 className="mt-2 text-3xl font-semibold text-[#49372F]">
            Products
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Manage your boutique collection.
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            setMessage("");
            setShowForm((current) => !current);
          }}
          className="rounded-xl bg-[#A9666A] px-5 py-3 text-sm font-medium text-white hover:bg-[#92565B]"
        >
          {showForm ? "Cancel" : "+ Add Product"}
        </button>
      </div>

      {message && (
        <p
          role="status"
          className="rounded-xl bg-rose-50 p-4 text-sm text-[#92565B]"
        >
          {message}
        </p>
      )}

      {showForm && (
        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded-2xl border border-rose-100 bg-white p-5 md:p-6"
        >
          <h2 className="text-xl font-semibold text-[#49372F]">
            Add New Product
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="space-y-2 text-sm text-stone-600">
              Product Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Floral Summer Dress"
                required
                className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-[#A9666A]"
              />
            </label>

            <label className="space-y-2 text-sm text-stone-600">
              Category
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none focus:border-[#A9666A]"
              >
                <option>Little Girls</option>
                <option>Little Boys</option>
                <option>Baby Essentials</option>
              </select>
            </label>

            <label className="space-y-2 text-sm text-stone-600">
              Price (Rs.)
              <input
                name="price"
                type="number"
                min="0.01"
                step="0.01"
                value={form.price}
                onChange={handleChange}
                placeholder="2499"
                required
                className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-[#A9666A]"
              />
            </label>

            <label className="space-y-2 text-sm text-stone-600">
              Stock Quantity
              <input
                name="stock"
                type="number"
                min="0"
                step="1"
                value={form.stock}
                onChange={handleChange}
                placeholder="20"
                required
                className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-[#A9666A]"
              />
            </label>
          </div>

          <button
            type="submit"
            className="rounded-xl bg-[#A9666A] px-6 py-3 text-sm font-medium text-white hover:bg-[#92565B]"
          >
            Save Product
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-rose-100 bg-white p-5">
          <p className="text-sm text-stone-500">Total Products</p>
          <p className="mt-2 text-3xl font-semibold text-[#49372F]">
            {products.length}
          </p>
        </div>

        <div className="rounded-2xl border border-rose-100 bg-white p-5">
          <p className="text-sm text-stone-500">Low Stock (10 or fewer)</p>
          <p className="mt-2 text-3xl font-semibold text-[#A9666A]">
            {products.filter(
              (product) => product.stock <= 10
            ).length}
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-rose-100 bg-white">
        <div className="border-b border-rose-100 p-4">
          <input
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-xl border border-stone-200 px-4 py-3 outline-none focus:border-[#A9666A]"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="bg-[#FCF4F1] text-stone-600">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-t border-rose-50">
                  <td className="p-4 font-medium text-[#49372F]">
                    {product.name}
                  </td>
                  <td className="p-4 text-stone-500">
                    {product.category}
                  </td>
                  <td className="p-4">
                    Rs. {product.price.toLocaleString("en-PK")}
                  </td>
                  <td className="p-4">{product.stock}</td>
                  <td className="p-4">
                    <button
                      type="button"
                      onClick={() => handleDelete(product.id)}
                      className="font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {filteredProducts.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="p-8 text-center text-stone-500"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
