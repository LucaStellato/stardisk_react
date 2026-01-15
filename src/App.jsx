import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import VinylsPage from "./pages/VinylsPage"
import DetailPage from "./pages/DetailPage"
import { CartProvider } from "../contexts/CartContext"
import CartPage from "./pages/CartPage"

function App() {


  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/vinyls" element={<VinylsPage />} />
              <Route path='/:slug' element={<DetailPage />} />
              <Route path='/cart' element={<CartPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>


    </>
  )
}

export default App
