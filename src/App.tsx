import './App.css'
import Navbar from './components/navbar'
import Home from './pages/home'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import CartPage from './pages/cartpage'
import WishList from './pages/wishList'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/wishlist' element={<WishList />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>

      <Footer />

      <ToastContainer position='top-right' autoClose={1000} />
    </>
  )
}

export default App
