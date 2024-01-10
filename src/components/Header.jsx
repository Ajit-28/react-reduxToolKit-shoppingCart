import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Header() {
    const data = useSelector((state) => state.carts.cart)

    const total = data.reduce((acc, item) => acc + item.totalPrice, 0);
    return (
        <div className='headerContainer'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/cart'>Cart</Link>
                </li>
                <li>
                    <Link to='/counter'>Counter</Link>
                </li>
                <li>
                    <Link to='/users'>Crud</Link>
                </li>
            </ul>
            <div className='icon'>
                <Link to='/cart'>{data.length}</Link>
            </div>
            <h4 style={{marginRight: '10px'}}>Total Price : ${total.toFixed(2)}</h4>
        </div>
    )
}
