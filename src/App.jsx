import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import VinylsPage from "./pages/VinylsPage"
import DetailPage from "./pages/DetailPage"
import { CartProvider } from "../contexts/CartContext"
import CartPage from "./pages/CartPage"
import CheckoutPage from "./pages/CheckoutPage"
import SuccessPage from "./pages/SuccessPage"
import ScrollToTop from "./components/ScrollToTop"

function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/vinyls" element={<VinylsPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/checkout' element={<CheckoutPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path='/:slug' element={<DetailPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>


    </>
  )
}

export default App
