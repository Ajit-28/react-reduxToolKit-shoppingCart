import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './router/AllRoutes'
import Header from './components/Header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AllRoutes />
    </BrowserRouter>
  )
}
