import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, updateUser } from '../redux/UserSlice';

export default function UserData() {
    const userData = useSelector(state => state.user.users)
    const dispatch = useDispatch();

    return (
        <div style={{ margin: '40px' }}>
            <div style={{ display: 'flex' }}>
                <h2 style={{ marginBottom: '10px' }}>Users Data</h2>
                <Link to='/form' style={{ marginLeft: 'auto' }}>
                    <button style={{ width: '50px', height: '30px' }}>Add</button>
                </Link>
            </div>
            {
                userData.map((data, index) => (
                    <div key={index}>
                        <div style={{ border: '.5px solid lightgray', marginBottom: '10px', padding: '20px' }}>
                            <p style={{ lineHeight: '30px', fontWeight: 'bold', fontSize: '20px' }}>{data.first_name} {' '} {data.last_name}</p>
                            <Link to={`/update/${data.id}`}>
                                <button
                                    style={{
                                        marginTop: '10px',
                                        marginRight: '10px',
                                        width: '50px',
                                        height: '30px'
                                    }}>
                                    Edit
                                </button>
                            </Link>

                            <button
                                onClick={() => dispatch(deleteUser(data.id))}
                                style={{
                                    marginTop: '10px',
                                    marginRight: '10px',
                                    width: '50px', height: '30px'
                                }}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
