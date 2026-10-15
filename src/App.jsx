
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import AnnouncementBar from "./components/AnnouncementBar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Admin components
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/Dashboard";
import Products from "./admin/Products";

// Client website layout
function StoreLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />

      <Navbar />
      <AnnouncementBar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <Toast />
    </div>
  );
}

// Main application
export default function App() {
  return (
    <Routes>
      {/* Client website */}
      <Route path="/*" element={<StoreLayout />} />

      {/* Admin panel */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="products" element={<Products />} />
      </Route>
    </Routes>
  );
}
