import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
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

  const theme = {
    colors : {
      black: '#0f2130', 
      primary: 'teal',
      brown: '#4e4537',
      grey: '#535348'
    }
  }
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <MobileMenu openNav={openNav} toggleNav={toggleNav} />
        <Announcement />
        <Navbar openNav={openNav} toggleNav={toggleNav} toggleCart={toggleCart} openCart={openCart} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/wishlist' element={<Wishlist />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products />} />
          <Route path='/productlist' element={<ProductList />} />
        </Routes>
        <Footer />
      </ ThemeProvider>
    </Router>
  );
}

export default App;
