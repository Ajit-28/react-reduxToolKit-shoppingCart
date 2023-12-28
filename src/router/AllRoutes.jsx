import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Cart from '../components/Cart'
import Counter from '../components/Counter'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/counter' element={<Counter />} />
        </Routes>
    )
}
