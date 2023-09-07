import React, { useState } from 'react';
import './App.css';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Products from './pages/Products';
import Register from './pages/Register';
import MobileMenu from './components/MobileNav';
import Wishlist from './pages/Wishlist';

function App() {
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav)
  }
  const toggleCart = () => {
    setOpenCart(!openCart)
  }

  return (
    <>
      <MobileMenu openNav={openNav} toggleNav={toggleNav} />
      <Announcement />
      <Navbar openNav={openNav} toggleNav={toggleNav} toggleCart={toggleCart} openCart={openCart} />
      <Home />
      <Footer />
    </>
  );
}

export default App;
