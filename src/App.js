import React from 'react';
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
  return (
    <>
      <MobileNav />
      <Announcement />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
