import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/CartSlice';

export default function Home() {
    const [data, setData] = useState([]);
    const dispatch = useDispatch()

    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapiserver.reactbd.com/products');
            console.log('All Products Data', response.data)
            setData(response.data);
        } catch (error) {
            console.log('error', error)
        }
    }

    const handleProduct = (product) => {
        dispatch(addToCart(product))
    }

    return (
        <div className='itemContainer'>
            {
                data.map((item, index) => (
                    <div key={index} className='items'>
                        <div className='imageContainer'>
                            <img src={item.image} className='images' />
                        </div>
                        <div className='bottomContainer'>
                            <div className='textContainer'>
                                <p>{item.title}</p>
                                <p style={{ marginLeft: 'auto' }}>Price : $ {item.price}</p>
                            </div>
                            <button className='addBtn' onClick={() => handleProduct(item)} >Add To Cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
