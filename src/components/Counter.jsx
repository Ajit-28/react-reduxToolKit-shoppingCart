import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, descrementCounter } from '../redux/CounterSlice';

export default function Counter() {
    const count = useSelector((state) => state.count.counter)
    const dispatch = useDispatch();

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h3>Counter : {count} </h3>
            <div style={{ display: 'flex' }}>
                <button
                    style={{
                        margin: '10px',
                        height: '30px',
                        width: '100px',
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}
                    onClick={() => dispatch(incrementCounter())}>
                    +
                </button>
                <button
                    disabled={count === 0}
                    style={{
                        margin: '10px',
                        height: '30px',
                        width: '100px',
                        backgroundColor: 'blue',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        fontSize: '20px',
                        fontWeight: 'bold'
                    }}
                    onClick={() => dispatch(descrementCounter())}>
                    -
                </button>
            </div>
        </div>
    )
}
