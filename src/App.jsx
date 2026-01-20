import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"

import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import VinylsPage from "./pages/VinylsPage"
import DetailPage from "./pages/DetailPage"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import SuccessPage from "./pages/SuccessPage"
import NotFoundPage from "./pages/NotFoundPage"
import WishlistPage from "./pages/WishlistPage"

import ScrollToTop from "./components/layout/ScrollToTop"
import WelcomePopup from "./components/homePage/WelcomePopup"

import { CartProvider } from "./contexts/CartContext"
import { ProductProvider } from "./contexts/ProductContext"
import { WishlistProvider } from "./contexts/WishlistContext"

function App() {
  return (
    <ProductProvider>
      <WishlistProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <WelcomePopup />
            <Routes>
              <Route element={<DefaultLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/vinyls" element={<VinylsPage />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/checkout' element={<CheckoutPage />} />
                <Route path="/success" element={<SuccessPage />} />
                <Route path='/products/:slug' element={<DetailPage />} />
                <Route path='/wishlist' element={<WishlistPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </WishlistProvider>
    </ProductProvider>
  )
}

export default App