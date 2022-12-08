import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Navbar from './components/NavBar/Navbar.jsx'
import Footer from './components/Footer.jsx'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './containers/CartContainer/CartContainer'

function App() {

  return (
    
    <BrowserRouter>
      <Navbar/>
      <Routes >
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/detail' element={<ItemDetailContainer /> } />
        <Route path='/cart' element={ <CartContainer /> } />
        <Route path='*' element={<Navigate to='/' />}/>
      </Routes> 
      
      {/* <ItemListContainer/> */}
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App