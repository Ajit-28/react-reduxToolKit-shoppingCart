import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Cart from '../components/Cart'
import Counter from '../components/Counter'
import UserData from '../crud_operation/UserData'
import AddForm from '../crud_operation/AddForm'
import UpdateForm from '../crud_operation/UpdateForm'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/counter' element={<Counter />} />
            <Route path='/users' element={<UserData />} />
            <Route path='/form' element={<AddForm />} />
            <Route path='/update/:id' element={<UpdateForm />} />
        </Routes>
    )
}
