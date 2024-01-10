import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from '../redux/UserSlice';

export default function UpdateUser() {
    const { id } = useParams();
    const navigate = useNavigate(); 
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.user.users);
    const currentUser = userData.find((user) => user.id === parseInt(id));

    const [formData, setFormData] = useState({
        first_name: currentUser ? currentUser.first_name : '',
        last_name: currentUser ? currentUser.last_name : '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id: parseInt(id), updatedUserData: formData }));
        navigate('/users');
    };

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '300px',
                    height: '300px',
                    border: '.5px solid gray',
                }}
            >
                <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold' }}>Edit User Form</p>
                <input
                    name="first_name"
                    value={formData.first_name}
                    placeholder="first_name"
                    type="text"
                    onChange={handleChange}
                    style={{
                        margin: '20px',
                        height: '30px',
                        paddingLeft: '10px',
                    }}
                />
                <input
                    name="last_name"
                    value={formData.last_name}
                    placeholder="last_name"
                    type="text"
                    onChange={handleChange}
                    style={{
                        margin: '20px',
                        height: '30px',
                        paddingLeft: '10px',
                    }}
                />

                <button style={{ margin: '20px', height: '30px' }} type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
}
