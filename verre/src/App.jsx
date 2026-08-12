import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import AddProduct from './pages/AddProduct'
import Navbar from './components/Navbar'

function App() {
  return (
    <Routes>
      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
  )
}

export default App
