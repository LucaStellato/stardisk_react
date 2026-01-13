import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import DefaultLayout from "./layouts/DefaultLayout"
import HomePage from "./pages/HomePage"
import VinylsPage from "./pages/VinylsPage"
import DetailPage from "./pages/DetailPage"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/vinyls" element={<VinylsPage />} />
            <Route path='/vinyls/:slug' element={<DetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
