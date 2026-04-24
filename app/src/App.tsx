import { HashRouter, Routes, Route } from "react-router-dom";
import { StoreProvider } from "@/context/StoreContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import CategorySidebar from "@/components/CategorySidebar";
import HomePage from "@/pages/HomePage";
import ShopPage from "@/pages/ShopPage";
import ProductPage from "@/pages/ProductPage";
import CartPage from "@/pages/CartPage";
import CheckoutPage from "@/pages/CheckoutPage";
import AboutPage from "@/pages/AboutPage";
import SupportPage from "@/pages/SupportPage";
import ScrollToTop from "@/components/ScrollToTop";

function App() {
  return (
    <StoreProvider>
      <HashRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-hack-white text-hack-black font-body">
          <Header />
          <CategorySidebar />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/shop/:category" element={<ShopPage />} />
              <Route path="/product/:slug" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/support" element={<SupportPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </StoreProvider>
  );
}

export default App;
