import React, { useState } from 'react';
import './App.css';
import Announcement from './components/Announcement';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductList from './pages/ProductList';
import Products from './pages/Products';
import Register from './pages/Register';
import MobileNav from './components/MobileNav';

function App() {
  const [openNav, setOpenNav] = useState(false);

  const toggleNav = () => {
    setOpenNav(!openNav)
  }

  return (
    <>
      <MobileNav openNav={openNav} toggleNav={toggleNav} />
      <Announcement />
      <Navbar openNav={openNav} toggleNav={toggleNav}/>
      <Home />
      <Footer />
    </>
  );
}

export default App;
